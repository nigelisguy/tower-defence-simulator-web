const WAVE_DATA = {
    easy: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 8 }
        ]},
        // Wave 2
        { enemies: [
            { type: 'normal', count: 12 }
        ]},
        // Wave 3
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'quick', count: 3 }
        ]},
        // Wave 4
        { enemies: [
            { type: 'normal', count: 8 },
            { type: 'quick', count: 5 }
        ]},
        // Wave 5
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'quick', count: 6 },
            { type: 'normal', count: 4 }
        ]},
        // Wave 6
        { enemies: [
            { type: 'normal', count: 6 },
            { type: 'slow', count: 3 },
            { type: 'quick', count: 6 }
        ]},
        // Wave 7
        { enemies: [
            { type: 'quick', count: 10 },
            { type: 'slow', count: 4 }
        ]},
        // Wave 8
        { enemies: [
            { type: 'normal', count: 8 },
            { type: 'hidden', count: 4 },
            { type: 'slow', count: 3 }
        ]},
        // Wave 9
        { enemies: [
            { type: 'hidden', count: 6 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 10
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'flying', count: 5 },
            { type: 'hidden', count: 4 }
        ]},
        // Wave 11
        { enemies: [
            { type: 'flying', count: 8 },
            { type: 'quick', count: 6 },
            { type: 'slow', count: 3 }
        ]},
        // Wave 12
        { enemies: [
            { type: 'normal', count: 6 },
            { type: 'lead', count: 3 },
            { type: 'flying', count: 5 }
        ]},
        // Wave 13
        { enemies: [
            { type: 'lead', count: 4 },
            { type: 'hidden', count: 6 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 14
        { enemies: [
            { type: 'slow', count: 6 },
            { type: 'lead', count: 4 },
            { type: 'flying', count: 6 }
        ]},
        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 4 },
            { type: 'lead', count: 5 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 16
        { enemies: [
            { type: 'quick', count: 10, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 5 }
        ]},
        // Wave 17
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'slow', count: 5, mods: ['BLOATED'] },
            { type: 'hidden', count: 5 }
        ]},
        // Wave 18
        { enemies: [
            { type: 'flying', count: 8 },
            { type: 'hidden_flying', count: 6 },
            { type: 'lead', count: 4 }
        ]},
        // Wave 19
        { enemies: [
            { type: 'lead', count: 6, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 6 },
            { type: 'quick', count: 10, mods: ['AGRO'] }
        ]},
        // Wave 20 - BOSS
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'slow', count: 5 },
            { type: 'giant_boss', count: 1, mods: ['BLOATED'], delay: 2.0 }
        ]}
    ],

    // =====================
    // CASUAL  (25 waves)
    // =====================
    casual: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 10 }
        ]},
        // Wave 2
        { enemies: [
            { type: 'normal', count: 14 }
        ]},
        // Wave 3
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'quick', count: 4 }
        ]},
        // Wave 4
        { enemies: [
            { type: 'quick', count: 8 },
            { type: 'normal', count: 8 }
        ]},
        // Wave 5
        { enemies: [
            { type: 'normal', count: 12 },
            { type: 'quick', count: 6 }
        ]},
        // Wave 6
        { enemies: [
            { type: 'slow', count: 4 },
            { type: 'normal', count: 10 },
            { type: 'quick', count: 5 }
        ]},
        // Wave 7
        { enemies: [
            { type: 'quick', count: 12 },
            { type: 'slow', count: 5 }
        ]},
        // Wave 8
        { enemies: [
            { type: 'hidden', count: 5 },
            { type: 'normal', count: 10 },
            { type: 'slow', count: 4 }
        ]},
        // Wave 9
        { enemies: [
            { type: 'hidden', count: 8 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 10
        { enemies: [
            { type: 'flying', count: 6 },
            { type: 'normal', count: 10 },
            { type: 'hidden', count: 5 }
        ]},
        // Wave 11
        { enemies: [
            { type: 'flying', count: 10 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 12
        { enemies: [
            { type: 'lead', count: 4 },
            { type: 'flying', count: 6 },
            { type: 'normal', count: 8 }
        ]},
        // Wave 13
        { enemies: [
            { type: 'lead', count: 5 },
            { type: 'hidden', count: 8 },
            { type: 'slow', count: 4 }
        ]},
        // Wave 14
        { enemies: [
            { type: 'slow', count: 6, mods: ['BLOATED'] },
            { type: 'lead', count: 4 },
            { type: 'flying', count: 6 }
        ]},
        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 5 },
            { type: 'lead', count: 5 },
            { type: 'quick', count: 10 }
        ]},
        // Wave 16
        { enemies: [
            { type: 'quick', count: 12, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 6 }
        ]},
        // Wave 17
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'slow', count: 6, mods: ['BLOATED'] },
            { type: 'hidden', count: 6 }
        ]},
        // Wave 18
        { enemies: [
            { type: 'flying', count: 10 },
            { type: 'hidden_flying', count: 6 },
            { type: 'lead', count: 5 }
        ]},
        // Wave 19
        { enemies: [
            { type: 'lead', count: 6, mods: ['SHIELDED'] },
            { type: 'quick', count: 10, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 6 }
        ]},
        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 3 },
            { type: 'lead', count: 6 },
            { type: 'hidden_flying', count: 8 }
        ]},
        // Wave 21
        { enemies: [
            { type: 'slow', count: 8, mods: ['REGEN'] },
            { type: 'lead_flying', count: 4 },
            { type: 'quick', count: 12 }
        ]},
        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 8, mods: ['AGRO'] },
            { type: 'lead', count: 6, mods: ['SHIELDED'] }
        ]},
        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 5 },
            { type: 'slow', count: 6, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 8 }
        ]},
        // Wave 24
        { enemies: [
            { type: 'lead', count: 8, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 8, mods: ['AGRO'] },
            { type: 'quick', count: 10, mods: ['SWIFT'] }
        ]},
        // Wave 25 - BOSS
        { enemies: [
            { type: 'slow', count: 8 },
            { type: 'lead', count: 5 },
            { type: 'giant_boss', count: 1, mods: ['BLOATED'], delay: 2.0 }
        ]}
    ],

    // =====================
    // INTERMEDIATE  (30 waves)
    // =====================
    intermediate: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 10 }
        ]},
        // Wave 2
        { enemies: [
            { type: 'normal', count: 15 }
        ]},
        // Wave 3
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'quick', count: 5 }
        ]},
        // Wave 4
        { enemies: [
            { type: 'quick', count: 10 },
            { type: 'normal', count: 8 }
        ]},
        // Wave 5
        { enemies: [
            { type: 'normal', count: 12 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 6
        { enemies: [
            { type: 'slow', count: 5 },
            { type: 'normal', count: 12 },
            { type: 'quick', count: 6 }
        ]},
        // Wave 7
        { enemies: [
            { type: 'quick', count: 15 },
            { type: 'slow', count: 5 }
        ]},
        // Wave 8
        { enemies: [
            { type: 'hidden', count: 6 },
            { type: 'normal', count: 12 },
            { type: 'slow', count: 5 }
        ]},
        // Wave 9
        { enemies: [
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 10 }
        ]},
        // Wave 10
        { enemies: [
            { type: 'flying', count: 8 },
            { type: 'hidden', count: 6 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 11
        { enemies: [
            { type: 'flying', count: 12 },
            { type: 'quick', count: 10 }
        ]},
        // Wave 12
        { enemies: [
            { type: 'lead', count: 5 },
            { type: 'flying', count: 8 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 13
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'hidden', count: 10 },
            { type: 'slow', count: 5 }
        ]},
        // Wave 14
        { enemies: [
            { type: 'slow', count: 6, mods: ['BLOATED'] },
            { type: 'lead', count: 5 },
            { type: 'flying', count: 8 }
        ]},
        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 6 },
            { type: 'lead', count: 6 },
            { type: 'quick', count: 12 }
        ]},
        // Wave 16
        { enemies: [
            { type: 'quick', count: 15, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 6 }
        ]},
        // Wave 17
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'slow', count: 6, mods: ['BLOATED'] },
            { type: 'hidden', count: 8 }
        ]},
        // Wave 18
        { enemies: [
            { type: 'flying', count: 12 },
            { type: 'hidden_flying', count: 8 },
            { type: 'lead', count: 5 }
        ]},
        // Wave 19
        { enemies: [
            { type: 'lead', count: 8, mods: ['SHIELDED'] },
            { type: 'quick', count: 12, mods: ['AGRO'] }
        ]},
        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 4 },
            { type: 'hidden_flying', count: 8 },
            { type: 'lead', count: 6 }
        ]},
        // Wave 21
        { enemies: [
            { type: 'slow', count: 8, mods: ['REGEN'] },
            { type: 'lead_flying', count: 5 },
            { type: 'quick', count: 15 }
        ]},
        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 10, mods: ['AGRO'] },
            { type: 'lead', count: 8, mods: ['SHIELDED'] }
        ]},
        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 6 },
            { type: 'slow', count: 6, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 10 }
        ]},
        // Wave 24
        { enemies: [
            { type: 'lead', count: 8, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 10 },
            { type: 'quick', count: 12, mods: ['SWIFT'] }
        ]},
        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 6, mods: ['SHIELDED'] },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 8 }
        ]},
        // Wave 26
        { enemies: [
            { type: 'quick', count: 20, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 6, mods: ['REGEN'] }
        ]},
        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 6, mods: ['SHIELDED'] },
            { type: 'hidden', count: 12, mods: ['AGRO'] },
            { type: 'slow', count: 8, mods: ['BLOATED'] }
        ]},
        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 10, mods: ['SWIFT'] },
            { type: 'lead', count: 10, mods: ['SHIELDED', 'REGEN'] }
        ]},
        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 15, mods: ['AGRO'] }
        ]},
        // Wave 30 - BOSS
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'hidden_flying', count: 6 },
            { type: 'giant_boss', count: 1, mods: ['BLOATED'], delay: 2.0 }
        ]}
    ],

    // =====================
    // MOLTEN  (40 waves)
    // =====================
    molten: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 12 }
        ]},
        // Wave 2
        { enemies: [
            { type: 'normal', count: 16 }
        ]},
        // Wave 3
        { enemies: [
            { type: 'normal', count: 12 },
            { type: 'quick', count: 5 }
        ]},
        // Wave 4
        { enemies: [
            { type: 'quick', count: 10 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 5
        { enemies: [
            { type: 'normal', count: 14 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 6
        { enemies: [
            { type: 'slow', count: 5 },
            { type: 'normal', count: 12 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 7
        { enemies: [
            { type: 'quick', count: 16 },
            { type: 'slow', count: 6 }
        ]},
        // Wave 8
        { enemies: [
            { type: 'hidden', count: 6 },
            { type: 'normal', count: 14 },
            { type: 'slow', count: 5 }
        ]},
        // Wave 9
        { enemies: [
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 12 }
        ]},
        // Wave 10
        { enemies: [
            { type: 'flying', count: 8 },
            { type: 'hidden', count: 8 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 11
        { enemies: [
            { type: 'flying', count: 12 },
            { type: 'quick', count: 10 },
            { type: 'slow', count: 4 }
        ]},
        // Wave 12
        { enemies: [
            { type: 'lead', count: 5 },
            { type: 'flying', count: 10 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 13
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 10 }
        ]},
        // Wave 14
        { enemies: [
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'lead', count: 6 },
            { type: 'flying', count: 8 }
        ]},
        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 6 },
            { type: 'lead', count: 8 },
            { type: 'quick', count: 14 }
        ]},
        // Wave 16
        { enemies: [
            { type: 'quick', count: 16, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 8 }
        ]},
        // Wave 17
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'hidden', count: 8 }
        ]},
        // Wave 18
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'hidden_flying', count: 8 },
            { type: 'lead', count: 6 }
        ]},
        // Wave 19
        { enemies: [
            { type: 'lead', count: 8, mods: ['SHIELDED'] },
            { type: 'quick', count: 14, mods: ['AGRO'] }
        ]},
        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 4 },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead', count: 8 }
        ]},
        // Wave 21
        { enemies: [
            { type: 'slow', count: 10, mods: ['REGEN'] },
            { type: 'lead_flying', count: 5 },
            { type: 'quick', count: 14 }
        ]},
        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 10, mods: ['AGRO'] },
            { type: 'lead', count: 8, mods: ['SHIELDED'] }
        ]},
        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 6 },
            { type: 'slow', count: 8, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 10 }
        ]},
        // Wave 24
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 10 },
            { type: 'quick', count: 14, mods: ['SWIFT'] }
        ]},
        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 8 }
        ]},
        // Wave 26
        { enemies: [
            { type: 'quick', count: 20, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 8, mods: ['REGEN'] }
        ]},
        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'hidden', count: 14, mods: ['AGRO'] },
            { type: 'slow', count: 8, mods: ['BLOATED'] }
        ]},
        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 12, mods: ['SWIFT'] },
            { type: 'lead', count: 10, mods: ['SHIELDED', 'REGEN'] }
        ]},
        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 16, mods: ['AGRO'] }
        ]},
        // Wave 30
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 8, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 10, mods: ['AGRO'] }
        ]},
        // Wave 31
        { enemies: [
            { type: 'slow', count: 12, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'quick', count: 18, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 32
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 12, mods: ['AGRO'] },
            { type: 'lead', count: 8, mods: ['REGEN'] }
        ]},
        // Wave 33
        { enemies: [
            { type: 'slow', count: 10, mods: ['BLOATED', 'REGEN', 'SHIELDED'] },
            { type: 'quick', count: 20, mods: ['AGRO'] }
        ]},
        // Wave 34
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 10, mods: ['SWIFT', 'AGRO'] }
        ]},
        // Wave 35
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead_flying', count: 8, mods: ['REGEN'] },
            { type: 'quick', count: 16, mods: ['AGRO'] }
        ]},
        // Wave 36
        { enemies: [
            { type: 'hidden_flying', count: 14, mods: ['SWIFT', 'AGRO'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'SHIELDED', 'REGEN'] }
        ]},
        // Wave 37
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead', count: 10, mods: ['REGEN', 'SHIELDED'] },
            { type: 'hidden', count: 12, mods: ['AGRO'] }
        ]},
        // Wave 38
        { enemies: [
            { type: 'quick', count: 22, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead_flying', count: 10, mods: ['SHIELDED', 'REGEN'] },
            { type: 'slow', count: 8, mods: ['BLOATED', 'SHIELDED'] }
        ]},
        // Wave 39
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 12, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] }
        ]},
        // Wave 40 - MOLTEN BOSS
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'lead_flying', count: 6, mods: ['REGEN'] },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'molten_boss', count: 1, mods: ['AGRO', 'SHIELDED'], delay: 2.0 }
        ]}
    ],

    // =====================
    // FALLEN  (40 waves)
    // =====================
    fallen: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 14 }
        ]},
        // Wave 2
        { enemies: [
            { type: 'normal', count: 18 }
        ]},
        // Wave 3
        { enemies: [
            { type: 'normal', count: 12 },
            { type: 'quick', count: 6 }
        ]},
        // Wave 4
        { enemies: [
            { type: 'quick', count: 12 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 5
        { enemies: [
            { type: 'normal', count: 14 },
            { type: 'quick', count: 10 }
        ]},
        // Wave 6
        { enemies: [
            { type: 'slow', count: 6 },
            { type: 'normal', count: 14 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 7
        { enemies: [
            { type: 'quick', count: 18 },
            { type: 'slow', count: 6 }
        ]},
        // Wave 8
        { enemies: [
            { type: 'hidden', count: 8 },
            { type: 'normal', count: 14 },
            { type: 'slow', count: 6 }
        ]},
        // Wave 9
        { enemies: [
            { type: 'hidden', count: 12 },
            { type: 'quick', count: 12 }
        ]},
        // Wave 10
        { enemies: [
            { type: 'flying', count: 10 },
            { type: 'hidden', count: 8 },
            { type: 'normal', count: 12 }
        ]},
        // Wave 11
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'quick', count: 12 },
            { type: 'slow', count: 5 }
        ]},
        // Wave 12
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'flying', count: 10 },
            { type: 'normal', count: 12 }
        ]},
        // Wave 13
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'hidden', count: 12 },
            { type: 'quick', count: 10 }
        ]},
        // Wave 14
        { enemies: [
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'lead', count: 8 },
            { type: 'flying', count: 10 }
        ]},
        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 8 },
            { type: 'lead', count: 8 },
            { type: 'quick', count: 14, mods: ['AGRO'] }
        ]},
        // Wave 16
        { enemies: [
            { type: 'quick', count: 18, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 10 }
        ]},
        // Wave 17
        { enemies: [
            { type: 'lead', count: 10 },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'hidden', count: 10 }
        ]},
        // Wave 18
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead', count: 8 }
        ]},
        // Wave 19
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'quick', count: 16, mods: ['AGRO'] }
        ]},
        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 5 },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead', count: 10 }
        ]},
        // Wave 21
        { enemies: [
            { type: 'slow', count: 10, mods: ['REGEN'] },
            { type: 'lead_flying', count: 6 },
            { type: 'quick', count: 16 }
        ]},
        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 12, mods: ['AGRO'] },
            { type: 'lead', count: 10, mods: ['SHIELDED'] }
        ]},
        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 8 },
            { type: 'slow', count: 8, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 12 }
        ]},
        // Wave 24
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 12 },
            { type: 'quick', count: 14, mods: ['SWIFT'] }
        ]},
        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'slow', count: 10, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 10 }
        ]},
        // Wave 26
        { enemies: [
            { type: 'quick', count: 22, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 10, mods: ['REGEN'] }
        ]},
        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden', count: 14, mods: ['AGRO'] },
            { type: 'slow', count: 10, mods: ['BLOATED'] }
        ]},
        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 14, mods: ['SWIFT'] },
            { type: 'lead', count: 12, mods: ['SHIELDED', 'REGEN'] }
        ]},
        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 18, mods: ['AGRO'] }
        ]},
        // Wave 30
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 8, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 12, mods: ['AGRO'] }
        ]},
        // Wave 31
        { enemies: [
            { type: 'slow', count: 14, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'quick', count: 20, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 32
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 14, mods: ['AGRO'] },
            { type: 'lead', count: 10, mods: ['REGEN'] }
        ]},
        // Wave 33
        { enemies: [
            { type: 'slow', count: 12, mods: ['BLOATED', 'REGEN', 'SHIELDED'] },
            { type: 'quick', count: 22, mods: ['AGRO'] }
        ]},
        // Wave 34
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 12, mods: ['SWIFT', 'AGRO'] }
        ]},
        // Wave 35
        { enemies: [
            { type: 'lead', count: 16, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead_flying', count: 10, mods: ['REGEN'] },
            { type: 'quick', count: 18, mods: ['AGRO'] }
        ]},
        // Wave 36
        { enemies: [
            { type: 'hidden_flying', count: 16, mods: ['SWIFT', 'AGRO'] },
            { type: 'slow', count: 12, mods: ['BLOATED', 'SHIELDED', 'REGEN'] }
        ]},
        // Wave 37
        { enemies: [
            { type: 'lead_flying', count: 14, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead', count: 12, mods: ['REGEN', 'SHIELDED'] },
            { type: 'hidden', count: 14, mods: ['AGRO'] }
        ]},
        // Wave 38
        { enemies: [
            { type: 'quick', count: 24, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead_flying', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'SHIELDED'] }
        ]},
        // Wave 39
        { enemies: [
            { type: 'lead', count: 16, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 14, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 12, mods: ['SHIELDED'] }
        ]},
        // Wave 40 - FALLEN KING
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 8, mods: ['BLOATED'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'fallen_king', count: 1, mods: ['BLOATED', 'SHIELDED', 'REGEN'], delay: 2.0 }
        ]}
    ],

    // =====================
    // FROST  (40 waves)
    // =====================
    frost: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 12 }
        ]},
        // Wave 2
        { enemies: [
            { type: 'normal', count: 16 }
        ]},
        // Wave 3
        { enemies: [
            { type: 'normal', count: 12 },
            { type: 'quick', count: 6 }
        ]},
        // Wave 4
        { enemies: [
            { type: 'quick', count: 10 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 5
        { enemies: [
            { type: 'normal', count: 14 },
            { type: 'quick', count: 10 }
        ]},
        // Wave 6
        { enemies: [
            { type: 'slow', count: 6 },
            { type: 'normal', count: 14 },
            { type: 'quick', count: 8 }
        ]},
        // Wave 7
        { enemies: [
            { type: 'quick', count: 18, mods: ['SWIFT'] },
            { type: 'slow', count: 4 }
        ]},
        // Wave 8
        { enemies: [
            { type: 'hidden', count: 8 },
            { type: 'normal', count: 14 },
            { type: 'slow', count: 5 }
        ]},
        // Wave 9
        { enemies: [
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 12, mods: ['SWIFT'] }
        ]},
        // Wave 10
        { enemies: [
            { type: 'flying', count: 10 },
            { type: 'hidden', count: 8 },
            { type: 'normal', count: 10 }
        ]},
        // Wave 11
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'quick', count: 10, mods: ['SWIFT'] },
            { type: 'slow', count: 4 }
        ]},
        // Wave 12
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'flying', count: 10 },
            { type: 'normal', count: 12 }
        ]},
        // Wave 13
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 10, mods: ['SWIFT'] }
        ]},
        // Wave 14
        { enemies: [
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'lead', count: 6 },
            { type: 'flying', count: 10 }
        ]},
        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 8 },
            { type: 'lead', count: 8 },
            { type: 'quick', count: 14, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 16
        { enemies: [
            { type: 'quick', count: 18, mods: ['AGRO', 'SWIFT'] },
            { type: 'hidden_flying', count: 8 }
        ]},
        // Wave 17
        { enemies: [
            { type: 'lead', count: 10 },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'hidden', count: 10 }
        ]},
        // Wave 18
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead', count: 6 }
        ]},
        // Wave 19
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'quick', count: 14, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 5 },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead', count: 8 }
        ]},
        // Wave 21
        { enemies: [
            { type: 'slow', count: 10, mods: ['REGEN'] },
            { type: 'lead_flying', count: 6 },
            { type: 'quick', count: 14, mods: ['SWIFT'] }
        ]},
        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 12, mods: ['AGRO'] },
            { type: 'lead', count: 10, mods: ['SHIELDED'] }
        ]},
        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 8 },
            { type: 'slow', count: 8, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 12 }
        ]},
        // Wave 24
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 12 },
            { type: 'quick', count: 14, mods: ['SWIFT'] }
        ]},
        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'slow', count: 10, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 8 }
        ]},
        // Wave 26
        { enemies: [
            { type: 'quick', count: 22, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 8, mods: ['REGEN'] }
        ]},
        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden', count: 14, mods: ['AGRO'] },
            { type: 'slow', count: 8, mods: ['BLOATED'] }
        ]},
        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 14, mods: ['SWIFT'] },
            { type: 'lead', count: 12, mods: ['SHIELDED', 'REGEN'] }
        ]},
        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 16, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 30
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 8, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 12, mods: ['AGRO'] }
        ]},
        // Wave 31
        { enemies: [
            { type: 'slow', count: 12, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'quick', count: 20, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 32
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 12, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 10, mods: ['REGEN'] }
        ]},
        // Wave 33
        { enemies: [
            { type: 'slow', count: 12, mods: ['BLOATED', 'REGEN', 'SHIELDED'] },
            { type: 'quick', count: 20, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 34
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 12, mods: ['SWIFT', 'AGRO'] }
        ]},
        // Wave 35
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead_flying', count: 10, mods: ['REGEN'] },
            { type: 'quick', count: 16, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 36
        { enemies: [
            { type: 'hidden_flying', count: 16, mods: ['SWIFT', 'AGRO'] },
            { type: 'slow', count: 12, mods: ['BLOATED', 'SHIELDED', 'REGEN'] }
        ]},
        // Wave 37
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead', count: 12, mods: ['REGEN', 'SHIELDED'] },
            { type: 'hidden', count: 14, mods: ['AGRO', 'SWIFT'] }
        ]},
        // Wave 38
        { enemies: [
            { type: 'quick', count: 24, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead_flying', count: 10, mods: ['SHIELDED', 'REGEN'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'SHIELDED'] }
        ]},
        // Wave 39
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 14, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] }
        ]},
        // Wave 40 - FROST TITAN
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'lead_flying', count: 8, mods: ['REGEN'] },
            { type: 'hidden_flying', count: 8, mods: ['SWIFT'] },
            { type: 'frost_hero', count: 1, mods: ['SWIFT', 'SHIELDED'], delay: 2.0 }
        ]}
    ]
};
