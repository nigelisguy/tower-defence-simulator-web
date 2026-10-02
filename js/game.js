// TDS Web - Core Game Controller (No Popups & 40 Tower Limit Edition)

class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.difficultyKey = 'intermediate';
        this.difficulty = DIFFICULTIES.intermediate;
        this.selectedMapId = 'crossroads';
        this.activeGameModifiers = [];

        this.gameMap = new GameMap(this.selectedMapId);

        this.cash = this.difficulty.startCash;
        this.baseHp = this.difficulty.baseHp;
        this.maxBaseHp = this.difficulty.baseHp;

        this.wave = 0;
        this.maxWaves = this.difficulty.waves;
        this.waveInProgress = false;
        this.waveEnemiesToSpawn = [];
        this.spawnTimer = 0;
        this.waveCountdown = 0;
        this.waveCountdownDuration = 5;

        this.towers = [];
        this.maxTowersLimit = 40;
        this.vehicles = [];
        this.relocationSource = null;
        this.relocationTarget = null;

        this.enemies = [];
        this.projectiles = [];
        this.particles = [];

        this.selectedShopTowerKey = null;
        this.selectedTower = null;
        this.hoveredEnemy = null;
        this.mouseX = 0;
        this.mouseY = 0;

        this.gameSpeed = 1;
        this.isPaused = false;
        this.lastTime = 0;

        this.totalEnemiesDefeated = 0;
        this.totalCashEarned = this.cash;

        this.waveStartBaseHp = this.baseHp;
        this.waveStartTime = 0;

        this.commanderCallToArmsTimer = 0;
        this.commanderCallToArmsSpeed = 0;
        this.energyDrinkTimer = 0;
        this.camera = {
            x: 0,
            y: 0,
            zoom: 1,

            minZoom: 0.5,
            maxZoom: 2.5,

            dragging: false,
            lastX: 0,
            lastY: 0
        };

        this.setupCameraControls();

        this.initEvents();
        this.initHotkeys();
    }

    startMatch(mapId, difficultyKey, modifiers = []) {
        this.selectedMapId = mapId;
        this.difficultyKey = difficultyKey;
        this.difficulty = DIFFICULTIES[difficultyKey] || DIFFICULTIES.intermediate;
        this.activeGameModifiers = modifiers;

        this.gameMap = new GameMap(mapId);

        let startCashMult = 1.0;
        if (modifiers.includes('low_cash')) startCashMult = 0.5;

        this.cash = Math.round(this.difficulty.startCash * startCashMult);
        this.baseHp = this.difficulty.baseHp;
        this.maxBaseHp = this.difficulty.baseHp;
        this.wave = 0;
        this.maxWaves = this.difficulty.waves;
        this.waveInProgress = false;
        this.waveCountdown = 0;
        this.towers = [];
        this.alliedTroops = [];
        this.vehicles = [];
        this.enemies = [];
        this.projectiles = [];
        this.particles = [];
        this.selectedShopTowerKey = null;
        this.selectedTower = null;
        this.hoveredEnemy = null;
        this.relocationSource = null;
        this.relocationTarget = null;
        this.commanderCallToArmsTimer = 0;
        this.commanderCallToArmsSpeed = 0;
        this.energyDrinkTimer = 0;

        this.totalEnemiesDefeated = 0;
        this.totalCashEarned = this.cash;

        this.camera.zoom = 1;

        this.camera.x = Math.max(
            0,
            (this.gameMap.width - this.canvas.width) / 2
        );

        this.camera.y = Math.max(
            0,
            (this.gameMap.height - this.canvas.height) / 2
        );

        this.clampCamera();
        this.updateUI();
    }

    initEvents() {
      this.canvas.addEventListener('mousemove', (e) => {
          const rect = this.canvas.getBoundingClientRect();

          // The canvas is displayed with object-fit: contain,
          // so calculate the ACTUAL visible drawing area.
          const canvasAspect = this.canvas.width / this.canvas.height;
          const rectAspect = rect.width / rect.height;

          let displayedWidth;
          let displayedHeight;
          let offsetX;
          let offsetY;

          if (rectAspect > canvasAspect) {
              // Letterboxed left/right.
              displayedHeight = rect.height;
              displayedWidth = displayedHeight * canvasAspect;
              offsetX = (rect.width - displayedWidth) / 2;
              offsetY = 0;
          } else {
              // Letterboxed top/bottom.
              displayedWidth = rect.width;
              displayedHeight = displayedWidth / canvasAspect;
              offsetX = 0;
              offsetY = (rect.height - displayedHeight) / 2;
          }

          // Mouse position inside the actual rendered canvas.
          const screenX =
              (e.clientX - rect.left - offsetX) *
              (this.canvas.width / displayedWidth);

          const screenY =
              (e.clientY - rect.top - offsetY) *
              (this.canvas.height / displayedHeight);

          this.mouseX =
              this.camera.x +
              screenX / this.camera.zoom;

          this.mouseY =
              this.camera.y +
              screenY / this.camera.zoom;
            // -----------------------------------------
            // ENEMY HOVER
            // -----------------------------------------

            let foundHover = null;

            for (let i = this.enemies.length - 1; i >= 0; i--) {
                const enemy = this.enemies[i];

                if (enemy.dead || enemy.reachedEnd) continue;

                const dist = Math.hypot(
                    enemy.x - this.mouseX,
                    enemy.y - this.mouseY
                );

                if (dist <= enemy.size + 6) {
                    foundHover = enemy;
                    enemy.isHovered = true;
                    break;
                }
            }

            this.enemies.forEach(e => {
                if (e !== foundHover) {
                    e.isHovered = false;
                }
            });

            this.hoveredEnemy = foundHover;

            // -----------------------------------------
            // TOWER HOVER
            // -----------------------------------------

            this.towers.forEach(t => {
                const dist = Math.hypot(
                    t.x - this.mouseX,
                    t.y - this.mouseY
                );

                t.hovered = dist <= 20;
            });
        });

        this.canvas.addEventListener('click', (e) => {
            sounds.init();

            // Don't treat a camera drag as a game click.
            if (this.camera.wasDragging) {
                this.camera.wasDragging = false;
                return;
            }

            if (this.relocationSource) {
                this.handleTowerRelocationClick();
                return;
            }

            if (this.selectedShopTowerKey) {
                this.placeTower(
                    this.selectedShopTowerKey,
                    this.mouseX,
                    this.mouseY
                );
                return;
            }

            let clickedTower = null;

            for (let t of this.towers) {
                if (
                    Math.hypot(
                        t.x - this.mouseX,
                        t.y - this.mouseY
                    ) <= 22
                ) {
                    clickedTower = t;
                    break;
                }
            }

            this.towers.forEach(t => {
                t.selected = false;
            });

            this.selectedTower = clickedTower;

            if (clickedTower) {
                clickedTower.selected = true;
            }

            this.updateTowerInspectUI();
        });
    }
    getAbilityDefinitions() {
        const abilities = [];

        this.towers.forEach(tower => {
            let ability = null;

            if (tower.typeKey === 'commander') {
                ability = {
                    id: 'call_to_arms',
                    key: 'q',
                    name: 'Call to Arms'
                };
            } else if (tower.typeKey === 'dj') {
                ability = {
                    id: 'drop_the_beat',
                    key: 'r',
                    name: 'Drop the Beat'
                };
            } else if (
                tower.typeKey === 'enforcer' &&
                tower.upgradePath === 'top'
            ) {
                ability = {
                    id: 'relocate',
                    key: 'f',
                    name: 'Relocate'
                };
            } else if (tower.typeKey === 'kingpin') {
                if (tower.troopType === 'runner') {
                    ability = {
                        id: 'kingpin_runners',
                        key: 'g',
                        name: 'Deploy Runners'
                    };
                } else {
                    ability = {
                        id: 'kingpin_crew',
                        key: 'g',
                        name: 'Deploy Crew'
                    };
                }
            } else if (
                tower.typeKey === 'enforcer' &&
                tower.upgradePath === 'bottom'
            ) {
                ability = {
                    id: 'vehicle_strike',
                    key: 'v',
                    name: 'Vehicle Strike'
                };
            }

            if (
                ability &&
                !abilities.some(existing => existing.id === ability.id)
            ) {
                abilities.push(ability);
            }
        });

        return abilities;
    }

    getAbilityTowers(abilityId) {
        return this.towers.filter(tower => {
            switch (abilityId) {
                case 'call_to_arms':
                    return tower.typeKey === 'commander';

                case 'drop_the_beat':
                    return tower.typeKey === 'dj';

                case 'relocate':
                    return (
                        tower.typeKey === 'enforcer' &&
                        tower.upgradePath === 'top'
                    );

                case 'kingpin_crew':
                    return (
                        tower.typeKey === 'kingpin' &&
                        tower.troopType &&
                        tower.troopType !== 'runner'
                    );

                case 'kingpin_runners':
                    return (
                        tower.typeKey === 'kingpin' &&
                        tower.troopType === 'runner'
                    );

                case 'vehicle_strike':
                    return (
                        tower.typeKey === 'enforcer' &&
                        tower.upgradePath === 'bottom'
                    );

                default:
                    return false;
            }
        });
    }
    initHotkeys() {
        window.addEventListener('keydown', (e) => {
            if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
            const key = e.key.toLowerCase();
            const inGame = !document.getElementById('inGameUI').classList.contains('hidden');

            if (inGame && key === 'e' && this.selectedTower) {
                e.preventDefault();
                if (this.selectedTower.getUpgradeOptions().length > 0) {
                    if (window.showToast) window.showToast('Choose an upgrade path in the tower panel');
                } else if (window.upgradeSelectedTower) {
                    window.upgradeSelectedTower();
                }
                return;
            }

            if (inGame && key === 'x' && this.selectedTower) {
                e.preventDefault();
                if (window.sellSelectedTower) window.sellSelectedTower();
                return;
            }

            const ability = this.getAbilityDefinitions().find(item => item.key === key);
            if (inGame && ability) {
                e.preventDefault();
                this.activateAbility(ability.id);
                return;
            }

            const keyNum = parseInt(e.key);
            if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= 5) {
                const towerKey = playerProfile.equippedTowers[keyNum - 1];
                if (towerKey) {
                    this.selectEquippedHotbarTower(towerKey);
                }
            }
        });
    }

    selectEquippedHotbarTower(towerKey) {
        if (this.selectedShopTowerKey === towerKey) {
            this.selectedShopTowerKey = null;
        } else {
            this.selectedShopTowerKey = towerKey;
        }
        this.updateHotbarUI();
    }

    placeTower(typeKey, x, y) {
        if (this.towers.length >= this.maxTowersLimit) {
            if (window.showToast) window.showToast(`Tower limit reached (${this.towers.length}/${this.maxTowersLimit})`);
            return;
        }

        const config = TOWERS[typeKey];
        if (!config) return;

        const towerLimit = config.placementLimit || 8;
        const towerCount = this.towers.filter(tower => tower.typeKey === typeKey).length;
        if (towerCount >= towerLimit) {
            if (window.showToast) window.showToast(`${config.name} limit reached (${towerCount}/${towerLimit})`);
            return;
        }

        let costMult = 1.0;
        if (this.activeGameModifiers.includes('expensive_towers')) costMult = 1.2;

        const cost = Math.round(config.cost * costMult);
        if (this.cash < cost) {
            if (window.showToast) window.showToast('Not enough Cash!');
            return;
        }

        const isValid = this.gameMap.isValidPlacement(x, y, config.placement, this.towers);
        if (!isValid) return;

        const tower = new Tower(`tower_${Date.now()}`, typeKey, x, y);
        this.towers.push(tower);
        this.cash -= cost;
        sounds.playBuy();

        this.selectedShopTowerKey = null;
        this.updateHotbarUI();
        this.updateUI();
    }

    beginTowerRelocation(tower = this.selectedTower) {
        if (!tower || tower.typeKey !== 'enforcer' || tower.upgradePath !== 'top') return;
        if (tower.abilityCooldown > 0) {
            if (window.showToast) window.showToast(`Relocation ready in ${Math.ceil(tower.abilityCooldown)}s`);
            return;
        }
        this.relocationSource = tower;
        this.relocationTarget = null;
        if (window.showToast) window.showToast('Select a tower to relocate, then choose an empty destination');
    }

    handleTowerRelocationClick() {
        if (!this.relocationTarget) {
            this.relocationTarget = this.towers.find(t => t !== this.relocationSource && Math.hypot(t.x - this.mouseX, t.y - this.mouseY) <= 22) || null;
            if (window.showToast) window.showToast(this.relocationTarget ? `Choose a destination for ${this.relocationTarget.name}` : 'Select a tower to relocate');
            return;
        }

        const target = this.relocationTarget;
        const remainingTowers = this.towers.filter(t => t !== target);
        if (!this.gameMap.isValidPlacement(this.mouseX, this.mouseY, target.placement, remainingTowers)) {
            if (window.showToast) window.showToast('Invalid tower destination');
            return;
        }

        target.x = this.mouseX;
        target.y = this.mouseY;
        this.relocationSource.abilityCooldown = this.relocationSource.relocationCooldown;
        this.relocationSource = null;
        this.relocationTarget = null;
        if (window.showToast) window.showToast(`${target.name} relocated`);
        this.updateUI();
    }

    activateOperatorBuffs() {
        const operators = this.towers.filter(tower => tower.typeKey === 'operator');
        operators.forEach(operator => {
            const linkedOperators = operators.filter(other => other !== operator && Math.hypot(other.x - operator.x, other.y - operator.y) <= operator.auraRange);
            const stackedRange = operator.auraRange + linkedOperators.reduce((total, other) => total + other.operatorRangeStack, 0);

            this.towers.forEach(tower => {
                if (tower === operator || Math.hypot(tower.x - operator.x, tower.y - operator.y) > stackedRange) return;
                tower.operatorBuffTimer = Math.max(tower.operatorBuffTimer, operator.operatorBuffDuration);
                tower.operatorBuffSpeed = Math.max(tower.operatorBuffSpeed, operator.operatorBuff);
            });
        });
    }
    clampCamera() {
        const canvas = this.canvas;

        if (!canvas || !this.gameMap) return;

        const mapWidth = this.gameMap.width;
        const mapHeight = this.gameMap.height;

        if (
            !Number.isFinite(mapWidth) ||
            !Number.isFinite(mapHeight)
        ) {
            return;
        }

        const viewWidth =
            canvas.width / this.camera.zoom;

        const viewHeight =
            canvas.height / this.camera.zoom;

        if (mapWidth <= viewWidth) {
            this.camera.x =
                (mapWidth - viewWidth) / 2;
        } else {
            this.camera.x = Math.max(
                0,
                Math.min(
                    this.camera.x,
                    mapWidth - viewWidth
                )
            );
        }

        if (mapHeight <= viewHeight) {
            this.camera.y =
                (mapHeight - viewHeight) / 2;
        } else {
            this.camera.y = Math.max(
                0,
                Math.min(
                    this.camera.y,
                    mapHeight - viewHeight
                )
            );
        }
    }
    getTowerSupportBuffs(tower) {
        const buffs = this.towers.reduce((currentBuffs, supportTower) => {
            if (supportTower === tower) return currentBuffs;
            const distance = Math.hypot(tower.x - supportTower.x, tower.y - supportTower.y);

            if (supportTower.typeKey === 'juggernaut' && supportTower.upgradePath === 'support' && distance <= supportTower.supportRange) {
                currentBuffs.reloadSpeedBonus += supportTower.reloadReduction;
                currentBuffs.debuffReduction = Math.max(currentBuffs.debuffReduction, supportTower.debuffReduction);
            }
            if (supportTower.typeKey === 'dj' && supportTower.upgradePath && distance <= this.getDJRange(supportTower)) {
                currentBuffs.rangeBonus += supportTower.rangeBoost;
                currentBuffs.damageBonus += supportTower.damageBoost;
            }
            return currentBuffs;
        }, { reloadSpeedBonus: 0, debuffReduction: 0, rangeBonus: 0, damageBonus: 0 });

        const operator = this.towers.find(supportTower => {
            if (supportTower.typeKey !== 'operator' || Math.hypot(tower.x - supportTower.x, tower.y - supportTower.y) > supportTower.range) return false;
            const target = supportTower.findTarget(this.enemies);
            return target && tower.canTargetEnemy(target);
        });
        if (operator) buffs.operatorTarget = operator.findTarget(this.enemies);
        return buffs;
    }

    getDJRange(tower) {
        return this.gameMap.pathLength * (tower.trackRangeFraction || 0);
    }

    getTowerUpgradeDiscount(tower) {
        return this.towers.reduce((discount, dj) => {
            if (dj.typeKey !== 'dj' || dj.upgradePath !== 'green') return discount;
            if (Math.hypot(tower.x - dj.x, tower.y - dj.y) > this.getDJRange(dj)) return discount;
            return discount + dj.upgradeDiscount;
        }, 0);
    }

    getTowerUpgradeCost(tower, pathKey = null) {
        let baseCost;
        if (pathKey) {
            const option = tower.getUpgradeOptions().find(item => item.key === pathKey);
            baseCost = option ? option.stats.cost : null;
        } else {
            const nextUpgrade = tower.getNextUpgradeStats();
            baseCost = nextUpgrade ? nextUpgrade.cost : null;
        }
        if (baseCost === null || baseCost === undefined) return null;
        return Math.max(0, Math.round(baseCost * (1 - Math.min(0.8, this.getTowerUpgradeDiscount(tower)))));
    }
    setupCameraControls() {
        const canvas = this.canvas;

        if (!canvas) return;

        canvas.style.touchAction = 'none';

        this.camera.dragging = false;
        this.camera.wasDragging = false;
        this.camera.dragStartX = 0;
        this.camera.dragStartY = 0;
        this.camera.dragMoved = false;

        canvas.addEventListener('mousedown', (e) => {
            // Left or middle mouse button.
            if (e.button !== 0 && e.button !== 1) return;

            this.camera.dragging = true;
            this.camera.dragMoved = false;
            this.camera.wasDragging = false;

            this.camera.lastX = e.clientX;
            this.camera.lastY = e.clientY;

            this.camera.dragStartX = e.clientX;
            this.camera.dragStartY = e.clientY;
        });

        window.addEventListener('mousemove', (e) => {
            if (!this.camera.dragging) return;

            const dx = e.clientX - this.camera.lastX;
            const dy = e.clientY - this.camera.lastY;

            this.camera.lastX = e.clientX;
            this.camera.lastY = e.clientY;

            // Don't count tiny mouse movement as dragging.
            const totalMove = Math.hypot(
                e.clientX - this.camera.dragStartX,
                e.clientY - this.camera.dragStartY
            );

            if (totalMove > 5) {
                this.camera.dragMoved = true;
                this.camera.wasDragging = true;
            }

            if (!this.camera.dragMoved) return;

            // Convert screen movement to world movement.
            this.camera.x -= dx / this.camera.zoom;
            this.camera.y -= dy / this.camera.zoom;

            this.clampCamera();
        });

        window.addEventListener('mouseup', () => {
            this.camera.dragging = false;
        });

        // ==========================================
        // MOUSE WHEEL / TRACKPAD ZOOM
        // ==========================================

        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();

            const rect = canvas.getBoundingClientRect();

            const screenX =
                (e.clientX - rect.left) *
                (canvas.width / rect.width);

            const screenY =
                (e.clientY - rect.top) *
                (canvas.height / rect.height);

            // World position underneath mouse BEFORE zoom.
            const worldX =
                this.camera.x +
                screenX / this.camera.zoom;

            const worldY =
                this.camera.y +
                screenY / this.camera.zoom;

            // Smooth-ish zoom amount.
            const zoomFactor =
                e.deltaY < 0 ? 1.1 : 0.9;

            const oldZoom = this.camera.zoom;

            this.camera.zoom *= zoomFactor;

            this.camera.zoom = Math.max(
                this.camera.minZoom,
                Math.min(
                    this.camera.maxZoom,
                    this.camera.zoom
                )
            );

            // Keep the exact point under the cursor
            // in the same place after zooming.
            this.camera.x =
                worldX -
                screenX / this.camera.zoom;

            this.camera.y =
                worldY -
                screenY / this.camera.zoom;

            this.clampCamera();

        }, { passive: false });
    }

    renderAbilityHotkeys() {
        const panel = document.getElementById('abilityHotkeysPanel');
        if (!panel) return;
        const abilities = this.getAbilityDefinitions();
        panel.innerHTML = abilities.length ? abilities.map(ability => `
            <button id="ability-${ability.id}" class="ability-hotkey" onclick="gameEngine.activateAbility('${ability.id}')">
                <kbd>${ability.key.toUpperCase()}</kbd>
                <span>${ability.name}</span>
                <small id="ability-status-${ability.id}"></small>
            </button>
        `).join('') : '<div class="ability-empty">No abilities deployed</div>';
        this.refreshAbilityHotkeys();
    }

    refreshAbilityHotkeys() {
        this.getAbilityDefinitions().forEach(ability => {
            const button = document.getElementById(`ability-${ability.id}`);
            const status = document.getElementById(`ability-status-${ability.id}`);
            if (!button || !status) return;
            const towers = this.getAbilityTowers(ability.id);
            const readyCount = towers.filter(tower => tower.abilityCooldown <= 0).length;
            button.disabled = readyCount === 0;
            status.innerText = readyCount > 0 ? `READY ${readyCount}/${towers.length}` : `${Math.ceil(Math.min(...towers.map(tower => tower.abilityCooldown)))}s`;
        });
    }

    activateAbility(abilityId) {
        const readyTowers = this.getAbilityTowers(abilityId).filter(tower => tower.abilityCooldown <= 0);
        if (readyTowers.length === 0) return;

        if (abilityId === 'call_to_arms') {
            this.commanderCallToArmsSpeed = (this.commanderCallToArmsSpeed || 0) + readyTowers.reduce((total, tower) => total + (tower.abilityPower || 0.5), 0);
            this.commanderCallToArmsTimer = Math.max(this.commanderCallToArmsTimer || 0, ...readyTowers.map(tower => tower.abilityDuration || 12));
            readyTowers.forEach(tower => tower.abilityCooldown = tower.abilityCooldownDuration || 45);
        } else if (abilityId === 'drop_the_beat') {
            readyTowers.forEach(tower => {
                tower.abilityCooldown = tower.abilityCooldownDuration || 30;
                if (tower.beatEffect === 'money') {
                    this.cash += tower.abilityMoney;
                    this.totalCashEarned += tower.abilityMoney;
                } else {
                    this.enemies.forEach(enemy => {
                        if (enemy.dead || enemy.reachedEnd) return;
                        if (tower.beatEffect === 'knockback') {
                            enemy.distanceTraversed = Math.max(0, enemy.distanceTraversed - this.gameMap.pathLength * 0.08);
                            enemy.updatePosition();
                        } else if (tower.beatEffect === 'damage') {
                            enemy.takeDamage(tower.abilityDamage, 'energy', true);
                        }
                    });
                }
            });
        } else if (abilityId === 'relocate') {
            this.beginTowerRelocation(readyTowers[0]);
        } else if (abilityId === 'kingpin_crew' || abilityId === 'kingpin_runners') {
            readyTowers.forEach(tower => {
                this.spawnKingpinTroop(tower, abilityId === 'kingpin_runners' ? 'runner' : null);
                tower.abilityCooldown = tower.abilityCooldownDuration || 15;
            });
        } else if (abilityId === 'vehicle_strike') {
            readyTowers.forEach(tower => {
                this.spawnEnforcerVehicle(tower);
                tower.abilityCooldown = tower.vehicleCooldown;
            });
        }

        this.updateUI();
    }

    spawnKingpinTroop(tower, typeOverride = null) {
        const type = typeOverride || tower.troopType;
        // Troop HP scales by type: bouncers are tanky, gunners medium, runners fragile
        const baseHp = type === 'bouncer' ? 120 : type === 'gunner' ? 80 : 50;
        const upgradeLevel = tower.upgradeLevel || 0;
        const troopHp = Math.round(baseHp * (1 + upgradeLevel * 0.3));
        this.alliedTroops.push({
            type,
            distanceTraversed: this.gameMap.pathLength,
            speed: tower.troopSpeed,
            range: tower.troopRange || 22,
            damage: tower.troopDamage,
            income: type === 'runner' ? (tower.troopIncome || 40) : tower.troopIncome,
            attackCooldown: 0,
            moneyCarry: 0,
            hp: troopHp,
            maxHp: troopHp
        });
    }

    updateKingpinTroops(dt) {
        let runnerPayout = 0;
        this.towers.forEach(tower => {
            if (tower.typeKey !== 'kingpin' || !this.waveInProgress || !tower.troopType) return;
            tower.troopSpawnTimer -= dt;
            if (tower.troopSpawnTimer <= 0) {
                this.spawnKingpinTroop(tower);
                tower.troopSpawnTimer = tower.troopSpawnInterval;
            }
        });

        this.alliedTroops = this.alliedTroops.filter(troop => {
            if (troop.attackCooldown > 0) troop.attackCooldown -= dt;
            const pos = this.gameMap.getPositionAtDistance(troop.distanceTraversed);
            const target = this.enemies
                .filter(enemy => !enemy.dead && !enemy.reachedEnd && Math.abs(enemy.distanceTraversed - troop.distanceTraversed) <= troop.range)
                .sort((a, b) => Math.abs(a.distanceTraversed - troop.distanceTraversed) - Math.abs(b.distanceTraversed - troop.distanceTraversed))[0];

            if (target && troop.type !== 'runner') {
                if (troop.attackCooldown <= 0) {
                    target.takeDamage(troop.damage, 'bullet', true);
                    troop.attackCooldown = troop.type === 'bouncer' ? 0.65 : 0.8;
                }
            } else if (troop.distanceTraversed > 0) {
                const distance = Math.min(troop.speed * dt, troop.distanceTraversed);
                troop.distanceTraversed -= distance;
                if (troop.type === 'runner') {
                    troop.moneyCarry += (distance / 100) * troop.income;
                    const payout = Math.floor(troop.moneyCarry);
                    if (payout > 0) {
                        this.cash += payout;
                        this.totalCashEarned += payout;
                        runnerPayout += payout;
                        troop.moneyCarry -= payout;
                    }
                }
            } else {
                return false;
            }

            // Enemies damage the troop if they are close enough
            const meleeRange = 25;
            this.enemies.forEach(enemy => {
                if (enemy.dead || enemy.reachedEnd) return;
                const dist = Math.abs(enemy.distanceTraversed - troop.distanceTraversed);
                if (dist <= meleeRange) {
                    // Each nearby enemy deals damage based on its base speed (faster = more dangerous)
                    const enemyDps = enemy.baseSpeed * 0.15;
                    troop.hp -= enemyDps * dt;
                }
            });

            // Remove troop if dead
            if (troop.hp <= 0) {
                return false;
            }

            troop.x = pos.x;
            troop.y = pos.y;
            return true;
        });

        if (runnerPayout > 0 && typeof document !== 'undefined') {
            const cashHud = document.getElementById('hudCash');
            if (cashHud) cashHud.innerText = `$${this.cash}`;
        }
    }

    spawnEnforcerVehicle(tower) {
        const vehicleHp = Math.round(tower.vehicleDamage * 0.8);
        this.vehicles.push({
            distanceTraversed: 0,
            speed: tower.vehicleSpeed,
            damage: tower.vehicleDamage,
            hitEnemies: new Set(),
            hp: vehicleHp,
            maxHp: vehicleHp
        });
    }

    updateVehicles(dt) {
        this.towers.forEach(tower => {
            if (tower.typeKey !== 'enforcer' || tower.upgradePath !== 'bottom' || !this.waveInProgress) return;
            if (tower.abilityCooldown <= 0) {
                this.spawnEnforcerVehicle(tower);
                tower.abilityCooldown = tower.vehicleCooldown;
            }
        });

        this.vehicles = this.vehicles.filter(vehicle => {
            vehicle.distanceTraversed += vehicle.speed * dt;
            const position = this.gameMap.getPositionAtDistance(vehicle.distanceTraversed);
            this.enemies.forEach(enemy => {
                if (enemy.dead || enemy.reachedEnd || vehicle.hitEnemies.has(enemy.id)) return;
                if (Math.abs(enemy.distanceTraversed - vehicle.distanceTraversed) <= 28) {
                    enemy.takeDamage(vehicle.damage, 'explosive', true);
                    vehicle.hitEnemies.add(enemy.id);
                    // Enemy hits back — bosses and heavy enemies deal more counter-damage
                    const counterDamage = enemy.boss ? enemy.baseSpeed * 2 : enemy.baseSpeed * 0.5;
                    vehicle.hp -= counterDamage;
                }
            });
            vehicle.x = position.x;
            vehicle.y = position.y;
            // Remove if destroyed or reached end of path
            return vehicle.hp > 0 && vehicle.distanceTraversed < this.gameMap.pathLength;
        });
    }

    useInGameConsumable(itemKey) {
        if (!playerProfile.useConsumable(itemKey)) {
            if (window.showToast) window.showToast('Out of stock');
            return;
        }

        sounds.playBuy();

        if (itemKey === 'crate') {
            this.cash += 500;
            this.totalCashEarned += 500;
            if (window.showToast) window.showToast('📦 SUPPLY DROP: +$500 Cash');
        } else if (itemKey === 'freeze') {
            this.enemies.forEach(e => e.applyStun(5.0));
            if (window.showToast) window.showToast('❄️ FREEZE BOMB: All enemies frozen for 5s');
        } else if (itemKey === 'energy_drink') {
            this.energyDrinkTimer = 15.0;
            if (window.showToast) window.showToast('🥤 ENERGY DRINK: Tower speed +50% for 15s');
        } else if (itemKey === 'nuke') {
            sounds.playExplosion();
            this.enemies.forEach(e => {
                e.takeDamage(1000, 'explosive', true);
            });
            if (window.showToast) window.showToast('☢️ TACTICAL NUKE: 1,000 Damage to all targets');
        }

        this.updateUI();
        if (window.renderInGameConsumableHotbar) window.renderInGameConsumableHotbar();
    }

    startWave() {
        if (this.waveInProgress) return;
        if (this.wave >= this.maxWaves) return;

        this.wave++;
        this.waveInProgress = true;
        this.waveCountdown = 0;
        sounds.playWaveStart();
        this.activateOperatorBuffs();

        this.waveStartBaseHp = this.baseHp;
        this.waveStartTime = performance.now();

        this.waveEnemiesToSpawn = this.generateWaveEnemies(this.wave);
        this.spawnTimer = 0;

        this.updateUI();
    }

    skipWave() {
        if (this.waveInProgress || this.wave >= this.maxWaves) return;
        this.waveCountdown = 0;
        this.startWave();
    }

    generateWaveEnemies(waveNum) {
        const queue = [];

        const difficultyWaves = WAVE_DATA[this.difficultyKey];
        const waveIndex = waveNum - 1;

        if (difficultyWaves && difficultyWaves[waveIndex]) {
            const waveDef = difficultyWaves[waveIndex];

            for (const group of waveDef.enemies) {
                const baseDelay = group.delay || 0.8;
                const baseMods = group.mods || [];

                for (let i = 0; i < group.count; i++) {
                    const mods = [...baseMods];

                    if (this.activeGameModifiers.includes('frequent_modifiers')) {
                        if (Math.random() < 0.35) {
                            const modKeys = Object.keys(ENEMY_MODIFIERS);
                            const extraMod = modKeys[Math.floor(Math.random() * modKeys.length)];
                            if (!mods.includes(extraMod)) {
                                mods.push(extraMod);
                            }
                        }
                    }

                    queue.push({
                        typeKey: group.type,
                        delay: baseDelay,
                        modifiers: mods
                    });
                }
            }
        } else {
            // Fallback: if no wave data defined, use basic spawning
            const count = 8 + waveNum * 3;
            for (let i = 0; i < count; i++) {
                queue.push({
                    typeKey: 'normal',
                    delay: 0.8,
                    modifiers: []
                });
            }
        }

        return queue;
    }

    update(dt) {
        if (this.isPaused) return;

        const effectiveDt = dt * this.gameSpeed;

        if (!this.waveInProgress && this.waveCountdown > 0) {
            this.waveCountdown = Math.max(0, this.waveCountdown - effectiveDt);
            if (this.waveCountdown === 0) this.startWave();
        }
        this.updateWaveTimerUI();

        if (this.commanderCallToArmsTimer > 0) {
            this.commanderCallToArmsTimer -= effectiveDt;
            if (this.commanderCallToArmsTimer <= 0) this.commanderCallToArmsSpeed = 0;
        }
        this.refreshAbilityHotkeys();
        if (this.energyDrinkTimer > 0) this.energyDrinkTimer -= effectiveDt;
        this.towers.forEach(tower => {
            if (tower.operatorBuffTimer > 0) {
                tower.operatorBuffTimer = Math.max(0, tower.operatorBuffTimer - effectiveDt);
                if (tower.operatorBuffTimer === 0) tower.operatorBuffSpeed = 0;
            }
        });

        if (this.waveInProgress && this.waveEnemiesToSpawn.length > 0) {
            this.spawnTimer -= effectiveDt;
            if (this.spawnTimer <= 0) {
                const nextEnemy = this.waveEnemiesToSpawn.shift();
                let speedMult = 1.0;
                if (this.activeGameModifiers.includes('fast_enemies')) speedMult = 1.25;

                const enemy = new Enemy(
                    `enemy_${Date.now()}_${Math.random()}`,
                    nextEnemy.typeKey,
                    this.gameMap,
                    this.difficulty.hpMult,
                    nextEnemy.modifiers
                );
                enemy.speed *= speedMult;
                this.enemies.push(enemy);

                if (this.waveEnemiesToSpawn.length > 0) {
                    this.spawnTimer = this.waveEnemiesToSpawn[0].delay;
                }
            }
        }

        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            enemy.update(effectiveDt);

            if (enemy.reachedEnd) {
                const damage = Math.ceil(enemy.hp);
                this.baseHp -= damage;
                this.enemies.splice(i, 1);
                if (this.baseHp <= 0) {
                    this.baseHp = 0;
                    this.triggerGameOver();
                    return;
                }
                this.updateUI();
                continue;
            }

            if (enemy.dead) {
                this.cash += enemy.reward;
                this.totalCashEarned += enemy.reward;
                this.totalEnemiesDefeated++;

                if (enemy.isBloated) {
                    for (let b = 0; b < 2; b++) {
                        const splitEnemy = new Enemy(
                            `enemy_split_${Date.now()}_${b}`,
                            'quick',
                            this.gameMap,
                            this.difficulty.hpMult * 0.6,
                            []
                        );
                        splitEnemy.distanceTraversed = Math.max(0, enemy.distanceTraversed - (b * 20));
                        splitEnemy.updatePosition();
                        this.enemies.push(splitEnemy);
                    }
                }

                this.enemies.splice(i, 1);
                this.updateUI();
            }
        }

        this.updateKingpinTroops(effectiveDt);
        this.updateVehicles(effectiveDt);

        const globalSpeedBoost = (this.commanderCallToArmsTimer > 0 ? this.commanderCallToArmsSpeed : 0) + (this.energyDrinkTimer > 0 ? 0.50 : 0);

        this.towers.forEach(t => {
            let extraBuff = globalSpeedBoost;
            if (t.typeKey !== 'commander') {
                const commanderNearby = this.towers.find(c => c.typeKey === 'commander' && Math.hypot(c.x - t.x, c.y - t.y) <= c.buffRange);
                if (commanderNearby) {
                    extraBuff += commanderNearby.buffSpeed;
                }
            }
            t.update(effectiveDt, this.enemies, this.projectiles, extraBuff, this.getTowerSupportBuffs(t));
        });

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const proj = this.projectiles[i];
            if (proj.life !== undefined) {
                proj.life -= effectiveDt;
                if (proj.life <= 0) this.projectiles.splice(i, 1);
            } else {
                proj.update(effectiveDt, this.enemies, this.particles);
                if (proj.dead) this.projectiles.splice(i, 1);
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx * effectiveDt;
            p.y += p.vy * effectiveDt;
            p.life -= effectiveDt;
            if (p.life <= 0) this.particles.splice(i, 1);
        }

        if (this.waveInProgress && this.waveEnemiesToSpawn.length === 0 && this.enemies.length === 0) {
            this.waveInProgress = false;

            // --- Wave completion cash reward ---
            const waveCashReward = 100 + this.wave * 25;
            this.cash += waveCashReward;
            this.totalCashEarned += waveCashReward;

            // --- Flawless speed bonus ---
            const noBaseDamage = (this.baseHp >= this.waveStartBaseHp);
            const waveElapsed = (performance.now() - (this.waveStartTime || 0)) / 1000;
            const flawlessTimeLimit = 30;

            let flawlessBonus = 0;
            if (noBaseDamage && waveElapsed <= flawlessTimeLimit) {
                flawlessBonus = 75 + this.wave * 15;
                this.cash += flawlessBonus;
                this.totalCashEarned += flawlessBonus;
            }

            if (flawlessBonus > 0) {
                if (window.showToast) window.showToast(`💰 Wave ${this.wave} cleared! +$${waveCashReward} + BONUS +$${flawlessBonus}!`);
            } else {
                if (window.showToast) window.showToast(`💰 Wave ${this.wave} cleared! +$${waveCashReward}`);
            }

            // --- Farm income ---
            let totalFarmIncome = 0;
            this.towers.forEach(t => {
                if (t.typeKey === 'farm') {
                    totalFarmIncome += t.income;
                }
            });

            if (totalFarmIncome > 0) {
                this.cash += totalFarmIncome;
                this.totalCashEarned += totalFarmIncome;
                if (window.showToast) window.showToast(`🌾 FARMS: +$${totalFarmIncome}`);
            }

            if (this.wave >= this.maxWaves) {
                this.triggerVictory();
                return;
            }

            this.waveCountdown = this.waveCountdownDuration;

            this.updateUI();
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // ==========================================
        // CAMERA / MAP
        // ==========================================

        this.ctx.save();

        this.ctx.scale(this.camera.zoom, this.camera.zoom);
        this.ctx.translate(-this.camera.x, -this.camera.y);

        this.gameMap.render(this.ctx);

        this.towers.forEach(t => {
            const commanderNearby = this.towers.find(
                c =>
                    c.typeKey === 'commander' &&
                    Math.hypot(c.x - t.x, c.y - t.y) <= c.buffRange
            );

            t.render(
                this.ctx,
                !!commanderNearby ||
                this.commanderCallToArmsTimer > 0 ||
                this.energyDrinkTimer > 0
            );
        });

        this.enemies.forEach(e => e.render(this.ctx));

        this.alliedTroops.forEach(troop => {
            const position = this.gameMap.getPositionAtDistance(
                troop.distanceTraversed
            );

            this.ctx.fillStyle =
                troop.type === 'runner'
                    ? '#facc15'
                    : troop.type === 'gunner'
                        ? '#38bdf8'
                        : '#22c55e';

            this.ctx.beginPath();
            this.ctx.fillStyle = '#0f172a';
            this.ctx.font = '10px sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';

            this.ctx.fillText(
                troop.type === 'runner'
                    ? '$'
                    : troop.type === 'gunner'
                        ? 'G'
                        : 'B',
                position.x,
                position.y
            );

            const barW = 18;
            const barH = 3;
            const barX = position.x - barW / 2;
            const barY = position.y - 14;
            const hpPct = Math.max(0, troop.hp / troop.maxHp);

            this.ctx.fillStyle = 'rgba(0,0,0,0.6)';
            this.ctx.fillRect(
                barX - 1,
                barY - 1,
                barW + 2,
                barH + 2
            );

            this.ctx.fillStyle =
                hpPct > 0.5
                    ? '#22c55e'
                    : hpPct > 0.25
                        ? '#eab308'
                        : '#ef4444';

            this.ctx.fillRect(
                barX,
                barY,
                barW * hpPct,
                barH
            );
        });

        this.vehicles.forEach(vehicle => {
            const position = this.gameMap.getPositionAtDistance(
                vehicle.distanceTraversed
            );

            this.ctx.fillStyle = '#0f766e';
            this.ctx.fillRect(
                position.x - 12,
                position.y - 8,
                24,
                16
            );

            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '10px sans-serif';
            this.ctx.textAlign = 'center';

            this.ctx.fillText(
                'E',
                position.x,
                position.y
            );
        });

        this.projectiles.forEach(p => {
            if (p.type === 'lightning') {
                this.ctx.beginPath();
                this.ctx.moveTo(p.startX, p.startY);
                this.ctx.lineTo(p.endX, p.endY);
                this.ctx.strokeStyle = '#06b6d4';
                this.ctx.lineWidth = 3;
                this.ctx.stroke();
            } else {
                p.render(this.ctx);
            }
        });

        this.particles.forEach(p => {
            this.ctx.save();

            this.ctx.globalAlpha =
                Math.max(0, p.life / p.maxLife);

            this.ctx.beginPath();

            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            this.ctx.restore();
        });


        if (this.selectedShopTowerKey) {
            const config = TOWERS[this.selectedShopTowerKey];

            const towerLimit =
                config.placementLimit || 8;

            const towerCount =
                this.towers.filter(
                    tower => tower.typeKey === config.id
                ).length;

            const isValid =
                towerCount < towerLimit &&
                this.gameMap.isValidPlacement(
                    this.mouseX,
                    this.mouseY,
                    config.placement,
                    this.towers
                );

            this.ctx.save();

            this.ctx.beginPath();
            this.ctx.arc(
                this.mouseX,
                this.mouseY,
                config.upgrades[0].range,
                0,
                Math.PI * 2
            );

            this.ctx.fillStyle =
                isValid
                    ? 'rgba(34, 197, 94, 0.15)'
                    : 'rgba(239, 68, 68, 0.2)';

            this.ctx.fill();

            this.ctx.strokeStyle =
                isValid
                    ? '#22c55e'
                    : '#ef4444';

            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.arc(
                this.mouseX,
                this.mouseY,
                16,
                0,
                Math.PI * 2
            );

            this.ctx.fillStyle =
                isValid
                    ? config.color
                    : 'rgba(239, 68, 68, 0.7)';

            this.ctx.fill();

            this.ctx.restore();
        }


        this.ctx.restore();


        if (this.hoveredEnemy && !this.hoveredEnemy.dead) {
            this.renderEnemyInspectorTooltip(
                this.hoveredEnemy
            );
        }
    }

    renderEnemyInspectorTooltip(enemy) {
        const ctx = this.ctx;

        const boxWidth = 220;
        const boxHeight =
            120 +
            (enemy.modifiers.length > 0 ? 20 : 0);

        // ==========================================
        // WORLD -> SCREEN
        // ==========================================

        const enemyScreenX =
            (enemy.x - this.camera.x) *
            this.camera.zoom;

        const enemyScreenY =
            (enemy.y - this.camera.y) *
            this.camera.zoom;

        // Put tooltip beside the mouse, not beside
        // the transformed world coordinate.
        let boxX = enemyScreenX + 20;
        let boxY = enemyScreenY - 40;

        // Keep tooltip inside canvas.
        if (
            boxX + boxWidth >
            this.canvas.width
        ) {
            boxX =
                enemyScreenX -
                boxWidth -
                20;
        }

        if (
            boxY + boxHeight >
            this.canvas.height
        ) {
            boxY =
                this.canvas.height -
                boxHeight -
                10;
        }

        if (boxY < 10) {
            boxY = 10;
        }

        if (boxX < 10) {
            boxX = 10;
        }

        // ==========================================
        // DRAW SCREEN-SPACE UI
        // ==========================================

        ctx.save();

        ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        ctx.fillRect(
            boxX,
            boxY,
            boxWidth,
            boxHeight
        );

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(
            boxX,
            boxY,
            boxWidth,
            boxHeight
        );

        ctx.fillStyle = '#38bdf8';
        ctx.font =
            'bold 14px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';

        ctx.fillText(
            enemy.name,
            boxX + 12,
            boxY + 22
        );

        ctx.fillStyle = '#ffffff';
        ctx.font =
            '12px system-ui, sans-serif';

        ctx.fillText(
            `HP: ${Math.round(enemy.hp)} / ${enemy.maxHp}`,
            boxX + 12,
            boxY + 42
        );

        if (enemy.maxShield > 0) {
            ctx.fillStyle = '#60a5fa';

            ctx.fillText(
                `Shield: ${Math.round(enemy.shield)} / ${enemy.maxShield}`,
                boxX + 12,
                boxY + 58
            );
        }

        ctx.fillStyle = '#94a3b8';
        ctx.font =
            '11px system-ui, sans-serif';

        const attribs = [];

        if (enemy.hidden) attribs.push('👁️ Hidden');
        if (enemy.flying) attribs.push('🦅 Flying');
        if (enemy.lead) attribs.push('🛡️ Lead');

        ctx.fillText(
            `Types: ${
                attribs.length > 0
                    ? attribs.join(', ')
                    : 'Standard'
            }`,
            boxX + 12,
            boxY + 76
        );

        ctx.fillText(
            `Speed: ${Math.round(enemy.speed)} | Reward: $${enemy.reward}`,
            boxX + 12,
            boxY + 94
        );

        if (enemy.modifiers.length > 0) {
            const modNames =
                enemy.modifiers
                    .map(m => m.badge)
                    .join(' ');

            ctx.fillStyle = '#facc15';
            ctx.font =
                'bold 11px system-ui, sans-serif';

            ctx.fillText(
                `Mods: ${modNames}`,
                boxX + 12,
                boxY + 114
            );
        }

        ctx.restore();
    }

    triggerVictory() {
        sounds.playVictory();

        const rCoins = this.difficulty.rewardCoins || 500;
        const rGems = this.difficulty.rewardGems || 10;
        const rXp = this.difficulty.rewardXp || 300;

        playerProfile.addRewards(rCoins, rGems, rXp);

        document.getElementById('victoryOverlay').classList.remove('hidden');
        document.getElementById('victoryStats').innerText = `Completed ${this.maxWaves} Waves on ${this.difficulty.name} Mode!\nTotal Cash Earned: $${this.totalCashEarned}\n\n🏆 REWARDS:\n+$${rCoins} Coins | +${rGems} Gems | +${rXp} XP`;
    }

    triggerGameOver() {
        sounds.playDefeat();

        const rCoins = Math.round((this.wave / this.maxWaves) * (this.difficulty.rewardCoins || 400));
        const rXp = Math.round((this.wave / this.maxWaves) * (this.difficulty.rewardXp || 200));
        playerProfile.addRewards(rCoins, 0, rXp);

        document.getElementById('gameOverOverlay').classList.remove('hidden');
        document.getElementById('gameOverStats').innerText = `Reached Wave ${this.wave} of ${this.maxWaves}\nEnemies Defeated: ${this.totalEnemiesDefeated}\n\nREWARDS:\n+$${rCoins} Coins | +${rXp} XP`;
    }

    updateUI() {
        document.getElementById('hudCash').innerText = `$${this.cash}`;
        document.getElementById('hudHp').innerText = `${this.baseHp} / ${this.maxBaseHp}`;
        document.getElementById('hudWave').innerText = `${this.wave} / ${this.maxWaves}`;
        document.getElementById('hudDifficulty').innerText = this.difficulty.name;

        // Update Tower Limit HUD text (e.g. 1/40)
        const hudTower = document.getElementById('hudTowerCount');
        if (hudTower) {
            hudTower.innerText = `${this.towers.length}/${this.maxTowersLimit}`;
        }

        this.updateHotbarUI();
        this.updateTowerInspectUI();
        this.updateWaveTimerUI();
        this.renderAbilityHotkeys();
    }

    updateWaveTimerUI() {
        const button = document.getElementById('btnStartWave');
        const timer = document.getElementById('hudWaveTimer');
        const seconds = Math.ceil(this.waveCountdown);
        if (timer) timer.innerText = this.waveInProgress ? 'IN PROGRESS' : this.waveCountdown > 0 ? `NEXT WAVE IN ${seconds}s` : '';
        if (!button) return;

        if (this.waveInProgress) {
            button.innerText = `WAVE ${this.wave} IN PROGRESS`;
            button.className = 'btn-start';
            button.disabled = true;
        } else if (this.waveCountdown > 0) {
            button.innerText = `⏭ SKIP TIMER (${seconds}s)`;
            button.className = 'btn-skip';
            button.disabled = false;
        } else if (this.wave >= this.maxWaves) {
            button.innerText = 'WAVES COMPLETE';
            button.className = 'btn-start';
            button.disabled = true;
        } else {
            button.innerText = '▶️ START WAVE';
            button.className = 'btn-start';
            button.disabled = false;
        }
    }

    updateHotbarUI() {
        if (window.renderInGameHotbar) window.renderInGameHotbar();
    }

    updateTowerInspectUI() {
        const panel = document.getElementById('towerInspectPanel');
        if (!panel) return;

        if (!this.selectedTower) {
            panel.classList.add('hidden');
            return;
        }

        panel.classList.remove('hidden');
        const t = this.selectedTower;
        const config = t.config;
        const upgradeCost = this.getTowerUpgradeCost(t);
        const romanLevel = assets.toRoman(t.level);

        document.getElementById('inspectTowerName').innerText = `${t.name} (${romanLevel})`;
        document.getElementById('inspectTowerIcon').innerText = config.icon;
        document.getElementById('inspectTowerPlacement').innerText = t.placement.toUpperCase();
        document.getElementById('inspectTargetModeBtn').innerText = `Target: ${t.targetMode}`;
        document.getElementById('inspectKills').innerText = `Kills: ${t.kills} | Total Damage: ${Math.round(t.totalDamageDealt)}`;

        let statText = `Damage: ${t.damage} | Speed: ${t.attackSpeed}s\nRange: ${t.range}`;
        if (t.seeHidden) statText += `\n👁️ Hidden Detection`;
        if (t.targetFlying) statText += `\n🦅 Flying Detection`;
        if (t.canHarmLead) statText += `\n🛡️ Lead Detection`;
        if (t.income) statText += `\nWave Income: +$${t.income}`;
        if (t.upgradePath) statText += `\nPath: ${config.upgradePaths[t.upgradePath].name}`;

        document.getElementById('inspectTowerStats').innerText = statText;

        const upgBtn = document.getElementById('btnUpgradeTower');
        const pathOptions = t.getUpgradeOptions();
        const pathContainer = document.getElementById('inspectUpgradePaths');
        if (pathContainer) {
            pathContainer.innerHTML = pathOptions.map(option => {
                const pathCost = this.getTowerUpgradeCost(t, option.key);
                return `
                    <button class="btn-upgrade-path" onclick="upgradeSelectedTower('${option.key}')" ${this.cash < pathCost ? 'disabled' : ''}>
                        ${option.name} ($${pathCost})
                    </button>
                `;
            }).join('');
        }
        if (pathOptions.length > 0) {
            upgBtn.innerText = 'CHOOSE UPGRADE PATH';
            upgBtn.disabled = true;
        } else if (upgradeCost !== null) {
            upgBtn.innerText = `UPGRADE [E] ($${upgradeCost})`;
            upgBtn.disabled = this.cash < upgradeCost;
        } else {
            upgBtn.innerText = 'MAX LEVEL';
            upgBtn.disabled = true;
        }

        document.getElementById('btnSellTower').innerText = `SELL [X] ($${t.getSellValue()})`;

        const relocateBtn = document.getElementById('btnRelocateTower');
        if (relocateBtn) {
            const canRelocate = t.typeKey === 'enforcer' && t.upgradePath === 'top';
            relocateBtn.style.display = canRelocate ? 'block' : 'none';
            relocateBtn.disabled = t.abilityCooldown > 0;
            relocateBtn.innerText = this.relocationSource === t ? 'SELECT A TOWER...' : `RELOCATE TOWER${t.abilityCooldown > 0 ? ` (${Math.ceil(t.abilityCooldown)}s)` : ''}`;
        }
    }
}
