class AssetManager {
    constructor() {
        this.images = {};
        this.loadedCount = 0;
        this.totalCount = 0;
        this.onComplete = null;
    }

    preloadAssets(onComplete) {
        this.onComplete = onComplete;

        const assetList = [
            // Upgrade Boxes
            { id: 'upgradebox', src: 'assets/ui/upgradebox/upgradebox.svg' },
            { id: 'upgradeboxgold', src: 'assets/ui/upgradebox/upgradeboxgold.svg' },
            { id: 'upgradeboxevo', src: 'assets/ui/upgradebox/upgradeboxevo.svg' },

            // Tower Cards
            { id: 'card_scout', src: 'assets/ui/towercard/scoutbox.svg' },
            { id: 'card_sniper', src: 'assets/ui/towercard/sniperbox.svg' },

            // Map SVG
            { id: 'map_simplecity', src: 'assets/maps/debug/simplecity.svg' },

            // Variables / HUD Icons
            { id: 'icon_money', src: 'assets/ui/currencies/money.svg' },
            { id: 'icon_wave', src: 'assets/ui/currencies/wave.svg' },
            { id: 'icon_tower', src: 'assets/ui/currencies/tower.svg' },

            // Menu Buttons
            { id: 'menu_easy', src: 'assets/ui/menu buttons/normal/easy.svg' },
            { id: 'menu_casual', src: 'assets/ui/menu buttons/normal/casual.svg' },
            { id: 'menu_intermediate', src: 'assets/ui/menu buttons/normal/intermediate.svg' },
            { id: 'menu_molten', src: 'assets/ui/menu buttons/normal/molten.svg' },
            { id: 'menu_fallen', src: 'assets/ui/menu buttons/normal/fallen.svg' },
            { id: 'menu_frost', src: 'assets/ui/menu buttons/normal/frost.svg' },

            // Scout Sprites - Default Skin
            { id: 'scout_default_0', src: 'assets/towers/scout/scout0.svg' },
            { id: 'scout_default_1', src: 'assets/towers/scout/scout1.svg' },
            { id: 'scout_default_2', src: 'assets/towers/scout/scout2.svg' },
            { id: 'scout_default_3', src: 'assets/towers/scout/scout3.svg' },
            { id: 'scout_default_4', src: 'assets/towers/scout/scout4.svg' },

            // Scout Sprites - Red Skin
            { id: 'scout_red_0', src: 'assets/towers/scout/scout0_red.svg' },
            { id: 'scout_red_1', src: 'assets/towers/scout/scout1_red.svg' },
            { id: 'scout_red_2', src: 'assets/towers/scout/scout2_red.svg' },
            { id: 'scout_red_3', src: 'assets/towers/scout/scout3_red.svg' },
            { id: 'scout_red_4', src: 'assets/towers/scout/scout4_red.svg' },

            // Scout Sprites - Golden Skin
            { id: 'scout_gold_0', src: 'assets/towers/scout/scout0_g.svg' },
            { id: 'scout_gold_1', src: 'assets/towers/scout/scout1_g.svg' },
            { id: 'scout_gold_2', src: 'assets/towers/scout/scout2_g.svg' }
        ];

        this.totalCount = assetList.length;

        assetList.forEach(item => {
            const img = new Image();
            img.onload = () => {
                this.loadedCount++;
                if (this.loadedCount === this.totalCount && this.onComplete) {
                    this.onComplete();
                }
            };
            img.onerror = () => {
                this.loadedCount++;
                if (this.loadedCount === this.totalCount && this.onComplete) {
                    this.onComplete();
                }
            };
            img.src = item.src;
            this.images[item.id] = img;
        });
    }

    getImage(id) {
        return this.images[id] || null;
    }

    toRoman(level) {
        const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
        return romanNumerals[level] || (level + 1).toString();
    }
}

const assets = new AssetManager();
