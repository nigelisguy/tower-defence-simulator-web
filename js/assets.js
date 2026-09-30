class AssetManager {
    constructor() {
        this.images = {};
        this.sources = {};
        this.assetStatus = {};

        this.loadedCount = 0;
        this.totalCount = 0;
        this.onComplete = null;
    }

    preloadAssets(onComplete) {
        this.onComplete = onComplete;
        this.loadedCount = 0;
        this.totalCount = 0;

        const assetList = [];

        // =========================================================
        // UI
        // =========================================================

        this.add(assetList,
            'upgradebox',
            'assets/ui/upgradebox/upgradebox.svg'
        );

        this.add(assetList,
            'upgradeboxgold',
            'assets/ui/upgradebox/upgradeboxgold.svg'
        );

        this.add(assetList,
            'upgradeboxevo',
            'assets/ui/upgradebox/upgradeboxevo.svg'
        );

        // =========================================================
        // MAP
        // =========================================================

        this.add(assetList,
            'map_simplecity',
            'assets/maps/debug/simplecity.svg'
        );

        // =========================================================
        // HUD
        // =========================================================

        this.add(assetList,
            'icon_money',
            'assets/ui/currencies/money.svg'
        );

        this.add(assetList,
            'icon_wave',
            'assets/ui/currencies/wave.svg'
        );

        this.add(assetList,
            'icon_tower',
            'assets/ui/currencies/tower.svg'
        );

        // =========================================================
        // MENU
        // =========================================================

        this.add(assetList,
            'menu_easy',
            'assets/ui/menu buttons/normal/easy.svg'
        );

        this.add(assetList,
            'menu_casual',
            'assets/ui/menu buttons/normal/casual.svg'
        );

        this.add(assetList,
            'menu_intermediate',
            'assets/ui/menu buttons/normal/intermediate.svg'
        );

        this.add(assetList,
            'menu_molten',
            'assets/ui/menu buttons/normal/molten.svg'
        );

        this.add(assetList,
            'menu_fallen',
            'assets/ui/menu buttons/normal/fallen.svg'
        );

        this.add(assetList,
            'menu_frost',
            'assets/ui/menu buttons/normal/frost.svg'
        );

        // =========================================================
        // TOWER CARDS
        // =========================================================

        this.add(assetList,
            'card_scout',
            'assets/ui/towercard/scoutbox.svg'
        );

        this.add(assetList,
            'card_sniper',
            'assets/ui/towercard/sniperbox.svg'
        );

        // =========================================================
        // SCOUT
        // =========================================================

        this.addScoutAssets(assetList);

        // =========================================================
        // SNIPER
        // =========================================================

        this.addSniperAssets(assetList);

        // =========================================================
        // MINIGUNNER
        // =========================================================

        this.addMinigunnerAssets(assetList);

        // =========================================================
        // OPERATOR
        // =========================================================

        this.addOperatorAssets(assetList);

        // =========================================================
        // JUGGERNAUT
        // =========================================================

        this.addJuggernautAssets(assetList);

        // =========================================================
        // REMOVE DUPLICATES
        // =========================================================

        const uniqueAssets = [];
        const seen = new Set();

        for (const item of assetList) {
            if (seen.has(item.src)) {
                continue;
            }

            seen.add(item.src);
            uniqueAssets.push(item);
        }

        this.totalCount = uniqueAssets.length;

        console.log(
            `[AssetManager] Testing ${this.totalCount} assets...`
        );

        if (this.totalCount === 0) {
            if (this.onComplete) {
                const callback = this.onComplete;
                this.onComplete = null;
                callback();
            }

            return;
        }

        // =========================================================
        // LOAD
        // =========================================================

        uniqueAssets.forEach(item => {
            const img = new Image();

            this.sources[item.id] = item.src;

            this.assetStatus[item.id] = {
                id: item.id,
                src: item.src,
                loaded: false,
                failed: false
            };

            img.onload = () => {
                this.loadedCount++;

                this.assetStatus[item.id].loaded = true;

                console.log(
                    `[AssetManager] ✓ ${item.src}`
                );

                this.checkComplete();
            };

            img.onerror = () => {
                this.loadedCount++;

                this.assetStatus[item.id].failed = true;

                console.error(
                    `[AssetManager] ✗ ${item.src}`
                );

                this.checkComplete();
            };

            img.src = item.src;

            this.images[item.id] = img;

            // Also allow:
            // assets.getImage('assets/towers/scout/regular/scout0.svg')
            this.images[item.src] = img;
        });
    }

    // =============================================================
    // ADD ASSET
    // =============================================================

    add(list, id, src) {
        list.push({
            id,
            src
        });
    }

    // =============================================================
    // SCOUT
    // =============================================================

    addScoutAssets(list) {

        // Regular
        for (let i = 0; i <= 4; i++) {
            this.add(
                list,
                `scout_regular_${i}`,
                `assets/towers/scout/regular/scout${i}.svg`
            );
        }

        // Red
        for (let i = 0; i <= 4; i++) {
            this.add(
                list,
                `scout_red_${i}`,
                `assets/towers/scout/red/scout${i}_red.svg`
            );
        }

        // Golden
        this.add(
            list,
            'scout_golden_0',
            'assets/towers/scout/golden/scout0_g.svg'
        );

        this.add(
            list,
            'scout_golden_1',
            'assets/towers/scout/golden/scout1_g.svg'
        );

        this.add(
            list,
            'scout_golden_2',
            'assets/towers/scout/golden/scout2_g.svg'
        );

        this.add(
            list,
            'scout_golden_2b',
            'assets/towers/scout/golden/scout2_g2.svg'
        );

        this.add(
            list,
            'scout_golden_2c',
            'assets/towers/scout/golden/scout2_g3.svg'
        );

        // Plant
        for (let i = 0; i <= 4; i++) {
            this.add(
                list,
                `scout_plant_${i}`,
                `assets/towers/scout/plant/scout${i}_plant.svg`
            );
        }
    }

    // =============================================================
    // SNIPER
    // =============================================================

    addSniperAssets(list) {

        // Regular
        for (let i = 0; i <= 4; i++) {
            this.add(
                list,
                `sniper_regular_${i}`,
                `assets/towers/sniper/sniper${i}.svg`
            );
        }

        // Red
        for (let i = 0; i <= 4; i++) {
            this.add(
                list,
                `sniper_red_${i}`,
                `assets/towers/sniper/sniper${i}_red.svg`
            );
        }

        // Farmer
        for (let i = 0; i <= 4; i++) {
            this.add(
                list,
                `sniper_farmer_${i}`,
                `assets/towers/sniper/sniper${i}_farmer.svg`
            );
        }
    }

    // =============================================================
    // MINIGUNNER
    // =============================================================

    addMinigunnerAssets(list) {

        for (let i = 0; i <= 4; i++) {
            this.add(
                list,
                `minigunner_regular_${i}`,
                `assets/towers/minigunner/regular/minigunner${i}.svg`
            );
        }
    }

    // =============================================================
    // OPERATOR
    // =============================================================

    addOperatorAssets(list) {

        /*
         * IMPORTANT:
         *
         * The actual files are spelled:
         *
         * operater0.svg
         * operater1.svg
         * operater2.svg
         * operater3.svg
         *
         * NOT:
         *
         * operator0.svg
         */

        for (let i = 0; i <= 3; i++) {
            this.add(
                list,
                `operator_regular_${i}`,
                `assets/towers/operator/regular/operater${i}.svg`
            );
        }
    }

    // =============================================================
    // JUGGERNAUT
    // =============================================================

    addJuggernautAssets(list) {

        /*
         * Juggernaut has a different structure:
         *
         * assets/towers/regular/
         *
         * and uses:
         *
         * jugger_0.svg
         * jugger_1.svg
         * jugger_2.svg
         * jugger_3.svg
         * jugger_4a.svg
         * jugger_4b.svg
         * ...
         */

        for (let i = 0; i <= 3; i++) {
            this.add(
                list,
                `juggernaut_regular_${i}`,
                `assets/towers/regular/jugger_${i}.svg`
            );
        }

        for (let i = 4; i <= 7; i++) {

            this.add(
                list,
                `juggernaut_regular_${i}a`,
                `assets/towers/regular/jugger_${i}a.svg`
            );

            this.add(
                list,
                `juggernaut_regular_${i}b`,
                `assets/towers/regular/jugger_${i}b.svg`
            );
        }
    }

    // =============================================================
    // GET IMAGE
    // =============================================================

    getImage(idOrPath) {
        if (!idOrPath) {
            return null;
        }

        return this.images[idOrPath] || null;
    }

    // =============================================================
    // IS LOADED
    // =============================================================

    isLoaded(idOrPath) {
        const img = this.getImage(idOrPath);

        return !!(
            img &&
            img.complete &&
            img.naturalWidth > 0
        );
    }

    // =============================================================
    // GET SOURCE
    // =============================================================

    getSource(id) {
        return this.sources[id] || null;
    }

    // =============================================================
    // CHECK COMPLETE
    // =============================================================

    checkComplete() {
        if (
            this.loadedCount >= this.totalCount &&
            this.onComplete
        ) {
            const failed =
                Object.values(this.assetStatus)
                    .filter(asset => asset.failed);

            const loaded =
                Object.values(this.assetStatus)
                    .filter(asset => asset.loaded);

            console.log(
                `[AssetManager] Finished: ` +
                `${loaded.length}/${this.totalCount} loaded`
            );

            if (failed.length > 0) {
                console.warn(
                    `[AssetManager] ${failed.length} assets failed.`
                );
            } else {
                console.log(
                    '[AssetManager] ✓ ALL ASSETS LOADED'
                );
            }

            const callback = this.onComplete;

            this.onComplete = null;

            callback();
        }
    }

    // =============================================================
    // ASSET REPORT
    // =============================================================

    printReport() {
        const assets =
            Object.values(this.assetStatus);

        const loaded =
            assets.filter(asset => asset.loaded);

        const failed =
            assets.filter(asset => asset.failed);

        console.group(
            '[AssetManager] Asset Report'
        );

        console.log(
            `Total: ${assets.length}`
        );

        console.log(
            `Loaded: ${loaded.length}`
        );

        console.log(
            `Failed: ${failed.length}`
        );

        if (failed.length > 0) {
            console.group(
                'Failed Assets'
            );

            failed.forEach(asset => {
                console.error(
                    asset.src
                );
            });

            console.groupEnd();
        }

        console.groupEnd();
    }

    // =============================================================
    // FAILED ASSETS
    // =============================================================

    getFailedAssets() {
        return Object.values(
            this.assetStatus
        ).filter(asset => asset.failed);
    }

    // =============================================================
    // ROMAN NUMERALS
    // =============================================================

    toRoman(level) {
        const romanNumerals = [
            'I',
            'II',
            'III',
            'IV',
            'V',
            'VI',
            'VII'
        ];

        const numericLevel = Number(level);

        if (
            Number.isInteger(numericLevel) &&
            numericLevel >= 0 &&
            numericLevel < romanNumerals.length
        ) {
            return romanNumerals[numericLevel];
        }

        return String(numericLevel + 1);
    }
}


// =============================================================
// GLOBAL
// =============================================================

const assets = new AssetManager();
