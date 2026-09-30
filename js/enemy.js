// TDS Web - Enemy Class & Inspector

class Enemy {
    constructor(id, typeKey, gameMap, difficultyMultiplier = 1.0, modifiers = []) {
        this.id = id;
        this.typeKey = typeKey;
        const template = BASE_ENEMIES[typeKey] || BASE_ENEMIES.normal;

        this.name = template.name;
        this.baseHp = Math.round(template.hp * difficultyMultiplier);
        this.maxHp = this.baseHp;
        this.hp = this.maxHp;
        this.baseSpeed = template.speed;
        this.speed = this.baseSpeed;
        this.reward = Math.round(template.reward * (1 + (difficultyMultiplier - 1) * 0.5));
        this.color = template.color;
        this.size = template.size;

        this.hidden = template.hidden;
        this.flying = template.flying;
        this.lead = template.lead;
        this.boss = template.boss || false;

        this.shield = 0;
        this.maxShield = 0;

        // Modifiers applied
        this.modifiers = [];
        this.isAgro = false;
        this.isBloated = false;
        this.isShielded = false;
        this.isRegen = false;
        this.isSwift = false;

        modifiers.forEach(modKey => {
            const mod = ENEMY_MODIFIERS[modKey];
            if (mod) {
                this.modifiers.push(mod);
                mod.apply(this);
            }
        });

        // Pathing & position
        this.gameMap = gameMap;
        this.distanceTraversed = 0;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.updatePosition();

        // Status effects
        this.slowTimer = 0;
        this.slowFactor = 1.0;
        this.stunTimer = 0;
        this.burnTimer = 0;
        this.burnDamagePerSec = 0;

        // Hover inspection state
        this.isHovered = false;
        this.dead = false;
        this.reachedEnd = false;
    }

    updatePosition() {
        const pos = this.gameMap.getPositionAtDistance(this.distanceTraversed);
        this.x = pos.x;
        // If flying, offset
        this.y = this.flying ? pos.y - 12 : pos.y;
        this.groundY = pos.y;
        this.angle = pos.angle;
    }

    update(dt) {
        if (this.dead || this.reachedEnd) return;

        // Handle Regen modifier
        if (this.isRegen && this.hp < this.maxHp && this.hp > 0) {
            this.hp = Math.min(this.maxHp, this.hp + this.maxHp * 0.04 * dt);
        }

        // Handle Burn status
        if (this.burnTimer > 0) {
            this.burnTimer -= dt;
            this.takeDamage(this.burnDamagePerSec * dt, 'fire');
        }

        // Handle Stun status
        if (this.stunTimer > 0) {
            this.stunTimer -= dt;
            return; // Stunned enemies cannot move!
        }

        // Calculate current effective speed
        let currentSpeed = this.speed;
        if (this.slowTimer > 0) {
            this.slowTimer -= dt;
            if (!this.isSwift) {
                currentSpeed *= this.slowFactor;
            }
        }

        // Move along path
        this.distanceTraversed += currentSpeed * dt;
        this.updatePosition();

        // Check if reached end of map
        if (this.distanceTraversed >= this.gameMap.pathLength) {
            this.reachedEnd = true;
        }
    }

    applySlow(factor, duration) {
        if (this.isSwift) return;
        this.slowFactor = factor;
        this.slowTimer = Math.max(this.slowTimer, duration);
    }

    applyStun(duration) {
        if (this.isSwift) return;
        this.stunTimer = Math.max(this.stunTimer, duration);
    }

    applyBurn(dps, duration) {
        this.burnDamagePerSec = Math.max(this.burnDamagePerSec, dps);
        this.burnTimer = Math.max(this.burnTimer, duration);
    }

    takeDamage(amount, damageType = 'bullet', canHarmLead = false) {
        if (this.dead) return 0;

        // Lead armor mechanic: immune to physical bullets unless canHarmLead or explosive/energy/fire
        if (this.lead && damageType === 'bullet' && !canHarmLead) {
            // Clang effect / blocked damage
            return 0;
        }

        let actualDamage = amount;

        // Apply damage to shield first if present
        if (this.shield > 0) {
            if (this.shield >= actualDamage) {
                this.shield -= actualDamage;
                return actualDamage;
            } else {
                actualDamage -= this.shield;
                this.shield = 0;
            }
        }

        // Apply remaining damage to HP
        this.hp -= actualDamage;
        if (this.hp <= 0) {
            this.hp = 0;
            this.dead = true;
        }

        return amount;
    }

    getProgressRatio() {
        return Math.min(1.0, this.distanceTraversed / this.gameMap.pathLength);
    }

    render(ctx) {
        if (this.dead) return;

        ctx.save();

        // Draw shadow (especially distinct for flying units)
        ctx.beginPath();
        ctx.ellipse(this.x, this.groundY + 8, this.size * 0.9, this.size * 0.4, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.flying ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.4)';
        ctx.fill();

        // Hidden Enemy Aura/Stealth Ring
        if (this.hidden) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size + 4, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.7)';
            ctx.setLineDash([4, 4]);
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Agro Red Glowing Aura
        if (this.isAgro) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size + 6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
            ctx.fill();
        }

        // Draw Main Enemy Body
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.hidden ? this.adjustAlpha(this.color, 0.5) : this.color;
        ctx.fill();

        // Outline / Armor
        ctx.lineWidth = this.boss ? 4 : 2;
        ctx.strokeStyle = this.lead ? '#334155' : '#000000';
        ctx.stroke();

        // Lead armor metallic plates decoration
        if (this.lead) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = '#475569';
            ctx.fill();
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        // Flying Wing Indicators
        if (this.flying) {
            ctx.fillStyle = '#38bdf8';
            // Left Wing
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x - this.size - 10, this.y - 8);
            ctx.lineTo(this.x - this.size + 2, this.y + 4);
            ctx.fill();
            // Right Wing
            ctx.beginPath();
            ctx.moveTo(this.x + this.size, this.y);
            ctx.lineTo(this.x + this.size + 10, this.y - 8);
            ctx.lineTo(this.x + this.size - 2, this.y + 4);
            ctx.fill();
        }

        // Stunned / Frozen / Slowed Visual Effect overlays
        if (this.stunTimer > 0) {
            ctx.fillStyle = '#facc15';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('⚡', this.x, this.y - this.size - 12);
        } else if (this.slowTimer > 0) {
            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('❄️', this.x, this.y - this.size - 12);
        }

        // Enemy Health Bar (Drawn above enemy)
        const barWidth = Math.max(26, this.size * 2);
        const barHeight = 5;
        const barX = this.x - barWidth / 2;
        const barY = this.y - this.size - 10;

        // Health Bar BG
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(barX - 1, barY - 1, barWidth + 2, barHeight + 2);

        // Core HP Fill
        const hpPercent = Math.max(0, this.hp / this.maxHp);
        ctx.fillStyle = hpPercent > 0.5 ? '#22c55e' : hpPercent > 0.25 ? '#eab308' : '#ef4444';
        ctx.fillRect(barX, barY, barWidth * hpPercent, barHeight);

        // Shield Bar Fill (Overlaid blue bar if shielded)
        if (this.maxShield > 0 && this.shield > 0) {
            const shieldPercent = Math.max(0, this.shield / this.maxShield);
            ctx.fillStyle = '#3b82f6';
            ctx.fillRect(barX, barY - 3, barWidth * shieldPercent, 2);
        }

        // Highlight ring if hovered by mouse
        if (this.isHovered) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size + 8, 0, Math.PI * 2);
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        ctx.restore();
    }

    adjustAlpha(hexColor, alpha) {
        // Convert hex to rgba
        let c = hexColor.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        const num = parseInt(c, 16);
        const r = (num >> 16) & 255;
        const g = (num >> 8) & 255;
        const b = num & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}
