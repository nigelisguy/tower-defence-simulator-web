// TDS Web - Game Configuration & Definitions (With Skins & Stat Comparison)

const TARGET_MODES = {
    FIRST: 'First',
    LAST: 'Last',
    NEAREST: 'Nearest',
    FURTHEST: 'Furthest',
    MOST_HP: 'Most HP',
    LEAST_HP: 'Least HP',
    RANDOM: 'Random'
};

const TARGET_MODE_LIST = Object.values(TARGET_MODES);

// Enemy Modifiers
const ENEMY_MODIFIERS = {
    AGRO: {
        id: 'AGRO',
        name: 'Agro',
        desc: '+35% Movement Speed',
        color: '#ff3333',
        badge: '⚡ AGRO',
        apply: (enemy) => {
            enemy.speed *= 1.35;
            enemy.isAgro = true;
        }
    },
    BLOATED: {
        id: 'BLOATED',
        name: 'Bloated',
        desc: '+60% Health, splits into mini-enemies on death',
        color: '#8b5cf6',
        badge: 'BLOATED',
        apply: (enemy) => {
            enemy.maxHp = Math.round(enemy.maxHp * 1.6);
            enemy.hp = enemy.maxHp;
            enemy.size *= 1.3;
            enemy.isBloated = true;
        }
    },
    SHIELDED: {
        id: 'SHIELDED',
        name: 'Shielded',
        desc: 'Spawns with an energy shield layer',
        color: '#3b82f6',
        badge: 'SHIELD',
        apply: (enemy) => {
            enemy.shield = Math.round(enemy.maxHp * 0.5);
            enemy.maxShield = enemy.shield;
            enemy.isShielded = true;
        }
    },
    REGEN: {
        id: 'REGEN',
        name: 'Regen',
        desc: 'Regenerates 4% max health per second',
        color: '#22c55e',
        badge: 'REGEN',
        apply: (enemy) => {
            enemy.isRegen = true;
        }
    },
    SWIFT: {
        id: 'SWIFT',
        name: 'Unstoppable',
        desc: 'Immune to slow & stun debuffs',
        color: '#eab308',
        badge: 'SWIFT',
        apply: (enemy) => {
            enemy.isSwift = true;
        }
    }
};

// Map / Game Modifiers
const GAME_MODIFIERS = [
    { id: 'fast_enemies', name: 'Speedy', desc: 'All enemies move 25% faster', icon: '🏃' },
    { id: 'extra_hp', name: 'Fortifed', desc: 'All enemies have +30% HP', icon: '🛡️' },
    { id: 'expensive_towers', name: 'Inflation', desc: 'Tower costs increased by 20%', icon: '💸' },
    { id: 'low_cash', name: 'Tight Budget', desc: 'Start with 50% less cash', icon: '💰' },
    { id: 'frequent_modifiers', name: 'Random', desc: 'Enemies have a high chance of random modifiers', icon: '🎲' }
];

// Difficulty Definitions
const DIFFICULTIES = {
    easy: {
        id: 'easy',
        name: 'Easy',
        color: '#22c55e',
        waves: 20,
        baseHp: 100,
        startCash: 700,
        hpMult: 0.8,
        rewardCoins: 250,
        rewardXp: 150,
        desc: 'Recommended for beginners.'
    },
    casual: {
        id: 'casual',
        name: 'Casual',
        color: '#06b6d4',
        waves: 25,
        baseHp: 125,
        startCash: 850,
        hpMult: 0.9,
        rewardCoins: 400,
        rewardXp: 250,
        desc: 'Casual'
    },
    intermediate: {
        id: 'intermediate',
        name: 'Intermediate',
        color: '#eab308',
        waves: 30,
        baseHp: 100,
        startCash: 600,
        hpMult: 1.0,
        rewardCoins: 600,
        rewardXp: 400,
        desc: 'intermediate '
    },
    molten: {
        id: 'molten',
        name: 'Molten',
        color: '#f97316',
        waves: 40,
        baseHp: 100,
        startCash: 500,
        hpMult: 1.35,
        rewardCoins: 1000,
        rewardXp: 750,
        desc: 'molten'
    },
    fallen: {
        id: 'fallen',
        name: 'Fallen',
        color: '#a855f7',
        waves: 40,
        baseHp: 100,
        startCash: 500,
        hpMult: 1.65,
        rewardCoins: 1500,
        rewardGems: 1,
        rewardXp: 1200,
        desc: 'fallen'
    },
    frost: {
        id: 'frost',
        name: 'Frost',
        color: '#38bdf8',
        waves: 40,
        baseHp: 100,
        startCash: 500,
        hpMult: 1.5,
        rewardCoins: 1300,
        rewardGems: 5,
        rewardXp: 1000,
        desc: 'frosty experience'
    }
};

// Tower Definitions (With Skins & Detailed Stat Scaling)
const TOWERS = {
    scout: {
        id: 'scout',
        name: 'Scout',
        cost: 200,
        shopPrice: 0,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Starter / Single Target',
        description: 'The starter tower of the game. Spammable and cheap!',
        color: '#3b82f6',
        icon: '🔫',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#3b82f6' },
            { id: 'red', name: 'Red Operative', badgeColor: '#ef4444', crateType: 'basic' },
            { id: 'plant', name: 'Plantgunner', badgeColor: '#ef4444', crateType: 'deluxe' },
            { id: 'gold', name: 'Golden Scout', badgeColor: '#facc15', crateType: 'golden' }
        ],
        upgrades: [
            { name: 'Quick Draw', cost: 100, damage: 2, range: 110, attackSpeed: 0.5, seeHidden: false, targetFlying: false, HarmLead: false },
            { name: 'Enhanced Sight', cost: 175, damage: 3, range: 130, attackSpeed: 0.45, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Dual Pistols', cost: 350, damage: 5, range: 140, attackSpeed: 0.35, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Scout Master', cost: 850, damage: 9, range: 160, attackSpeed: 0.22, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Glock Overclock', cost: 1800, damage: 18, range: 180, attackSpeed: 0.15, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    operator: {
        id: 'operator',
        name: 'Operator',
        cost: 300,
        shopPrice: 500,
        shopCurrency: 'coins',
        placement: 'ground',
        placementLimit: 5,
        role: 'Starter / Spotter Support',
        description: 'One of the reworked towers. Deals damage while allowing towers in range to also attack, regardless of their own range.',
        color: '#14b8a6',
        icon: '📡',
        skins: [{ id: 'default', name: 'Default', badgeColor: '#14b8a6' }],
        upgrades: [
            { name: 'Field Radio', cost: 150, damage: 12, range: 135, attackSpeed: 0.8, seeHidden: false, targetFlying: false, auraRange: 135, operatorRangeStack: 35, operatorBuff: 0.20, operatorBuffDuration: 8 },
            { name: 'Signal Booster', cost: 300, damage: 18, range: 155, attackSpeed: 0.7, seeHidden: true, targetFlying: false, auraRange: 155, operatorRangeStack: 45, operatorBuff: 0.25, operatorBuffDuration: 10 },
            { name: 'Command Network', cost: 600, damage: 24, range: 180, attackSpeed: 0.6, seeHidden: true, targetFlying: true, auraRange: 180, operatorRangeStack: 55, operatorBuff: 0.30, operatorBuffDuration: 12 }
        ]
    },
    sniper: {
        id: 'sniper',
        name: 'Sniper',
        cost: 300,
        shopPrice: 0,
        shopCurrency: 'coins',
        placement: 'cliff',
        role: 'Cliff / Marksman',
        description: 'The starter cliff tower. Deals high damage slowly from a cliff.',
        color: '#eab308',
        icon: '🎯',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#eab308' },
            { id: 'red', name: 'Red Sniper', badgeColor: '#eab308' },
            { id: 'farmer', name: 'Farm Defender', badgeColor: '#facc15', crateType: 'deluxe' },
            { id: 'gold', name: 'Golden Sniper', badgeColor: '#facc15', crateType: 'golden' }
      ],

        upgrades: [
            { name: 'Long Barrel', cost: 150, damage: 12, range: 240, attackSpeed: 2.2, seeHidden: false, targetFlying: true, HarmLead: false },
            { name: 'Caliber Boost', cost: 300, damage: 25, range: 280, attackSpeed: 2.0, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Night Vision Scope', cost: 650, damage: 55, range: 330, attackSpeed: 1.8, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Heavy Sniper', cost: 1400, damage: 130, range: 380, attackSpeed: 1.6, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Anti-Materiel Rifle', cost: 3200, damage: 320, range: 450, attackSpeed: 1.4, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    paintballer: {
        id: 'paintballer',
        name: 'Paintballer',
        cost: 250,
        shopPrice: 400,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Crowd Control / Splash',
        description: 'Paint. Deals small AoE damage that clumps enemies together!',
        color: '#ec4899',
        icon: '🎨',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#ec4899' }
        ],
        upgrades: [
            { name: 'Big Splat', cost: 120, damage: 3, range: 110, attackSpeed: 1.1, splashRadius: 40, seeHidden: false, targetFlying: false, HarmLead: false },
            { name: 'Pressurized Can', cost: 220, damage: 6, range: 125, attackSpeed: 0.95, splashRadius: 50, seeHidden: true, targetFlying: false, HarmLead: false },
            { name: 'Cluster Pellets', cost: 500, damage: 12, range: 140, attackSpeed: 0.8, splashRadius: 65, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Paint Cannon', cost: 1100, damage: 28, range: 160, attackSpeed: 0.65, splashRadius: 80, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Toxic Dye Barrage', cost: 2400, damage: 65, range: 190, attackSpeed: 0.5, splashRadius: 100, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    soldier: {
        id: 'soldier',
        name: 'Soldier',
        cost: 350,
        shopPrice: 650,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Versatile Infantry',
        description: 'Shoots burst of bullets at the enemies in a mid range. Great for beginners!',
        color: '#10b981',
        icon: '🪖',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#10b981' }
        ],
        upgrades: [
            { name: 'Tactical Scope', cost: 180, damage: 4, range: 130, attackSpeed: 0.38, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Heavy Receiver', cost: 320, damage: 7, range: 145, attackSpeed: 0.32, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Burst Specialist', cost: 700, damage: 14, range: 160, attackSpeed: 0.25, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Assault Veteran', cost: 1500, damage: 28, range: 180, attackSpeed: 0.18, seeHidden: true, targetFlying: true, HarmLead: false},
            { name: 'Commando Ops', cost: 3500, damage: 55, range: 210, attackSpeed: 0.12, seeHidden: true, targetFlying: true, HarmLead: false }
        ]
    },
    demoman: {
        id: 'demoman',
        name: 'Demoman',
        cost: 400,
        shopPrice: 850,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Anti-Armor / Explosive',
        description: 'Shoots AoE, high damaging grenades.',
        color: '#f97316',
        icon: '💣',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#f97316' }
        ],
        upgrades: [
            { name: 'Bigger Powder', cost: 200, damage: 15, range: 120, attackSpeed: 2.2, splashRadius: 45, seeHidden: false, targetFlying: false, HarmLead: true },
            { name: 'Long Launcher', cost: 400, damage: 32, range: 145, attackSpeed: 1.9, splashRadius: 55, seeHidden: false, targetFlying: false, HarmLead: true },
            { name: 'Sticky Bombs', cost: 850, damage: 75, range: 170, attackSpeed: 1.6, splashRadius: 70, seeHidden: true, targetFlying: false, HarmLead: true },
            { name: 'Cluster Ordnance', cost: 1800, damage: 160, range: 195, attackSpeed: 1.3, splashRadius: 85, seeHidden: true, targetFlying: false, HarmLead: true },
            { name: 'C4 Carpet Bomber', cost: 4200, damage: 380, range: 220, attackSpeed: 0.9, splashRadius: 110, seeHidden: true, targetFlying: false, HarmLead: true }
        ]
    },
    rocketeer: {
        id: 'rocketeer',
        name: 'Rocketeer',
        cost: 650,
        shopPrice: 1500,
        shopCurrency: 'coins',
        placement: 'cliff',
        role: 'Cliff / Heavy Ordnance',
        description: 'Shoots armour-piercing rockets from a high area!',
        color: '#ef4444',
        icon: '🚀',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#ef4444' }
        ],
        upgrades: [
            { name: 'Fast Reload', cost: 300, damage: 45, range: 220, attackSpeed: 2.5, splashRadius: 50, seeHidden: false, targetFlying: true, HarmLead: true },
            { name: 'Guided Warhead', cost: 600, damage: 95, range: 260, attackSpeed: 2.2, splashRadius: 65, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Heavy Payload', cost: 1200, damage: 200, range: 300, attackSpeed: 1.9, splashRadius: 85, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Quad Launcher', cost: 2600, damage: 420, range: 350, attackSpeed: 1.5, splashRadius: 105, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Nuke Silo', cost: 6000, damage: 950, range: 420, attackSpeed: 1.2, splashRadius: 140, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    minigunner: {
        id: 'minigunner',
        name: 'Minigunner',
        cost: 1800,
        shopPrice: 2000,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Heavy DPS',
        targetFilter: 'hidden',
        description: 'Absolute spray and pray! Delivers massive single-target DPS once fully spun up.',
        color: '#a855f7',
        icon: '⚙️',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#a855f7' },
            { id: 'gold', name: 'Golden Minigunner', badgeColor: '#facc15', crateType: 'golden' }
        ],
        upgrades: [
            { name: 'Fast Motor', cost: 400, damage: 4, range: 140, attackSpeed: 0.1, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Heavy Barrel', cost: 750, damage: 7, range: 155, attackSpeed: 0.09, seeHidden: true, targetFlying: true, HarmLead: false },
            { name: 'Armor Piercing', cost: 1600, damage: 12, range: 170, attackSpeed: 0.08, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Rotary Devastator', cost: 3400, damage: 22, range: 190, attackSpeed: 0.065, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Plasma Vulcan', cost: 7500, damage: 45, range: 220, attackSpeed: 0.045, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    juggernaut: {
        id: 'juggernaut',
        name: 'Juggernaut',
        cost: 5000,
        shopPrice: 25000,
        shopCurrency: 'coins',
        placement: 'ground',
        placementLimit: 1,
        role: 'Boss Damage / Support',
        description: 'We have only just started... Deals massive damage that chews bosses.',
        color: '#64748b',
        icon: '🛡️',
        skins: [{ id: 'default', name: 'Default', badgeColor: '#64748b' }],
        upgrades: [
            { name: 'Heavy Frame', cost: 2500, damage: 60, range: 220, attackSpeed: 1.2,seeHidden: false, HarmLead: false, targetFlying: false },
            { name: 'Better Barrel', cost: 7000, damage: 100, range: 245, attackSpeed: 1.0,seeHidden: true, HarmLead: false, targetFlying: false },
            { name: 'War Machine', cost: 15000, damage: 180, range: 270, attackSpeed: 0.9,seeHidden: true, HarmLead: false, targetFlying: false }
        ],
        upgradePaths: {
            boss: {
                name: 'Boss Destroyer',
                upgrades: [
                    { name: 'Siege Cannon', cost: 25000, damage: 350, range: 290, attackSpeed: 0.8, HarmLead: true, seeHidden: true  },
                    { name: 'Titan Breaker', cost: 50000, damage: 700, range: 315, attackSpeed: 0.6, HarmLead: true, seeHidden: true },
                    { name: 'Doom Arsenal', cost: 100000, damage: 1200, range: 340, attackSpeed: 0.5, HarmLead: true, seeHidden: true },
                    { name: 'Level 7: Boss Destroyer', cost: 200000, damage: 2000, range: 370, attackSpeed: 1, HarmLead: true, seeHidden: true}
                ]
            },
            support: {
                name: 'Battle Support',
                upgrades: [
                    { name: 'Field Coordination', cost: 20000, damage: 180, range: 260, attackSpeed: 0.9, supportRange: 125, reloadReduction: 0.12, debuffReduction: 0.15, seeHidden: true, targetFlying:true},
                    { name: 'Countermeasure Team', cost: 40000, damage: 180, range: 280, attackSpeed: 0.9, supportRange: 155, reloadReduction: 0.20, debuffReduction: 0.30, seeHidden: true, targetFlying:true },
                    { name: 'Rapid Response', cost: 80000, damage: 180, range: 300, attackSpeed: 0.9, supportRange: 185, reloadReduction: 0.30, debuffReduction: 0.45, seeHidden: true, targetFlying:true },
                    { name: 'Combined Arms', cost: 150000, damage: 180, range: 320, attackSpeed: 0.9, supportRange: 220, reloadReduction: 0.40, debuffReduction: 0.60, seeHidden: true, targetFlying:true }
                ]
            }
        }
    },
    kingpin: {
        id: 'kingpin',
        name: 'Kingpin',
        cost: 1600,
        shopPrice: 5000,
        shopCurrency: 'coins',
        placement: 'ground',
        placementLimit: 3,
        role: 'Troop Deployment',
        description: 'Looks like they will be... sleeping with the fishes! Sends bouncers, gunners, and money runners from the base along the route to support your defense.',
        color: '#a16207',
        icon: '👑',
        skins: [{ id: 'default', name: 'Default', badgeColor: '#a16207' }],
        upgrades: [
            { name: 'Bouncer Crew', cost: 800, range: 120, attackSpeed: 0, troopType: 'bouncer', troopDamage: 45, troopSpeed: 75, troopSpawnInterval: 8, abilityCooldown: 15 },
            { name: 'Street Gunners', cost: 1600, range: 150, attackSpeed: 0, troopType: 'gunner', troopDamage: 30, troopRange: 105, troopSpeed: 65, troopSpawnInterval: 7, abilityCooldown: 15 },
            { name: 'Cash Runners', cost: 3000, range: 170, attackSpeed: 0, troopType: 'runner', troopIncome: 40, troopSpeed: 105, troopSpawnInterval: 6, abilityCooldown: 15 },
            { name: 'Mafia Network', cost: 6000, range: 190, attackSpeed: 0, troopType: 'gunner', troopDamage: 55, troopRange: 130, troopSpeed: 70, troopSpawnInterval: 5, abilityCooldown: 15 },
            { name: 'Underworld Empire', cost: 12000, range: 220, attackSpeed: 0, troopType: 'runner', troopIncome: 100, troopSpeed: 125, troopSpawnInterval: 4, abilityCooldown: 15 }
        ]
    },
    enforcer: {
        id: 'enforcer',
        name: 'Enforcer',
        cost: 2500,
        shopPrice: 9000,
        shopCurrency: 'coins',
        placement: 'ground',
        placementLimit: 1,
        role: 'Relocation / Vehicle Strike',
        description: 'With high piercing damage, it can reposition towers or spawn vehiches to mow down enemies!',
        color: '#0f766e',
        icon: '🚔',
        skins: [{ id: 'default', name: 'Default', badgeColor: '#0f766e' }],
        upgrades: [
            { name: 'Response Unit', cost: 1000, damage: 30, range: 150, attackSpeed: 0.8, HarmLead: true },
            { name: 'Pursuit Training', cost: 2500, damage: 50, range: 175, attackSpeed: 0.7, HarmLead: true },
            { name: 'Tactical Division', cost: 6000, damage: 80, range: 200, attackSpeed: 0.6, HarmLead: true }
        ],
        upgradePaths: {
            top: {
                name: 'Bad Guy',
                upgrades: [
                    { name: 'Escape', cost: 10000, damage: 100, range: 210, attackSpeed: 0.6, relocationCooldown: 25 },
                    { name: 'Heist Deployment', cost: 20000, damage: 125, range: 220, attackSpeed: 0.55, relocationCooldown: 18 },
                    { name: 'Speedy Getaway', cost: 40000, damage: 150, range: 230, attackSpeed: 0.5, relocationCooldown: 12 },
                    { name: 'Double Life', cost: 80000, damage: 200, range: 250, attackSpeed: 0.45, relocationCooldown: 8 }
                ]
            },
            bottom: {
                name: 'Good Guy',
                upgrades: [
                    { name: 'Patrol Cruiser', cost: 10000, damage: 100, range: 210, attackSpeed: 0.6, vehicleCooldown: 24, vehicleDamage: 800, vehicleSpeed: 220 },
                    { name: 'Armored Pursuit', cost: 20000, damage: 125, range: 220, attackSpeed: 0.55, vehicleCooldown: 18, vehicleDamage: 1400, vehicleSpeed: 250 },
                    { name: 'Heavy Convoy', cost: 40000, damage: 150, range: 230, attackSpeed: 0.5, vehicleCooldown: 13, vehicleDamage: 2400, vehicleSpeed: 280 },
                    { name: 'Highway Hammer', cost: 80000, damage: 200, range: 250, attackSpeed: 0.45, vehicleCooldown: 8, vehicleDamage: 4000, vehicleSpeed: 320 }
                ]
            }
        }
    },
    dj: {
        id: 'dj',
        name: 'DJ',
        cost: 3000,
        shopPrice: 15000,
        shopCurrency: 'coins',
        placement: 'ground',
        placementLimit: 1,
        role: 'Track-Wide Support',
        description: 'Who says you cannot rave during a apocaplyse? Plays Funky Music, boosting towers based on its set track!',
        color: '#a855f7',
        icon: '🎧',
        skins: [{ id: 'default', name: 'Default', badgeColor: '#a855f7' }],
        upgrades: [
            { name: 'Soundcheck', cost: 1500, damage: 25, range: 220, attackSpeed: 1.2 },
            { name: 'Bass Boost', cost: 3500, damage: 40, range: 240, attackSpeed: 1.0 },
            { name: 'Main Stage', cost: 7000, damage: 60, range: 260, attackSpeed: 0.9 }
        ],
        upgradePaths: {
            purple: {
                name: 'Purple Track: Range',
                upgrades: [
                    { name: 'Wide Reverb', cost: 12000, damage: 70, range: 280, attackSpeed: 0.85, rangeBoost: 0.15, trackRangeFraction: 0.24, beatEffect: 'knockback', abilityCooldown: 30 },
                    { name: 'Surround Sound', cost: 24000, damage: 85, range: 300, attackSpeed: 0.8, rangeBoost: 0.25, trackRangeFraction: 0.28, beatEffect: 'knockback', abilityCooldown: 30 },
                    { name: 'Arena Acoustics', cost: 48000, damage: 100, range: 320, attackSpeed: 0.75, rangeBoost: 0.35, trackRangeFraction: 0.32, beatEffect: 'knockback', abilityCooldown: 30 },
                    { name: 'World Tour', cost: 90000, damage: 120, range: 350, attackSpeed: 0.7, rangeBoost: 0.5, trackRangeFraction: 0.36, beatEffect: 'knockback', abilityCooldown: 30 }
                ]
            },
            green: {
                name: 'Green Track: Discount',
                upgrades: [
                    { name: 'Happy Hour', cost: 12000, damage: 70, range: 280, attackSpeed: 0.85, upgradeDiscount: 0.10, trackRangeFraction: 0.24, beatEffect: 'money', abilityMoney: 1500, abilityCooldown: 30 },
                    { name: 'Guest List', cost: 24000, damage: 85, range: 300, attackSpeed: 0.8, upgradeDiscount: 0.18, trackRangeFraction: 0.28, beatEffect: 'money', abilityMoney: 3000, abilityCooldown: 30 },
                    { name: 'VIP Tables', cost: 48000, damage: 100, range: 320, attackSpeed: 0.75, upgradeDiscount: 0.27, trackRangeFraction: 0.32, beatEffect: 'money', abilityMoney: 6000, abilityCooldown: 30 },
                    { name: 'Sold-Out Show', cost: 90000, damage: 120, range: 350, attackSpeed: 0.7, upgradeDiscount: 0.38, trackRangeFraction: 0.36, beatEffect: 'money', abilityMoney: 12000, abilityCooldown: 30 }
                ]
            },
            red: {
                name: 'Red Track: Damage',
                upgrades: [
                    { name: 'Distortion', cost: 12000, damage: 70, range: 280, attackSpeed: 0.85, damageBoost: 0.12, trackRangeFraction: 0.24, beatEffect: 'damage', abilityDamage: 1200, abilityCooldown: 30 },
                    { name: 'Overdrive', cost: 24000, damage: 85, range: 300, attackSpeed: 0.8, damageBoost: 0.22, trackRangeFraction: 0.28, beatEffect: 'damage', abilityDamage: 2500, abilityCooldown: 30 },
                    { name: 'Feedback Wall', cost: 48000, damage: 100, range: 320, attackSpeed: 0.75, damageBoost: 0.35, trackRangeFraction: 0.32, beatEffect: 'damage', abilityDamage: 5000, abilityCooldown: 30 },
                    { name: 'Maximum Volume', cost: 90000, damage: 120, range: 350, attackSpeed: 0.7, damageBoost: 0.5, trackRangeFraction: 0.36, beatEffect: 'damage', abilityDamage: 10000, abilityCooldown: 30 }
                ]
            }
        }
    },
    ranger: {
        id: 'ranger',
        name: 'Ranger',
        cost: 1200,
        shopPrice: 3500,
        shopCurrency: 'coins',
        placement: 'cliff',
        role: 'Late / Defence',
        description: 'Precision is key... Does super high damage from infinite range!',
        color: '#84cc16',
        icon: '🤠',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#84cc16' }
        ],
        upgrades: [
            { name: 'Eagle Eye', cost: 600, damage: 75, range: 920, attackSpeed: 3.2, seeHidden: false, targetFlying: true, HarmLead: true },
            { name: 'Magnum Rounds', cost: 1200, damage: 160, range: 970, attackSpeed: 2.8, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Armor Breaker', cost: 2500, damage: 360, range: 1020, attackSpeed: 2.5, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Railgun Tech', cost: 5500, damage: 850, range: 1280, attackSpeed: 2.1, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Orbital Strike Rifle', cost: 12000, damage: 2100, range: 1500, attackSpeed: 1.8, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    commander: {
        id: 'commander',
        name: 'Commander',
        cost: 600,
        shopPrice: 2500,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Support Leader',
        description: 'Strength in numbers! Boost cooldown of towers!',
        color: '#e11d48',
        icon: '📢',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#e11d48' }
        ],
        upgrades: [
            { name: 'Tactical Radio', cost: 300, damage: 0, range: 150, attackSpeed: 0, buffRange: 160, buffSpeed: 0.15, abilityPower: 0.50, abilityDuration: 12, abilityCooldown: 45, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Field Command', cost: 600, damage: 0, range: 170, attackSpeed: 0, buffRange: 180, buffSpeed: 0.25, abilityPower: 0.50, abilityDuration: 12, abilityCooldown: 45, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Call to Arms', cost: 1400, damage: 0, range: 190, attackSpeed: 0, buffRange: 200, buffSpeed: 0.35, abilityPower: 0.50, abilityDuration: 12, abilityCooldown: 45, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'War General', cost: 3200, damage: 0, range: 220, attackSpeed: 0, buffRange: 240, buffSpeed: 0.50, abilityPower: 0.50, abilityDuration: 12, abilityCooldown: 45, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    farm: {
        id: 'farm',
        name: 'Farm',
        cost: 250,
        shopPrice: 1000,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Income Generation',
        description: 'Generates bonus cash each wave.',
        color: '#16a34a',
        icon: '🌽',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#16a34a' }
        ],
        upgrades: [
            { name: 'Silo Storage', cost: 200, income: 100, range: 50 },
            { name: 'Irrigation', cost: 450, income: 250, range: 50 },
            { name: 'Heavy Machinery', cost: 1000, income: 600, range: 50 },
            { name: 'Industrial Plantation', cost: 2200, income: 1500, range: 50 },
            { name: 'Global Agri-Corp', cost: 5000, income: 3800, range: 50 }
        ]
    },
    electroshocker: {
        id: 'electroshocker',
        name: 'Electroshocker',
        cost: 500,
        shopPrice: 1800,
        shopCurrency: 'coins',
        placement: 'ground',
        role: 'Stun & Slow Zap',
        targetFilter: 'hidden_or_lead',
        description: 'Emits chain lightning bolts that stun and slow down clusters of targets simultaneously.',
        color: '#06b6d4',
        icon: '⚡',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#06b6d4' }
        ],
        upgrades: [
            { name: 'Voltage Boost', cost: 250, damage: 8, range: 120, attackSpeed: 1.5, targetsCount: 2, stunDuration: 0.4, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Chain Lightning', cost: 500, damage: 18, range: 140, attackSpeed: 1.3, targetsCount: 3, stunDuration: 0.6, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'High Amp Capacitor', cost: 1100, damage: 42, range: 160, attackSpeed: 1.1, targetsCount: 4, stunDuration: 0.8, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Overcharge Generator', cost: 2400, damage: 90, range: 185, attackSpeed: 0.9, targetsCount: 5, stunDuration: 1.0, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Tesla Storm Matrix', cost: 5500, damage: 210, range: 210, attackSpeed: 0.7, targetsCount: 7, stunDuration: 1.2, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    },
    mortar: {
        id: 'mortar',
        name: 'Mortar',
        cost: 750,
        shopPrice: 3000,
        shopCurrency: 'coins',
        placement: 'cliff',
        role: 'Cliff Long Artillery',
        description: 'Loads and shoots grenades from a cliff.',
        color: '#d97706',
        icon: '💥',
        skins: [
            { id: 'default', name: 'Default', badgeColor: '#d97706' }
        ],
        upgrades: [
            { name: 'Extended Barrel', cost: 350, damage: 35, range: 300, attackSpeed: 3.5, splashRadius: 60, seeHidden: false, targetFlying: false, HarmLead: true },
            { name: 'High Explosive', cost: 700, damage: 80, range: 340, attackSpeed: 3.0, splashRadius: 75, seeHidden: true, targetFlying: false, HarmLead: true },
            { name: 'Napalm Shells', cost: 1500, damage: 180, range: 390, attackSpeed: 2.6, splashRadius: 90, seeHidden: true, targetFlying: false, HarmLead: true },
            { name: 'Artillery Battery', cost: 3400, damage: 410, range: 450, attackSpeed: 2.2, splashRadius: 110, seeHidden: true, targetFlying: true, HarmLead: true },
            { name: 'Doomsday Howitzer', cost: 8000, damage: 1050, range: 520, attackSpeed: 1.8, splashRadius: 140, seeHidden: true, targetFlying: true, HarmLead: true }
        ]
    }
};

const SKIN_CRATES = {
    basic: {
        id: 'basic',
        name: 'Basic Crate',
        price: 500,
        currency: 'coins',
        icon: '📦',
        desc: 'Contains the most basic skins. For cheap prices... Currently there is one.'
    },
    deluxe: {
        id: 'deluxe',
        name: 'Deluxe Crate',
        price: 2500,
        currency: 'coins',
        icon: '🎁',
        desc: 'Contains skins! More ttext here yeah blah blah blah blah blahe eh'
    },
    ultra: {
        id: 'ultra',
        name: 'Deluxe Crate',
        price: 5,
        currency: 'gems',
        icon: '🎁',
        desc: 'Super Good Skins!!! More ttext here yeah blah blah blah blah blahe eh'
    },
    golden: {
        id: 'golden',
        name: 'Golden Crate',
        price: 25,
        currency: 'gems',
        icon: '🎁',
        desc: 'Contains a golden skin for one of your unlocked towers. Some towers have bonus golden buffs!'
    }
};

// Consumables Definitions
const CONSUMABLES = {
    crate: {
        id: 'crate',
        name: 'Supply Drop',
        price: 300,
        currency: 'coins',
        icon: '📦',
        desc: 'Instantly awards +$500 in-game cash during match.'
    },
    freeze: {
        id: 'freeze',
        name: 'Blizzard Bomb',
        price: 500,
        currency: 'coins',
        icon: '❄️',
        desc: 'Freezes all enemies on map for 5 seconds.'
    },
    energy_drink: {
        id: 'energy_drink',
        name: 'Energy Drink',
        price: 750,
        currency: 'coins',
        icon: '🥤',
        desc: 'Boosts attack speed of all towers by +50% for 15 seconds.'
    },
    nuke: {
        id: 'nuke',
        name: 'Nuke',
        price: 5,
        currency: 'gems',
        icon: '☢️',
        desc: 'Legendary! Deals 1,000 explosive damage to ALL enemies on screen!'
    }
};

// Redeemable Codes
const PROMO_CODES = {
    'TDS2026': { coins: 1500, gems: 50, msg: 'Redeemed! Received +$1,500 Coins & +50 Gems!' },
    'ROBLOX': { coins: 1000, gems: 25, msg: 'Redeemed! Received +$1,000 Coins & +25 Gems!' },
    'FREECOINS': { coins: 2000, gems: 0, msg: 'Redeemed! Received +$2,000 Coins!' },
    'TOILETHORROR': { coins: 90000000, gems: 900000, msg: 'wowser!' }

};

const BASE_ENEMIES = {
  //basic
  normal: { name: 'Normal', hp: 5, speed: 75, reward: 10, color: '#e2e8f0', size: 14, hidden: false, flying: false, lead: false },
  abnormal: { name: 'Abnormal', hp: 8, speed: 75, reward: 10, color: '#e2e8f0', size: 14, hidden: false, flying: false, lead: false },
  frostnormal: { name: 'Frost', hp: 12, speed: 75, reward: 10, color: '#e2e8f0', size: 14, hidden: false, flying: false, lead: false },
  //fast
  quick: { name: 'Quick', hp: 10, speed: 120, reward: 12, color: '#facc15', size: 12, hidden: false, flying: false, lead: false },
  quickabnormal: { name: 'Quick Abnormal', hp: 14, speed: 120, reward: 12, color: '#facc15', size: 12, hidden: false, flying: false, lead: false },
  frostrunner: { name: 'Snowy', hp: 18, speed: 120, reward: 12, color: '#facc15', size: 12, hidden: false, flying: false, lead: false },
  //tanky
  slow: { name: 'Heavy', hp: 50, speed: 45, reward: 25, color: '#64748b', size: 19, hidden: false, flying: false, lead: false },
  molten: { name: 'Molten', hp: 40, speed: 45, reward: 25, color: '#64748b', size: 19, hidden: false, flying: false, lead: false },
  snowman: { name: 'Snowman', hp: 100, speed: 45, reward: 25, color: '#64748b', size: 19, hidden: false, flying: false, lead: false },
  //1stboss
  abnormal: { name: 'Elite Abnormal', hp: 500, speed: 35, reward: 500, color: '#ef4444', size: 26, hidden: false, flying: false, lead: false, boss: false },
  frost: { name: 'Snow Golem', hp: 600, speed: 35, reward: 600, color: '#ef4444', size: 26, hidden: false, flying: false, lead: false, boss: false },
  //gimmicky/detections until 2ndboss enemies
  hidden: { name: 'Hidden', hp: 20, speed: 95, reward: 20, color: '#78716c', size: 13, hidden: true, flying: false, lead: false },
  flying: { name: 'Balloon', hp: 28, speed: 110, reward: 30, color: '#38bdf8', size: 15, hidden: false, flying: true, lead: false },
  lead: { name: 'Lead', hp: 80, speed: 50, reward: 40, color: '#475569', size: 18, hidden: false, flying: false, lead: true },
  yeti: { name: 'Yeti', hp: 200, speed: 200, reward: 50, color: '#78716c', size: 13, hidden: true, flying: false, lead: false },
  mist: { name: 'Cold Mist', hp: 250, speed: 95, reward: 200, color: '#78716c', size: 13, hidden: true, flying: false, lead: false },
  invader: { name: 'Lead', hp: 80, speed: 50, reward: 30, color: '#475569', size: 18, hidden: false, flying: false, lead: true },
  angle: { name: 'Frost Angel', hp: 250, speed: 70, reward: 250, color: '#475569', size: 18, hidden: false, flying: true, lead: false },
  tank: { name: 'Tank', hp: 200, speed: 40, reward: 200, color: '#475569', size: 18, hidden: false, flying: false, lead: false },
  //unused
  hidden_flying: { name: 'Phantom Fleet', hp: 35, speed: 115, reward: 35, color: '#a855f7', size: 14, hidden: true, flying: true, lead: false },
  lead_flying: { name: 'Blimp', hp: 160, speed: 65, reward: 60, color: '#334155', size: 20, hidden: false, flying: true, lead: true },
  //here comes the splitters
  splitter4: { name: 'Splitter (Layer 4)', hp: 500, speed: 35, reward: 500, color: '#a774ad', size: 40, hidden: false, flying: false, lead: false },
  splitter3: { name: 'Splitter (Layer 3)', hp: 350, speed: 45, reward: 200, color: '#a774ad', size: 30, hidden: false, flying: false, lead: false },
  splitter4: { name: 'Splitter (Layer 2)', hp: 200, speed: 65, reward: 100, color: '#a774ad', size: 25, hidden: false, flying: false, lead: false },
  splitter4: { name: 'Splitter (Layer 1)', hp: 50, speed: 85, reward: 50, color: '#a774ad', size: 20, hidden: false, flying: false, lead: false },
  splitter4: { name: 'Splitter', hp: 50, speed: 95, reward: 10, color: '#a774ad', size: 20, hidden: false, flying: false, lead: false },
  //2nd/final boss for 1st-2nd gamemodes
  giant_boss: { name: 'Brute', hp: 10000, speed: 35, reward: 20000, color: '#ef4444', size: 26, hidden: false, flying: false, lead: false, boss: true },
  molten_boss: { name: 'Molten Core Boss', hp: 3500, speed: 30, reward: 800, color: '#f97316', size: 32, hidden: false, flying: false, lead: true, boss: true },
  fallen_king: { name: 'Fallen King', hp: 7500, speed: 28, reward: 1500, color: '#9333ea', size: 36, hidden: false, flying: false, lead: true, boss: true },
  //idk
  frost_hero: { name: 'Frost Titan', hp: 5500, speed: 32, reward: 1200, color: '#0284c7', size: 34, hidden: false, flying: false, lead: true, boss: true }
};
