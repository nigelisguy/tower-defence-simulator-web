class PlayerProfile {
  resetProfile() {
      this.coins = 2500;
      this.gems = 50;
      this.level = 1;
      this.xp = 0;

      this.unlockedTowers = ['scout', 'sniper'];
      this.equippedTowers = ['scout', 'sniper'];

      this.selectedSkins = {
          scout: 'default',
          sniper: 'default'
      };

      this.unlockedSkins = [
          'scout:default',
          'sniper:default'
      ];

      this.skinCrates = {
          basic: 0,
          golden: 0
      };

      this.consumables = {
          crate: 3,
          freeze: 2,
          energy_drink: 2,
          nuke: 1
      };

      this.redeemedCodes = [];

      this.saveProfile();

      if (window.showToast) {
          window.showToast('Profile reset!');
      }

      return true;
    }
    constructor() {
        this.loadProfile();
    }

    loadProfile() {
        const saved = localStorage.getItem('tds_player_profile');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.coins = data.coins !== undefined ? data.coins : 2500;
                this.gems = data.gems !== undefined ? data.gems : 50;
                this.level = data.level || 1;
                this.xp = data.xp || 0;
                this.unlockedTowers = data.unlockedTowers || ['scout', 'sniper'];
                this.equippedTowers = data.equippedTowers || ['scout', 'sniper'];
                this.selectedSkins = data.selectedSkins || { scout: 'default', sniper: 'default' };
                this.unlockedSkins = Array.isArray(data.unlockedSkins) ? data.unlockedSkins : [];
                this.skinCrates = { basic: 0, golden: 0, ...(data.skinCrates || {}) };
                this.consumables = data.consumables || { crate: 2, freeze: 1, energy_drink: 1, nuke: 1 };
                this.redeemedCodes = data.redeemedCodes || [];
                this.migrateUnlockedSkins();
                return;
            } catch (e) {
                console.error('Error loading profile:', e);
            }
        }

        this.coins = 2500;
        this.gems = 50;
        this.level = 1;
        this.xp = 0;
        this.unlockedTowers = ['scout', 'sniper'];
        this.equippedTowers = ['scout', 'sniper'];
        this.selectedSkins = { scout: 'default', sniper: 'default' };
        this.unlockedSkins = ['scout:default', 'sniper:default'];
        this.skinCrates = { basic: 0, golden: 0 };
        this.consumables = { crate: 3, freeze: 2, energy_drink: 2, nuke: 1 };
        this.redeemedCodes = [];
        this.saveProfile();
    }

    saveProfile() {
        const data = {
            coins: this.coins,
            gems: this.gems,
            level: this.level,
            xp: this.xp,
            unlockedTowers: this.unlockedTowers,
            equippedTowers: this.equippedTowers,
            selectedSkins: this.selectedSkins,
            unlockedSkins: this.unlockedSkins,
            skinCrates: this.skinCrates,
            consumables: this.consumables,
            redeemedCodes: this.redeemedCodes
        };
        localStorage.setItem('tds_player_profile', JSON.stringify(data));
    }

    addRewards(coins, gems = 0, xp = 0) {
        this.coins += coins;
        this.gems += gems;
        this.xp += xp;

        const xpNeeded = this.level * 500;
        if (this.xp >= xpNeeded) {
            this.xp -= xpNeeded;
            this.level++;
            if (window.showToast) window.showToast(`🎉 LEVEL UP! You reached Level ${this.level}!`);
        }

        this.saveProfile();
    }

    getTowerSkin(towerKey) {
        return this.selectedSkins[towerKey] || 'default';
    }

    migrateUnlockedSkins() {
        this.unlockedTowers.forEach(towerKey => {
            const tower = TOWERS[towerKey];
            if (!tower) return;

            const validSkins = tower.skins || [];
            const skinIds = ['default', this.selectedSkins[towerKey]].filter(Boolean);
            skinIds.forEach(skinId => {
                if (validSkins.some(skin => skin.id === skinId) && !this.hasSkin(towerKey, skinId)) {
                    this.unlockedSkins.push(`${towerKey}:${skinId}`);
                }
            });
        });
    }

    hasSkin(towerKey, skinId) {
        return this.unlockedSkins.includes(`${towerKey}:${skinId}`);
    }

    getAvailableCrateSkins(crateKey) {
        return this.unlockedTowers.flatMap(towerKey => {
            const tower = TOWERS[towerKey];
            if (!tower) return [];
            return (tower.skins || [])
                .filter(skin => skin.crateType === crateKey && !this.hasSkin(towerKey, skin.id))
                .map(skin => ({ towerKey, tower, skin }));
        });
    }

    buySkinCrate(crateKey) {
        const crate = SKIN_CRATES[crateKey];
        const availableCount = this.getAvailableCrateSkins(crateKey).length;
        if (!crate || availableCount <= (this.skinCrates[crateKey] || 0)) {
            if (window.showToast) window.showToast('No new skins available in this crate');
            return false;
        }

        if (crate.currency === 'gems') {
            if (this.gems < crate.price) {
                if (window.showToast) window.showToast('Not enough Gems');
                return false;
            }
            this.gems -= crate.price;
        } else {
            if (this.coins < crate.price) {
                if (window.showToast) window.showToast('Not enough Coins');
                return false;
            }
            this.coins -= crate.price;
        }

        this.skinCrates[crateKey] = (this.skinCrates[crateKey] || 0) + 1;
        this.saveProfile();
        if (window.showToast) window.showToast(`Purchased ${crate.name}`);
        return true;
    }

    openSkinCrate(crateKey) {
        if ((this.skinCrates[crateKey] || 0) <= 0) return false;

        const availableSkins = this.getAvailableCrateSkins(crateKey);
        if (availableSkins.length === 0) {
            if (window.showToast) window.showToast('No new skins available in this crate');
            return false;
        }

        const reward = availableSkins[Math.floor(Math.random() * availableSkins.length)];
        this.skinCrates[crateKey]--;
        this.unlockedSkins.push(`${reward.towerKey}:${reward.skin.id}`);
        this.saveProfile();
        if (window.showToast) window.showToast(`Unlocked ${reward.skin.name} for ${reward.tower.name}!`);
        return true;
    }

    setTowerSkin(towerKey, skinId) {
        if (!this.unlockedTowers.includes(towerKey) || !this.hasSkin(towerKey, skinId)) return false;
        this.selectedSkins[towerKey] = skinId;
        this.saveProfile();
        if (window.showToast) window.showToast(`Equipped ${skinId} skin!`);
        return true;
    }

    equipTower(towerKey) {
        if (!this.unlockedTowers.includes(towerKey)) return false;

        const idx = this.equippedTowers.indexOf(towerKey);
        if (idx !== -1) {
            if (this.equippedTowers.length <= 1) {
                if (window.showToast) window.showToast('Must have at least 1 tower equipped');
                return false;
            }
            this.equippedTowers.splice(idx, 1);
        } else {
            if (this.equippedTowers.length >= 5) {
                if (window.showToast) window.showToast('Loadout full (Max 5 towers)');
                return false;
            }
            this.equippedTowers.push(towerKey);
        }

        this.saveProfile();
        return true;
    }

    buyTower(towerKey) {
        const config = TOWERS[towerKey];
        if (!config) return false;
        if (this.unlockedTowers.includes(towerKey)) return false;

        const currency = config.shopCurrency || 'coins';
        const price = config.shopPrice || 0;

        if (currency === 'gems') {
            if (this.gems < price) {
                if (window.showToast) window.showToast('Not enough Gems');
                return false;
            }
            this.gems -= price;
        } else {
            if (this.coins < price) {
                if (window.showToast) window.showToast('Not enough Coins');
                return false;
            }
            this.coins -= price;
        }

        this.unlockedTowers.push(towerKey);
        this.unlockedSkins.push(`${towerKey}:default`);
        if (this.equippedTowers.length < 5) {
            this.equippedTowers.push(towerKey);
        }

        this.saveProfile();
        if (window.showToast) window.showToast(`Unlocked ${config.name}!`);
        return true;
    }

    buyConsumable(itemKey) {
        const item = CONSUMABLES[itemKey];
        if (!item) return false;

        if (item.currency === 'gems') {
            if (this.gems < item.price) {
                if (window.showToast) window.showToast('Not enough Gems');
                return false;
            }
            this.gems -= item.price;
        } else {
            if (this.coins < item.price) {
                if (window.showToast) window.showToast('Not enough Coins');
                return false;
            }
            this.coins -= item.price;
        }

        this.consumables[itemKey] = (this.consumables[itemKey] || 0) + 1;
        this.saveProfile();
        if (window.showToast) window.showToast(`Purchased ${item.name}`);
        return true;
    }

    useConsumable(itemKey) {
        if ((this.consumables[itemKey] || 0) > 0) {
            this.consumables[itemKey]--;
            this.saveProfile();
            return true;
        }
        return false;
    }

    redeemCode(codeStr) {
        const code = codeStr.toUpperCase().trim();
        if (this.redeemedCodes.includes(code)) {
            if (window.showToast) window.showToast('Code already redeemed');
            return;
        }

        const reward = PROMO_CODES[code];
        if (!reward) {
            if (window.showToast) window.showToast('Invalid promo code');
            return;
        }

        this.redeemedCodes.push(code);
        this.addRewards(reward.coins, reward.gems, 0);
        if (window.showToast) window.showToast(reward.msg);
    }
}

const playerProfile = new PlayerProfile();
