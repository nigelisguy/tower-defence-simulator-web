// TDS Web - Tower Class (Fixed Rotation & Aspect Ratio)

class Tower {
    constructor(id, typeKey, x, y) {
        this.id = id;
        this.typeKey = typeKey;
        this.config = TOWERS[typeKey];
        this.x = x;
        this.y = y;

        this.level = 0;
        this.upgradePath = null;
        this.targetMode = TARGET_MODES.FIRST;
        this.totalSpent = this.config.cost;
        this.kills = 0;
        this.totalDamageDealt = 0;

        this.cooldown = 0;
        this.angle = 0;
        this.selected = false;
        this.hovered = false;
        this.operatorBuffTimer = 0;
        this.operatorBuffSpeed = 0;
        this.debuffTimer = 0;
        this.debuffReduction = 0;
        this.abilityCooldown = 0;
        this.abilityCooldownDuration = 0;
        this.troopSpawnTimer = 0;

        this.applyStats();
    }

    applyStats() {
        const path = this.upgradePath && this.config.upgradePaths[this.upgradePath];
        const stats = path && this.level >= this.config.upgrades.length
            ? path.upgrades[this.level - this.config.upgrades.length]
            : this.config.upgrades[Math.min(this.level, this.config.upgrades.length - 1)];
        this.name = this.config.name;
        this.damage = stats.damage !== undefined ? stats.damage : 0;
        this.range = stats.range;
        this.attackSpeed = stats.attackSpeed !== undefined ? stats.attackSpeed : 1.0;
        this.seeHidden = stats.seeHidden || false;
        this.targetFlying = stats.targetFlying || false;
        this.canHarmLead = stats.HarmLead || false;
        this.splashRadius = stats.splashRadius || 0;
        this.stunDuration = stats.stunDuration || 0;
        this.targetsCount = stats.targetsCount || 1;
        this.income = stats.income || 0;

        this.buffRange = stats.buffRange || 0;
        this.buffSpeed = stats.buffSpeed || 0;
        this.auraRange = stats.auraRange || 0;
        this.operatorRangeStack = stats.operatorRangeStack || 0;
        this.operatorBuff = stats.operatorBuff || 0;
        this.operatorBuffDuration = stats.operatorBuffDuration || 0;
        this.supportRange = stats.supportRange || 0;
        this.reloadReduction = stats.reloadReduction || 0;
        this.debuffReduction = stats.debuffReduction || 0;
        this.troopType = stats.troopType || null;
        this.troopDamage = stats.troopDamage || 0;
        this.troopRange = stats.troopRange || 0;
        this.troopSpeed = stats.troopSpeed || 0;
        this.troopIncome = stats.troopIncome || 0;
        this.troopSpawnInterval = stats.troopSpawnInterval || 0;
        this.vehicleCooldown = stats.vehicleCooldown || 0;
        this.vehicleDamage = stats.vehicleDamage || 0;
        this.vehicleSpeed = stats.vehicleSpeed || 0;
        this.relocationCooldown = stats.relocationCooldown || 0;
        this.rangeBoost = stats.rangeBoost || 0;
        this.damageBoost = stats.damageBoost || 0;
        this.upgradeDiscount = stats.upgradeDiscount || 0;
        this.trackRangeFraction = stats.trackRangeFraction || 0;
        this.beatEffect = stats.beatEffect || null;
        this.abilityDamage = stats.abilityDamage || 0;
        this.abilityMoney = stats.abilityMoney || 0;
        this.abilityPower = stats.abilityPower || 0;
        this.abilityDuration = stats.abilityDuration || 0;
        this.abilityCooldownDuration = stats.abilityCooldown || 0;

        this.placement = this.config.placement;
    }

    getUpgradeCost() {
        if (this.upgradePath) {
            const pathUpgrades = this.config.upgradePaths[this.upgradePath].upgrades;
            const nextPathIndex = this.level - this.config.upgrades.length + 1;
            return pathUpgrades[nextPathIndex] ? pathUpgrades[nextPathIndex].cost : null;
        }
        if (this.config.upgradePaths && this.level >= this.config.upgrades.length - 1) return null;
        if (this.level >= this.config.upgrades.length - 1) return null;
        return this.config.upgrades[this.level + 1].cost;
    }

    getUpgradeOptions() {
        if (this.upgradePath || !this.config.upgradePaths || this.level !== this.config.upgrades.length - 1) return [];
        return Object.entries(this.config.upgradePaths).map(([key, path]) => ({
            key,
            name: path.name,
            stats: path.upgrades[0]
        }));
    }

    getNextUpgradeStats() {
        if (this.upgradePath) {
            const pathUpgrades = this.config.upgradePaths[this.upgradePath].upgrades;
            return pathUpgrades[this.level - this.config.upgrades.length + 1] || null;
        }
        if (this.getUpgradeOptions().length > 0) return null;
        if (this.level >= this.config.upgrades.length - 1) return null;
        return this.config.upgrades[this.level + 1];
    }

    upgrade(pathKey = null) {
        const options = this.getUpgradeOptions();
        if (options.length > 0) {
            const chosenPath = options.find(option => option.key === pathKey);
            if (!chosenPath) return 0;
            this.upgradePath = pathKey;
            this.level++;
            this.totalSpent += chosenPath.stats.cost;
            this.applyStats();
            sounds.playUpgrade();
            return chosenPath.stats.cost;
        }

        const cost = this.getUpgradeCost();
        if (cost !== null) {
            this.level++;
            this.totalSpent += cost;
            this.applyStats();
            sounds.playUpgrade();
            return cost;
        }
        return 0;
    }

    getSellValue() {
        return Math.floor(this.totalSpent * 0.75);
    }

    cycleTargetMode() {
        const idx = TARGET_MODE_LIST.indexOf(this.targetMode);
        this.targetMode = TARGET_MODE_LIST[(idx + 1) % TARGET_MODE_LIST.length];
    }

    setTargetMode(mode) {
        if (TARGET_MODE_LIST.includes(mode)) {
            this.targetMode = mode;
        }
    }

    canTargetEnemy(enemy) {
        if (this.config.targetFilter === 'hidden' && !enemy.hidden) return false;
        if (this.config.targetFilter === 'hidden_or_lead' && !enemy.hidden && !enemy.lead) return false;
        if (enemy.hidden && !this.seeHidden) return false;
        if (enemy.flying && !this.targetFlying) return false;
        return true;
    }

    applyDebuff(duration) {
        this.debuffTimer = Math.max(this.debuffTimer, duration);
    }

    findTarget(enemies, commanderBuffActive = false, rangeBonus = 0) {
        if (this.typeKey === 'farm' || this.typeKey === 'kingpin') return null;

        const currentRange = this.range * (commanderBuffActive ? 1.15 : 1.0) * (1 + rangeBonus);

        const validEnemies = enemies.filter(e => {
            if (e.dead || e.reachedEnd) return false;
            if (!this.canTargetEnemy(e)) return false;
            const dist = Math.hypot(e.x - this.x, e.y - this.y);
            return dist <= currentRange;
        });

        if (validEnemies.length === 0) return null;

        switch (this.targetMode) {
            case TARGET_MODES.FIRST:
                validEnemies.sort((a, b) => b.distanceTraversed - a.distanceTraversed);
                return validEnemies[0];

            case TARGET_MODES.LAST:
                validEnemies.sort((a, b) => a.distanceTraversed - b.distanceTraversed);
                return validEnemies[0];

            case TARGET_MODES.NEAREST:
                validEnemies.sort((a, b) => {
                    const distA = Math.hypot(a.x - this.x, a.y - this.y);
                    const distB = Math.hypot(b.x - this.x, b.y - this.y);
                    return distA - distB;
                });
                return validEnemies[0];

            case TARGET_MODES.FURTHEST:
                validEnemies.sort((a, b) => {
                    const distA = Math.hypot(a.x - this.x, a.y - this.y);
                    const distB = Math.hypot(b.x - this.x, b.y - this.y);
                    return distB - distA;
                });
                return validEnemies[0];

            case TARGET_MODES.MOST_HP:
                validEnemies.sort((a, b) => b.hp - a.hp);
                return validEnemies[0];

            case TARGET_MODES.LEAST_HP:
                validEnemies.sort((a, b) => a.hp - b.hp);
                return validEnemies[0];

            case TARGET_MODES.RANDOM:
                return validEnemies[Math.floor(Math.random() * validEnemies.length)];

            default:
                return validEnemies[0];
        }
    }

    update(dt, enemies, projectiles, commanderBuffSpeed = 0, supportBuffs = {}) {
        const speedBonus = commanderBuffSpeed + (supportBuffs.reloadSpeedBonus || 0) + this.operatorBuffSpeed;
        const activeDebuffReduction = Math.max(this.debuffReduction, supportBuffs.debuffReduction || 0);
        this.supportRangeBonus = supportBuffs.rangeBonus || 0;
        this.supportDamageBonus = supportBuffs.damageBonus || 0;
        if (this.cooldown > 0) {
            this.cooldown -= dt * (1 + speedBonus);
        }
        if (this.debuffTimer > 0) this.debuffTimer = Math.max(0, this.debuffTimer - dt * (1 + activeDebuffReduction));
        if (this.abilityCooldown > 0) this.abilityCooldown -= dt;

        if (this.typeKey === 'commander' || this.typeKey === 'farm' || this.typeKey === 'kingpin') {
            return;
        }

        if (this.cooldown <= 0) {
            const assistedTarget = supportBuffs.operatorTarget;
            const target = assistedTarget && this.canTargetEnemy(assistedTarget)
                ? assistedTarget
                : this.findTarget(enemies, speedBonus > 0, this.supportRangeBonus);
            if (target) {
                this.angle = Math.atan2(target.y - this.y, target.x - this.x);

                const speedMult = 1.0 + speedBonus;
                const effectiveDelay = this.attackSpeed / speedMult;
                this.cooldown = effectiveDelay;

                this.fire(target, enemies, projectiles);
            }
        }
    }

    fire(target, enemies, projectiles) {
        sounds.playShoot(this.typeKey);

        if (this.typeKey === 'electroshocker') {
            const rangeEnemies = enemies.filter(e => {
                if (e.dead || e.reachedEnd) return false;
                if (!this.canTargetEnemy(e)) return false;
                return Math.hypot(e.x - this.x, e.y - this.y) <= this.range;
            });

            rangeEnemies.sort((a, b) => Math.hypot(a.x - target.x, a.y - target.y) - Math.hypot(b.x - target.x, b.y - target.y));
            const shockTargets = rangeEnemies.slice(0, this.targetsCount);

            shockTargets.forEach(t => {
                const dmgDealt = t.takeDamage(this.damage * (1 + this.supportDamageBonus), 'lightning', true);
                t.applyStun(this.stunDuration);
                t.applySlow(0.4, 1.5);
                this.totalDamageDealt += dmgDealt;
                if (t.dead) this.kills++;

                projectiles.push({
                    type: 'lightning',
                    startX: this.x,
                    startY: this.y,
                    endX: t.x,
                    endY: t.y,
                    life: 0.15
                });
            });
        } else {
            projectiles.push(new Projectile({
                startX: this.x,
                startY: this.y,
                target: target,
                damage: this.damage * (1 + this.supportDamageBonus),
                speed: this.typeKey === 'sniper' || this.typeKey === 'ranger' ? 2000 : 700,
                splashRadius: this.splashRadius,
                canHarmLead: this.canHarmLead,
                typeKey: this.typeKey,
                sourceTower: this
            }));
        }
    }

    render(ctx, isCommanderBuffed = false) {
        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.fillStyle = this.placement === 'cliff' ? '#451a03' : '#1e293b';
        ctx.fill();
        ctx.strokeStyle = this.placement === 'cliff' ? '#f59e0b' : '#3b82f6';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Check for custom SVG sprite matching equipped skin
        const activeSkin = playerProfile.getTowerSkin(this.typeKey);
        const spriteId = `${this.typeKey}_${activeSkin}_${Math.min(4, this.level)}`;
        const hasSkinSprite = !!assets.getImage(spriteId);
        const spriteImg = assets.getImage(spriteId) || assets.getImage(`${this.typeKey}_default_${Math.min(4, this.level)}`);

        if (spriteImg) {
            ctx.save();
            // Correct rotation so character faces directly forward toward target
            ctx.rotate(this.angle - Math.PI / 2);
            // Preserve 26.3 x 41.2 natural SVG ratio (~0.64) to prevent squishing!
            const renderWidth = 24;
            const renderHeight = 38;
            if (!hasSkinSprite && activeSkin === 'gold') ctx.filter = 'sepia(1) saturate(4) hue-rotate(5deg)';
            ctx.drawImage(spriteImg, -renderWidth / 2, -renderHeight / 2, renderWidth, renderHeight);
            ctx.filter = 'none';
            ctx.restore();
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, 14, 0, Math.PI * 2);
            ctx.fillStyle = this.config.color;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            if (this.typeKey !== 'farm' && this.typeKey !== 'commander') {
                ctx.save();
                ctx.rotate(this.angle);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(0, -3, 20, 6);
                ctx.restore();
            }

            ctx.fillStyle = '#ffffff';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.config.icon, 0, 0);
        }

        // Render Upgrade Box SVG & Roman Numeral Badge
        const boxImgId = this.level >= 4 ? 'upgradeboxgold' : 'upgradebox';
        const boxImg = assets.getImage(boxImgId);
        const romanText = assets.toRoman(this.level);

        if (boxImg) {
            ctx.drawImage(boxImg, 3, 3, 20, 20);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 10px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(romanText, 13, 13);
        } else {
            ctx.beginPath();
            ctx.arc(10, 10, 8, 0, Math.PI * 2);
            ctx.fillStyle = '#0f172a';
            ctx.fill();
            ctx.fillStyle = '#facc15';
            ctx.font = 'bold 9px system-ui, sans-serif';
            ctx.fillText(romanText, 10, 10);
        }

        if (isCommanderBuffed) {
            ctx.fillStyle = '#ef4444';
            ctx.font = '10px sans-serif';
            ctx.fillText('⚡', -10, -10);
        }

        ctx.restore();

        if (this.selected || this.hovered) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.range * (1 + (this.supportRangeBonus || 0)), 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(59, 130, 246, 0.12)';
            ctx.fill();
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            ctx.setLineDash([6, 6]);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }
}
