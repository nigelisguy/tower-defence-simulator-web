const WAVE_DATA = {
    // ============================================================
    // EASY — 20 WAVES
    // ============================================================
    easy: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 8 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'quick', count: 3 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'quick', count: 5 },
            { type: 'normal', count: 8 }
        ]},

        // Wave 4
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'slow', count: 2 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'quick', count: 7 },
            { type: 'slow', count: 3 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'normal', count: 10 },
            { type: 'quick', count: 8 },
            { type: 'slow', count: 3 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'abnormal', count: 6 },
            { type: 'quick', count: 8 },
            { type: 'slow', count: 4 }
        ]},

        // Wave 8
        { enemies: [
            { type: 'abnormal', count: 8 },
            { type: 'quick', count: 10 },
            { type: 'slow', count: 4 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'hidden', count: 5 },
            { type: 'abnormal', count: 8 },
            { type: 'quick', count: 8 }
        ]},

        // Wave 10
        { enemies: [
            { type: 'hidden', count: 7 },
            { type: 'quick', count: 10 },
            { type: 'slow', count: 5 }
        ]},

        // Wave 11
        { enemies: [
            { type: 'flying', count: 6 },
            { type: 'hidden', count: 6 },
            { type: 'abnormal', count: 8 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'flying', count: 8 },
            { type: 'quick', count: 10 },
            { type: 'lead', count: 2 }
        ]},

        // Wave 13
        { enemies: [
            { type: 'hidden', count: 8 },
            { type: 'lead', count: 4 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 14
        { enemies: [
            { type: 'flying', count: 8 },
            { type: 'lead', count: 5 },
            { type: 'slow', count: 5 }
        ]},

        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 5 },
            { type: 'lead', count: 6 },
            { type: 'quick', count: 12 }
        ]},

        // Wave 16
        { enemies: [
            { type: 'quick', count: 14, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 6 },
            { type: 'slow', count: 5, mods: ['BLOATED'] }
        ]},

        // Wave 17
        { enemies: [
            { type: 'lead', count: 7 },
            { type: 'hidden', count: 8 },
            { type: 'flying', count: 8 }
        ]},

        // Wave 18
        { enemies: [
            { type: 'hidden_flying', count: 7 },
            { type: 'lead', count: 7, mods: ['SHIELDED'] },
            { type: 'slow', count: 6 }
        ]},

        // Wave 19
        { enemies: [
            { type: 'hidden_flying', count: 8 },
            { type: 'lead', count: 8, mods: ['SHIELDED'] },
            { type: 'quick', count: 12, mods: ['AGRO'] }
        ]},

        // Wave 20 — BOSS
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'hidden_flying', count: 6 },
            { type: 'slow', count: 6 },
            { type: 'giant_boss', count: 1, mods: ['BLOATED'], delay: 2.0 }
        ]}
    ],

    // ============================================================
    // CASUAL — 25 WAVES
    // ============================================================
    casual: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 10 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'normal', count: 12 },
            { type: 'quick', count: 4 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'quick', count: 7 },
            { type: 'normal', count: 10 }
        ]},

        // Wave 4
        { enemies: [
            { type: 'slow', count: 4 },
            { type: 'normal', count: 10 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'quick', count: 10 },
            { type: 'slow', count: 4 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'abnormal', count: 8 },
            { type: 'quick', count: 10 },
            { type: 'slow', count: 4 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'abnormal', count: 10 },
            { type: 'quick', count: 12 },
            { type: 'slow', count: 5 }
        ]},

        // Wave 8
        { enemies: [
            { type: 'hidden', count: 6 },
            { type: 'abnormal', count: 10 },
            { type: 'slow', count: 5 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'hidden', count: 9 },
            { type: 'quick', count: 12 }
        ]},

        // Wave 10
        { enemies: [
            { type: 'flying', count: 7 },
            { type: 'hidden', count: 7 },
            { type: 'normal', count: 10 }
        ]},

        // Wave 11
        { enemies: [
            { type: 'flying', count: 10 },
            { type: 'quick', count: 12 },
            { type: 'slow', count: 4 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'lead', count: 4 },
            { type: 'flying', count: 8 },
            { type: 'abnormal', count: 10 }
        ]},

        // Wave 13
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 14
        { enemies: [
            { type: 'slow', count: 7, mods: ['BLOATED'] },
            { type: 'lead', count: 5 },
            { type: 'flying', count: 8 }
        ]},

        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 6 },
            { type: 'lead', count: 7 },
            { type: 'quick', count: 12 }
        ]},

        // Wave 16
        { enemies: [
            { type: 'quick', count: 15, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 7 }
        ]},

        // Wave 17
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'slow', count: 7, mods: ['BLOATED'] },
            { type: 'hidden', count: 8 }
        ]},

        // Wave 18
        { enemies: [
            { type: 'flying', count: 12 },
            { type: 'hidden_flying', count: 7 },
            { type: 'lead', count: 5 }
        ]},

        // Wave 19
        { enemies: [
            { type: 'lead', count: 8, mods: ['SHIELDED'] },
            { type: 'quick', count: 14, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 6 }
        ]},

        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 4 },
            { type: 'lead', count: 8 },
            { type: 'hidden_flying', count: 8 }
        ]},

        // Wave 21
        { enemies: [
            { type: 'slow', count: 9, mods: ['REGEN'] },
            { type: 'lead_flying', count: 5 },
            { type: 'quick', count: 14 }
        ]},

        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 9, mods: ['AGRO'] },
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
            { type: 'hidden_flying', count: 9, mods: ['AGRO'] },
            { type: 'quick', count: 14, mods: ['SWIFT'] }
        ]},

        // Wave 25 — BOSS
        { enemies: [
            { type: 'lead', count: 8, mods: ['SHIELDED'] },
            { type: 'lead_flying', count: 5 },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'giant_boss', count: 1, mods: ['BLOATED'], delay: 2.0 }
        ]}
    ],

    // ============================================================
    // INTERMEDIATE — 30 WAVES
    // ============================================================
    intermediate: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 12 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'normal', count: 14 },
            { type: 'quick', count: 4 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'quick', count: 8 },
            { type: 'normal', count: 12 }
        ]},

        // Wave 4
        { enemies: [
            { type: 'slow', count: 4 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'abnormal', count: 10 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'slow', count: 5 },
            { type: 'abnormal', count: 10 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'abnormal', count: 12 },
            { type: 'quick', count: 14 },
            { type: 'slow', count: 5 }
        ]},

        // Wave 8
        { enemies: [
            { type: 'hidden', count: 8 },
            { type: 'abnormal', count: 12 },
            { type: 'slow', count: 6 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'hidden', count: 12 },
            { type: 'quick', count: 14 }
        ]},

        // Wave 10
        { enemies: [
            { type: 'flying', count: 9 },
            { type: 'hidden', count: 8 },
            { type: 'normal', count: 12 }
        ]},

        // Wave 11
        { enemies: [
            { type: 'flying', count: 12 },
            { type: 'quick', count: 14 },
            { type: 'slow', count: 5 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'lead', count: 5 },
            { type: 'flying', count: 10 },
            { type: 'abnormal', count: 12 }
        ]},

        // Wave 13
        { enemies: [
            { type: 'lead', count: 7 },
            { type: 'hidden', count: 12 },
            { type: 'quick', count: 12 }
        ]},

        // Wave 14
        { enemies: [
            { type: 'slow', count: 7, mods: ['BLOATED'] },
            { type: 'lead', count: 6 },
            { type: 'flying', count: 10 }
        ]},

        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 7 },
            { type: 'lead', count: 8 },
            { type: 'quick', count: 14 }
        ]},

        // Wave 16
        { enemies: [
            { type: 'quick', count: 17, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 8 }
        ]},

        // Wave 17
        { enemies: [
            { type: 'lead', count: 9 },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'hidden', count: 10 }
        ]},

        // Wave 18
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'hidden_flying', count: 9 },
            { type: 'lead', count: 6 }
        ]},

        // Wave 19
        { enemies: [
            { type: 'lead', count: 9, mods: ['SHIELDED'] },
            { type: 'quick', count: 16, mods: ['AGRO'] }
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
            { type: 'quick', count: 16 }
        ]},

        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 11, mods: ['AGRO'] },
            { type: 'lead', count: 9, mods: ['SHIELDED'] }
        ]},

        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 7 },
            { type: 'slow', count: 9, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 12 }
        ]},

        // Wave 24
        { enemies: [
            { type: 'lead', count: 11, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 11 },
            { type: 'quick', count: 16, mods: ['SWIFT'] }
        ]},

        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 6, mods: ['SHIELDED'] },
            { type: 'slow', count: 9, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 9 }
        ]},

        // Wave 26
        { enemies: [
            { type: 'quick', count: 20, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 9, mods: ['REGEN'] }
        ]},

        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'hidden', count: 14, mods: ['AGRO'] },
            { type: 'slow', count: 9, mods: ['BLOATED'] }
        ]},

        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 12, mods: ['SWIFT'] },
            { type: 'lead', count: 11, mods: ['SHIELDED', 'REGEN'] }
        ]},

        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 8, mods: ['SHIELDED'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 18, mods: ['AGRO'] }
        ]},

        // Wave 30 — BOSS
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead_flying', count: 6 },
            { type: 'giant_boss', count: 1, mods: ['BLOATED', 'SHIELDED'], delay: 2.0 }
        ]}
    ],

    // ============================================================
    // MOLTEN — 40 WAVES
    // ============================================================
    molten: [
        // Wave 1
        { enemies: [
            { type: 'abnormal', count: 10 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'quick', count: 6 },
            { type: 'abnormal', count: 8 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'abnormal', count: 8 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 4
        { enemies: [
            { type: 'quick', count: 12 },
            { type: 'abnormal', count: 8 },
            { type: 'slow', count: 3 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'quick', count: 14 },
            { type: 'slow', count: 5 },
            { type: 'abnormal', count: 10 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'slow', count: 6 },
            { type: 'quick', count: 14 },
            { type: 'abnormal', count: 8 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'quick', count: 16 },
            { type: 'slow', count: 6 },
            { type: 'abnormal', count: 10 },
            { type: 'abnormal', count: 1, mods: ['BLOATED'] }
        ]},

        // Wave 8
        { enemies: [
            { type: 'hidden', count: 7 },
            { type: 'quick', count: 14 },
            { type: 'slow', count: 6 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'molten', count: 6 },
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 14 }
        ]},

        // Wave 10
        { enemies: [
            { type: 'molten', count: 8 },
            { type: 'flying', count: 10 },
            { type: 'hidden', count: 8 }
        ]},

        // Wave 11
        { enemies: [
            { type: 'molten', count: 10 },
            { type: 'flying', count: 12 },
            { type: 'quick', count: 12 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'lead', count: 5 },
            { type: 'molten', count: 10 },
            { type: 'flying', count: 10 }
        ]},

        // Wave 13
        { enemies: [
            { type: 'lead', count: 7 },
            { type: 'hidden', count: 12 },
            { type: 'quick', count: 14 }
        ]},

        // Wave 14
        { enemies: [
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'lead', count: 7 },
            { type: 'molten', count: 8 }
        ]},

        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 8 },
            { type: 'lead', count: 8 },
            { type: 'quick', count: 16 }
        ]},

        // Wave 16
        { enemies: [
            { type: 'quick', count: 18, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 8 },
            { type: 'molten', count: 6 }
        ]},

        // Wave 17
        { enemies: [
            { type: 'lead', count: 10 },
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'hidden', count: 10 }
        ]},

        // Wave 18
        { enemies: [
            { type: 'flying', count: 15 },
            { type: 'hidden_flying', count: 9 },
            { type: 'lead', count: 7 }
        ]},

        // Wave 19
        { enemies: [
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'quick', count: 16, mods: ['AGRO'] },
            { type: 'molten', count: 8 }
        ]},

        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 5 },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead', count: 9 }
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
            { type: 'lead', count: 10, mods: ['SHIELDED'] },
            { type: 'molten', count: 8 }
        ]},

        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 7 },
            { type: 'slow', count: 9, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 12 }
        ]},

        // Wave 24
        { enemies: [
            { type: 'lead', count: 11, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 12 },
            { type: 'quick', count: 16, mods: ['SWIFT'] }
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
            { type: 'lead', count: 9, mods: ['REGEN'] }
        ]},

        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 9, mods: ['SHIELDED'] },
            { type: 'hidden', count: 15, mods: ['AGRO'] },
            { type: 'slow', count: 10, mods: ['BLOATED'] }
        ]},

        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 13, mods: ['SWIFT'] },
            { type: 'lead', count: 12, mods: ['SHIELDED', 'REGEN'] }
        ]},

        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'slow', count: 11, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 20, mods: ['AGRO'] }
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
            { type: 'quick', count: 22, mods: ['AGRO', 'SWIFT'] },
            { type: 'molten', count: 8 }
        ]},

        // Wave 32
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 14, mods: ['AGRO'] },
            { type: 'lead', count: 10, mods: ['REGEN'] }
        ]},

        // Wave 33
        { enemies: [
            { type: 'slow', count: 13, mods: ['BLOATED', 'REGEN', 'SHIELDED'] },
            { type: 'quick', count: 24, mods: ['AGRO'] }
        ]},

        // Wave 34
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 13, mods: ['SWIFT', 'AGRO'] },
            { type: 'molten', count: 10 }
        ]},

        // Wave 35
        { enemies: [
            { type: 'lead', count: 16, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead_flying', count: 10, mods: ['REGEN'] },
            { type: 'quick', count: 20, mods: ['AGRO'] }
        ]},

        // Wave 36
        { enemies: [
            { type: 'hidden_flying', count: 16, mods: ['SWIFT', 'AGRO'] },
            { type: 'slow', count: 13, mods: ['BLOATED', 'SHIELDED', 'REGEN'] }
        ]},

        // Wave 37
        { enemies: [
            { type: 'lead_flying', count: 14, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead', count: 13, mods: ['REGEN', 'SHIELDED'] },
            { type: 'hidden', count: 15, mods: ['AGRO'] }
        ]},

        // Wave 38
        { enemies: [
            { type: 'quick', count: 26, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead_flying', count: 12, mods: ['SHIELDED', 'REGEN'] },
            { type: 'slow', count: 10, mods: ['BLOATED', 'SHIELDED'] }
        ]},

        // Wave 39
        { enemies: [
            { type: 'lead', count: 16, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 15, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 12, mods: ['SHIELDED'] }
        ]},

        // Wave 40 — MOLTEN BOSS
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'lead_flying', count: 8, mods: ['REGEN'] },
            { type: 'slow', count: 10, mods: ['BLOATED'] },
            { type: 'molten_boss', count: 1, mods: ['AGRO', 'SHIELDED'], delay: 2.0 }
        ]}
    ],

    // ============================================================
    // FALLEN — 40 WAVES
    // ============================================================
    fallen: [
        // Wave 1
        { enemies: [
            { type: 'abnormal', count: 12 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'abnormal', count: 14 },
            { type: 'quick', count: 5 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'abnormal', count: 10 },
            { type: 'quick', count: 8 }
        ]},

        // Wave 4
        { enemies: [
            { type: 'quick', count: 12 },
            { type: 'abnormal', count: 10 },
            { type: 'slow', count: 4 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'quick', count: 14 },
            { type: 'slow', count: 5 },
            { type: 'abnormal', count: 10 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'slow', count: 7 },
            { type: 'quick', count: 16 },
            { type: 'abnormal', count: 10 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'quick', count: 18 },
            { type: 'slow', count: 7 },
            { type: 'abnormal', count: 12 }
        ]},

        // Wave 8
        { enemies: [
            { type: 'hidden', count: 8 },
            { type: 'quick', count: 16 },
            { type: 'slow', count: 7 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'hidden', count: 12 },
            { type: 'quick', count: 16 },
            { type: 'abnormal', count: 8 }
        ]},

        // Wave 10
        { enemies: [
            { type: 'flying', count: 10 },
            { type: 'hidden', count: 10 },
            { type: 'slow', count: 6 }
        ]},

        // Wave 11
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'quick', count: 16 },
            { type: 'slow', count: 6 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'flying', count: 12 },
            { type: 'abnormal', count: 12 }
        ]},

        // Wave 13
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'hidden', count: 14 },
            { type: 'quick', count: 14 }
        ]},

        // Wave 14
        { enemies: [
            { type: 'slow', count: 8, mods: ['BLOATED'] },
            { type: 'lead', count: 8 },
            { type: 'flying', count: 12 }
        ]},

        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 9 },
            { type: 'lead', count: 9 },
            { type: 'quick', count: 16, mods: ['AGRO'] }
        ]},

        // Wave 16
        { enemies: [
            { type: 'quick', count: 20, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 10 }
        ]},

        // Wave 17
        { enemies: [
            { type: 'lead', count: 11 },
            { type: 'slow', count: 9, mods: ['BLOATED'] },
            { type: 'hidden', count: 12 }
        ]},

        // Wave 18
        { enemies: [
            { type: 'flying', count: 16 },
            { type: 'hidden_flying', count: 11 },
            { type: 'lead', count: 8 }
        ]},

        // Wave 19
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'quick', count: 18, mods: ['AGRO'] }
        ]},

        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 6 },
            { type: 'hidden_flying', count: 12 },
            { type: 'lead', count: 11 }
        ]},

        // Wave 21
        { enemies: [
            { type: 'slow', count: 12, mods: ['REGEN'] },
            { type: 'lead_flying', count: 7 },
            { type: 'quick', count: 18 }
        ]},

        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 14, mods: ['AGRO'] },
            { type: 'lead', count: 12, mods: ['SHIELDED'] }
        ]},

        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 9 },
            { type: 'slow', count: 10, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 14 }
        ]},

        // Wave 24
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 14 },
            { type: 'quick', count: 18, mods: ['SWIFT'] }
        ]},

        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 9, mods: ['SHIELDED'] },
            { type: 'slow', count: 12, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 11 }
        ]},

        // Wave 26
        { enemies: [
            { type: 'quick', count: 24, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 11, mods: ['REGEN'] }
        ]},

        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 11, mods: ['SHIELDED'] },
            { type: 'hidden', count: 16, mods: ['AGRO'] },
            { type: 'slow', count: 11, mods: ['BLOATED'] }
        ]},

        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 16, mods: ['SWIFT'] },
            { type: 'lead', count: 14, mods: ['SHIELDED', 'REGEN'] }
        ]},

        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED'] },
            { type: 'slow', count: 12, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 20, mods: ['AGRO'] }
        ]},

        // Wave 30
        { enemies: [
            { type: 'lead', count: 16, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 9, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 14, mods: ['AGRO'] }
        ]},

        // Wave 31
        { enemies: [
            { type: 'slow', count: 15, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'quick', count: 24, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 32
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 16, mods: ['AGRO'] },
            { type: 'lead', count: 12, mods: ['REGEN'] }
        ]},

        // Wave 33
        { enemies: [
            { type: 'slow', count: 14, mods: ['BLOATED', 'REGEN', 'SHIELDED'] },
            { type: 'quick', count: 26, mods: ['AGRO'] }
        ]},

        // Wave 34
        { enemies: [
            { type: 'lead_flying', count: 14, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 14, mods: ['SWIFT', 'AGRO'] }
        ]},

        // Wave 35
        { enemies: [
            { type: 'lead', count: 18, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead_flying', count: 11, mods: ['REGEN'] },
            { type: 'quick', count: 20, mods: ['AGRO'] }
        ]},

        // Wave 36
        { enemies: [
            { type: 'hidden_flying', count: 18, mods: ['SWIFT', 'AGRO'] },
            { type: 'slow', count: 14, mods: ['BLOATED', 'SHIELDED', 'REGEN'] }
        ]},

        // Wave 37
        { enemies: [
            { type: 'lead_flying', count: 16, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead', count: 14, mods: ['REGEN', 'SHIELDED'] },
            { type: 'hidden', count: 16, mods: ['AGRO'] }
        ]},

        // Wave 38
        { enemies: [
            { type: 'quick', count: 28, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead_flying', count: 14, mods: ['SHIELDED', 'REGEN'] },
            { type: 'slow', count: 12, mods: ['BLOATED', 'SHIELDED'] }
        ]},

        // Wave 39
        { enemies: [
            { type: 'lead', count: 18, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 16, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 14, mods: ['SHIELDED'] }
        ]},

        // Wave 40 — FALLEN KING
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 9, mods: ['BLOATED'] },
            { type: 'slow', count: 12, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'fallen_king', count: 1, mods: ['BLOATED', 'SHIELDED', 'REGEN'], delay: 2.0 }
        ]}
    ],

    // ============================================================
    // FROST — 40 WAVES
    // ============================================================
    frost: [
        // Wave 1
        { enemies: [
            { type: 'frostnormal', count: 12 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'frostnormal', count: 14 },
            { type: 'frostrunner', count: 5 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'frostrunner', count: 8 },
            { type: 'frostnormal', count: 12 }
        ]},

        // Wave 4
        { enemies: [
            { type: 'frostnormal', count: 12 },
            { type: 'frostrunner', count: 10 },
            { type: 'snowman', count: 3 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'frostrunner', count: 14 },
            { type: 'snowman', count: 5 },
            { type: 'frostnormal', count: 10 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'snowman', count: 6 },
            { type: 'frostrunner', count: 16 },
            { type: 'frostnormal', count: 10 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'frostrunner', count: 18, mods: ['SWIFT'] },
            { type: 'snowman', count: 6 }
        ]},

        // Wave 8
        { enemies: [
            { type: 'hidden', count: 8 },
            { type: 'frostnormal', count: 14 },
            { type: 'snowman', count: 7 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'hidden', count: 11 },
            { type: 'frostrunner', count: 16, mods: ['SWIFT'] }
        ]},

        // Wave 10
        { enemies: [
            { type: 'flying', count: 10 },
            { type: 'hidden', count: 9 },
            { type: 'frostnormal', count: 12 }
        ]},

        // Wave 11
        { enemies: [
            { type: 'flying', count: 14 },
            { type: 'frostrunner', count: 14, mods: ['SWIFT'] },
            { type: 'snowman', count: 5 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'lead', count: 6 },
            { type: 'flying', count: 11 },
            { type: 'frostnormal', count: 12 }
        ]},

        // Wave 13
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'hidden', count: 12 },
            { type: 'frostrunner', count: 14, mods: ['SWIFT'] }
        ]},

        // Wave 14
        { enemies: [
            { type: 'snowman', count: 8, mods: ['BLOATED'] },
            { type: 'lead', count: 7 },
            { type: 'flying', count: 12 }
        ]},

        // Wave 15
        { enemies: [
            { type: 'hidden_flying', count: 9 },
            { type: 'lead', count: 9 },
            { type: 'frostrunner', count: 16, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 16
        { enemies: [
            { type: 'frostrunner', count: 20, mods: ['AGRO', 'SWIFT'] },
            { type: 'hidden_flying', count: 9 }
        ]},

        // Wave 17
        { enemies: [
            { type: 'lead', count: 11 },
            { type: 'snowman', count: 9, mods: ['BLOATED'] },
            { type: 'hidden', count: 12 }
        ]},

        // Wave 18
        { enemies: [
            { type: 'flying', count: 16 },
            { type: 'hidden_flying', count: 11 },
            { type: 'lead', count: 7 }
        ]},

        // Wave 19
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'frostrunner', count: 18, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 6 },
            { type: 'hidden_flying', count: 12 },
            { type: 'lead', count: 9 }
        ]},

        // Wave 21
        { enemies: [
            { type: 'snowman', count: 12, mods: ['REGEN'] },
            { type: 'lead_flying', count: 7 },
            { type: 'frostrunner', count: 18, mods: ['SWIFT'] }
        ]},

        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 14, mods: ['AGRO'] },
            { type: 'lead', count: 12, mods: ['SHIELDED'] }
        ]},

        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 9 },
            { type: 'snowman', count: 10, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 14 }
        ]},

        // Wave 24
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 14 },
            { type: 'frostrunner', count: 18, mods: ['SWIFT'] }
        ]},

        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 9, mods: ['SHIELDED'] },
            { type: 'snowman', count: 12, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 11 }
        ]},

        // Wave 26
        { enemies: [
            { type: 'frostrunner', count: 24, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 10, mods: ['REGEN'] }
        ]},

        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 11, mods: ['SHIELDED'] },
            { type: 'hidden', count: 16, mods: ['AGRO'] },
            { type: 'snowman', count: 10, mods: ['BLOATED'] }
        ]},

        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 16, mods: ['SWIFT'] },
            { type: 'lead', count: 14, mods: ['SHIELDED', 'REGEN'] }
        ]},

        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED'] },
            { type: 'snowman', count: 12, mods: ['BLOATED', 'REGEN'] },
            { type: 'frostrunner', count: 20, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 30
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 9, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 14, mods: ['AGRO'] }
        ]},

        // Wave 31
        { enemies: [
            { type: 'snowman', count: 15, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'frostrunner', count: 24, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 32
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 15, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 12, mods: ['REGEN'] }
        ]},

        // Wave 33
        { enemies: [
            { type: 'snowman', count: 14, mods: ['BLOATED', 'REGEN', 'SHIELDED'] },
            { type: 'frostrunner', count: 26, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 34
        { enemies: [
            { type: 'lead_flying', count: 14, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 14, mods: ['SWIFT', 'AGRO'] }
        ]},

        // Wave 35
        { enemies: [
            { type: 'lead', count: 17, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead_flying', count: 11, mods: ['REGEN'] },
            { type: 'frostrunner', count: 22, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 36
        { enemies: [
            { type: 'hidden_flying', count: 18, mods: ['SWIFT', 'AGRO'] },
            { type: 'snowman', count: 14, mods: ['BLOATED', 'SHIELDED', 'REGEN'] }
        ]},

        // Wave 37
        { enemies: [
            { type: 'lead_flying', count: 16, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead', count: 14, mods: ['REGEN', 'SHIELDED'] },
            { type: 'hidden', count: 16, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 38
        { enemies: [
            { type: 'frostrunner', count: 28, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead_flying', count: 13, mods: ['SHIELDED', 'REGEN'] },
            { type: 'snowman', count: 12, mods: ['BLOATED', 'SHIELDED'] }
        ]},

        // Wave 39
        { enemies: [
            { type: 'lead', count: 17, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 16, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 13, mods: ['SHIELDED'] }
        ]},

        // Wave 40 — FROST TITAN
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'lead_flying', count: 9, mods: ['REGEN'] },
            { type: 'hidden_flying', count: 10, mods: ['SWIFT'] },
            { type: 'frost_hero', count: 1, mods: ['SWIFT', 'SHIELDED'], delay: 2.0 }
        ]}
    ],

    // ============================================================
    // HARDCORE — 45 WAVES
    // TDS-inspired progression toward Void Reaver
    // ============================================================
    hardcore: [
        // Wave 1
        { enemies: [
            { type: 'normal', count: 8 },
            { type: 'quick', count: 4 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'quick', count: 8 },
            { type: 'normal', count: 8 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'quick', count: 10 },
            { type: 'slow', count: 3 }
        ]},

        // Wave 4
        { enemies: [
            { type: 'slow', count: 5 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'abnormal', count: 10 },
            { type: 'slow', count: 5 },
            { type: 'quick', count: 10 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'abnormal', count: 12 },
            { type: 'quick', count: 12 },
            { type: 'slow', count: 5 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'quick', count: 15 },
            { type: 'slow', count: 6 },
            { type: 'abnormal', count: 8 }
        ]},

        // Wave 8
        { enemies: [
            { type: 'slow', count: 8 },
            { type: 'hidden', count: 6 },
            { type: 'quick', count: 12 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'hidden', count: 10 },
            { type: 'quick', count: 14 },
            { type: 'slow', count: 6 }
        ]},

        // Wave 10
        { enemies: [
            { type: 'hidden', count: 12 },
            { type: 'flying', count: 8 },
            { type: 'lead', count: 3 }
        ]},

        // Wave 11
        { enemies: [
            { type: 'flying', count: 12 },
            { type: 'lead', count: 4 },
            { type: 'quick', count: 14 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'hidden_flying', count: 5 },
            { type: 'lead', count: 6 },
            { type: 'slow', count: 8 }
        ]},

        // Wave 13
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'hidden', count: 12 },
            { type: 'flying', count: 10 }
        ]},

        // Wave 14
        { enemies: [
            { type: 'lead', count: 10 },
            { type: 'hidden_flying', count: 6 },
            { type: 'slow', count: 8, mods: ['BLOATED'] }
        ]},

        // Wave 15
        { enemies: [
            { type: 'lead', count: 10 },
            { type: 'lead_flying', count: 3 },
            { type: 'hidden_flying', count: 8 }
        ]},

        // Wave 16
        { enemies: [
            { type: 'quick', count: 18, mods: ['AGRO'] },
            { type: 'lead', count: 8 },
            { type: 'hidden_flying', count: 8 }
        ]},

        // Wave 17
        { enemies: [
            { type: 'slow', count: 10, mods: ['BLOATED'] },
            { type: 'hidden', count: 12 },
            { type: 'lead', count: 10 }
        ]},

        // Wave 18
        { enemies: [
            { type: 'flying', count: 16 },
            { type: 'hidden_flying', count: 10 },
            { type: 'lead', count: 8 }
        ]},

        // Wave 19
        { enemies: [
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'quick', count: 20, mods: ['AGRO'] },
            { type: 'hidden_flying', count: 8 }
        ]},

        // Wave 20
        { enemies: [
            { type: 'lead_flying', count: 6 },
            { type: 'lead', count: 12 },
            { type: 'hidden_flying', count: 10 }
        ]},

        // Wave 21
        { enemies: [
            { type: 'slow', count: 12, mods: ['REGEN'] },
            { type: 'lead_flying', count: 7 },
            { type: 'quick', count: 20 }
        ]},

        // Wave 22
        { enemies: [
            { type: 'hidden_flying', count: 14, mods: ['AGRO'] },
            { type: 'lead', count: 12, mods: ['SHIELDED'] },
            { type: 'lead_flying', count: 4 }
        ]},

        // Wave 23
        { enemies: [
            { type: 'lead_flying', count: 8 },
            { type: 'slow', count: 12, mods: ['BLOATED', 'REGEN'] },
            { type: 'hidden', count: 14 }
        ]},

        // Wave 24
        { enemies: [
            { type: 'lead', count: 14, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 14 },
            { type: 'quick', count: 20, mods: ['SWIFT'] }
        ]},

        // Wave 25
        { enemies: [
            { type: 'lead_flying', count: 10, mods: ['SHIELDED'] },
            { type: 'slow', count: 12, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 12 }
        ]},

        // Wave 26
        { enemies: [
            { type: 'quick', count: 26, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 12, mods: ['REGEN'] }
        ]},

        // Wave 27
        { enemies: [
            { type: 'lead_flying', count: 12, mods: ['SHIELDED'] },
            { type: 'hidden', count: 18, mods: ['AGRO'] },
            { type: 'slow', count: 12, mods: ['BLOATED'] }
        ]},

        // Wave 28
        { enemies: [
            { type: 'hidden_flying', count: 18, mods: ['SWIFT'] },
            { type: 'lead', count: 15, mods: ['SHIELDED', 'REGEN'] }
        ]},

        // Wave 29
        { enemies: [
            { type: 'lead_flying', count: 13, mods: ['SHIELDED'] },
            { type: 'slow', count: 13, mods: ['BLOATED', 'REGEN'] },
            { type: 'quick', count: 24, mods: ['AGRO'] }
        ]},

        // Wave 30
        { enemies: [
            { type: 'lead', count: 18, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 10, mods: ['BLOATED'] },
            { type: 'hidden_flying', count: 15, mods: ['AGRO'] }
        ]},

        // Wave 31
        { enemies: [
            { type: 'slow', count: 16, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'quick', count: 28, mods: ['AGRO', 'SWIFT'] }
        ]},

        // Wave 32
        { enemies: [
            { type: 'lead_flying', count: 14, mods: ['SHIELDED'] },
            { type: 'hidden_flying', count: 18, mods: ['AGRO'] },
            { type: 'lead', count: 14, mods: ['REGEN'] }
        ]},

        // Wave 33
        { enemies: [
            { type: 'slow', count: 15, mods: ['BLOATED', 'REGEN', 'SHIELDED'] },
            { type: 'quick', count: 30, mods: ['AGRO'] }
        ]},

        // Wave 34
        { enemies: [
            { type: 'lead_flying', count: 16, mods: ['SHIELDED', 'REGEN'] },
            { type: 'hidden_flying', count: 16, mods: ['SWIFT', 'AGRO'] }
        ]},

        // Wave 35
        { enemies: [
            { type: 'lead', count: 20, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead_flying', count: 12, mods: ['REGEN'] },
            { type: 'quick', count: 24, mods: ['AGRO'] }
        ]},

        // Wave 36
        { enemies: [
            { type: 'hidden_flying', count: 20, mods: ['SWIFT', 'AGRO'] },
            { type: 'slow', count: 16, mods: ['BLOATED', 'SHIELDED', 'REGEN'] }
        ]},

        // Wave 37
        { enemies: [
            { type: 'lead_flying', count: 18, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'lead', count: 16, mods: ['REGEN', 'SHIELDED'] },
            { type: 'hidden', count: 18, mods: ['AGRO'] }
        ]},

        // Wave 38
        { enemies: [
            { type: 'quick', count: 32, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead_flying', count: 16, mods: ['SHIELDED', 'REGEN'] },
            { type: 'slow', count: 14, mods: ['BLOATED', 'SHIELDED'] }
        ]},

        // Wave 39
        { enemies: [
            { type: 'lead', count: 20, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 18, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 16, mods: ['SHIELDED'] }
        ]},

        // Wave 40
        { enemies: [
            { type: 'lead', count: 22, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 14, mods: ['BLOATED'] },
            { type: 'slow', count: 16, mods: ['BLOATED', 'SHIELDED'] }
        ]},

        // Wave 41
        { enemies: [
            { type: 'hidden_flying', count: 22, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead', count: 20, mods: ['SHIELDED', 'REGEN'] },
            { type: 'lead_flying', count: 16, mods: ['SHIELDED'] }
        ]},

        // Wave 42
        { enemies: [
            { type: 'lead_flying', count: 20, mods: ['SHIELDED', 'BLOATED'] },
            { type: 'hidden_flying', count: 20, mods: ['AGRO', 'SWIFT'] },
            { type: 'slow', count: 18, mods: ['BLOATED', 'REGEN', 'SHIELDED'] }
        ]},

        // Wave 43
        { enemies: [
            { type: 'quick', count: 36, mods: ['AGRO', 'SWIFT'] },
            { type: 'lead', count: 24, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'lead_flying', count: 18, mods: ['SHIELDED'] }
        ]},

        // Wave 44
        { enemies: [
            { type: 'hidden_flying', count: 24, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 20, mods: ['SHIELDED', 'REGEN'] },
            { type: 'slow', count: 20, mods: ['BLOATED', 'SHIELDED'] },
            { type: 'frost_hero', count: 1, mods: ['SHIELDED'], delay: 2.0 }
        ]},

        // Wave 45 — VOID REAVER
        { enemies: [
            { type: 'lead', count: 20, mods: ['SHIELDED', 'REGEN', 'BLOATED'] },
            { type: 'hidden_flying', count: 20, mods: ['SWIFT', 'AGRO'] },
            { type: 'lead_flying', count: 15, mods: ['SHIELDED'] },
            { type: 'giant_boss', count: 1, mods: ['BLOATED', 'SHIELDED'], delay: 3.0 }
        ]}
    ],

    // ============================================================
    // VOIDCORE — 50 WAVES
    //
    // TDS Voidcore-specific progression:
    // Odd/Swift → Hefty → Cursed Skeleton → Phantom →
    // Balloon/Lead → Elite Lead → Mystery → Blighted →
    // Mandrake → Voidling → Elite Phantom → Void Reaper →
    // Void Floater → Void Rusher → Void Pike → Void Titan →
    // Mandragora → Elite Mystery → Void Brute → Void Keeper →
    // Unknown Small → Elite Void Rusher → Slow King →
    // Speedy King → Crystalian → Soul → Elite Soul →
    // Void Trickster → Nightshade → Vindicator →
    // Void Cultist → Soul Stealer → Heavy Voidling →
    // Void Knight → Void Swordmaster → Void Guardian →
    // Void Reaver / Void Caster.
    //
    // ============================================================
    voidcore: [
        // Wave 1
        { enemies: [
            { type: 'odd', count: 5 },
            { type: 'swift', count: 5 }
        ]},

        // Wave 2
        { enemies: [
            { type: 'odd', count: 8 },
            { type: 'swift', count: 6 }
        ]},

        // Wave 3
        { enemies: [
            { type: 'swift', count: 10 },
            { type: 'odd', count: 8 },
            { type: 'normal', count: 6 }
        ]},

        // Wave 4 — Hefty
        { enemies: [
            { type: 'hefty', count: 5 },
            { type: 'swift', count: 10 },
            { type: 'odd', count: 8 }
        ]},

        // Wave 5
        { enemies: [
            { type: 'hefty', count: 7 },
            { type: 'swift', count: 12 },
            { type: 'odd', count: 10 }
        ]},

        // Wave 6
        { enemies: [
            { type: 'hefty', count: 8 },
            { type: 'swift', count: 14 },
            { type: 'odd', count: 10 }
        ]},

        // Wave 7
        { enemies: [
            { type: 'hefty', count: 10 },
            { type: 'swift', count: 16 },
            { type: 'odd', count: 12 }
        ]},

        // Wave 8 — Cursed Skeleton
        { enemies: [
            { type: 'cursed_skeleton', count: 8 },
            { type: 'hefty', count: 8 },
            { type: 'swift', count: 14 }
        ]},

        // Wave 9
        { enemies: [
            { type: 'cursed_skeleton', count: 12 },
            { type: 'swift', count: 18 },
            { type: 'hefty', count: 8 }
        ]},

        // Wave 10 — Phantom
        { enemies: [
            { type: 'phantom', count: 6 },
            { type: 'cursed_skeleton', count: 12 },
            { type: 'hefty', count: 10 }
        ]},

        // Wave 11 — Balloon
        { enemies: [
            { type: 'balloon', count: 8 },
            { type: 'phantom', count: 8 },
            { type: 'swift', count: 18 }
        ]},

        // Wave 12
        { enemies: [
            { type: 'balloon', count: 10 },
            { type: 'phantom', count: 10 },
            { type: 'hefty', count: 10 }
        ]},

        // Wave 13 — Lead
        { enemies: [
            { type: 'lead', count: 8 },
            { type: 'balloon', count: 10 },
            { type: 'phantom', count: 10 }
        ]},

        // Wave 14
        { enemies: [
            { type: 'lead', count: 10 },
            { type: 'balloon', count: 12 },
            { type: 'phantom', count: 12 }
        ]},

        // Wave 15 — Elite Lead
        { enemies: [
            { type: 'elite_lead', count: 5 },
            { type: 'lead', count: 10 },
            { type: 'phantom', count: 12 },
            { type: 'balloon', count: 8 }
        ]},

        // Wave 16 — Mystery
        { enemies: [
            { type: 'mystery', count: 8 },
            { type: 'elite_lead', count: 6 },
            { type: 'phantom', count: 14 }
        ]},

        // Wave 17
        { enemies: [
            { type: 'mystery', count: 12 },
            { type: 'lead', count: 12 },
            { type: 'balloon', count: 12 }
        ]},

        // Wave 18 — Blighted
        { enemies: [
            { type: 'blighted', count: 8 },
            { type: 'mystery', count: 10 },
            { type: 'elite_lead', count: 7 }
        ]},

        // Wave 19 — Mandrake
        { enemies: [
            { type: 'mandrake', count: 4 },
            { type: 'blighted', count: 10 },
            { type: 'phantom', count: 12 }
        ]},

        // Wave 20 — Voidling
        { enemies: [
            { type: 'voidling', count: 3 },
            { type: 'mandrake', count: 5 },
            { type: 'blighted', count: 12 },
            { type: 'elite_lead', count: 8 }
        ]},

        // Wave 21
        { enemies: [
            { type: 'voidling', count: 5 },
            { type: 'mystery', count: 14 },
            { type: 'lead', count: 12 }
        ]},

        // Wave 22 — Elite Phantom
        { enemies: [
            { type: 'elite_phantom', count: 6 },
            { type: 'voidling', count: 5 },
            { type: 'blighted', count: 14 }
        ]},

        // Wave 23 — Void Reaper
        { enemies: [
            { type: 'void_reaper', count: 3 },
            { type: 'elite_phantom', count: 7 },
            { type: 'voidling', count: 6 }
        ]},

        // Wave 24
        { enemies: [
            { type: 'void_reaper', count: 5 },
            { type: 'mandrake', count: 6 },
            { type: 'elite_phantom', count: 8 }
        ]},

        // Wave 25 — Void Floater
        { enemies: [
            { type: 'void_floater', count: 6 },
            { type: 'void_reaper', count: 6 },
            { type: 'voidling', count: 8 }
        ]},

        // Wave 26
        { enemies: [
            { type: 'void_floater', count: 8 },
            { type: 'mandragora', count: 2 },
            { type: 'blighted', count: 16 },
            { type: 'elite_phantom', count: 8 }
        ]},

        // Wave 27 — Void Rusher
        { enemies: [
            { type: 'void_rusher', count: 8 },
            { type: 'void_floater', count: 8 },
            { type: 'void_reaper', count: 6 }
        ]},

        // Wave 28 — Void Pike
        { enemies: [
            { type: 'void_pike', count: 5 },
            { type: 'void_rusher', count: 10 },
            { type: 'void_floater', count: 10 }
        ]},

        // Wave 29
        { enemies: [
            { type: 'void_pike', count: 7 },
            { type: 'void_rusher', count: 12 },
            { type: 'mandragora', count: 3 },
            { type: 'void_reaper', count: 8 }
        ]},

        // Wave 30 — Void Titan
        { enemies: [
            { type: 'void_titan', count: 1, mods: ['BLOATED'], delay: 2.0 },
            { type: 'void_pike', count: 8 },
            { type: 'void_rusher', count: 12 },
            { type: 'void_floater', count: 10 }
        ]},

        // Wave 31 — Mandragora
        { enemies: [
            { type: 'mandragora', count: 5 },
            { type: 'void_titan', count: 1 },
            { type: 'elite_phantom', count: 10 },
            { type: 'void_rusher', count: 14 }
        ]},

        // Wave 32
        { enemies: [
            { type: 'void_titan', count: 2 },
            { type: 'void_pike', count: 10 },
            { type: 'void_rusher', count: 16 },
            { type: 'blighted', count: 18 }
        ]},

        // Wave 33 — Elite Mystery
        { enemies: [
            { type: 'elite_mystery', count: 8 },
            { type: 'void_titan', count: 2 },
            { type: 'void_floater', count: 12 }
        ]},

        // Wave 34 — Void Brute
        { enemies: [
            { type: 'void_brute', count: 5 },
            { type: 'elite_mystery', count: 8 },
            { type: 'void_rusher', count: 18 }
        ]},

        // Wave 35 — Void Keeper
        { enemies: [
            { type: 'void_keeper', count: 4 },
            { type: 'void_brute', count: 6 },
            { type: 'void_titan', count: 2 },
            { type: 'mandragora', count: 4 }
        ]},

        // Wave 36 — Unknown Small
        { enemies: [
            { type: 'unknown_small', count: 10 },
            { type: 'void_keeper', count: 5 },
            { type: 'void_brute', count: 8 }
        ]},

        // Wave 37 — Elite Void Rusher
        { enemies: [
            { type: 'elite_void_rusher', count: 8 },
            { type: 'unknown_small', count: 12 },
            { type: 'void_keeper', count: 6 },
            { type: 'void_titan', count: 2 }
        ]},

        // Wave 38 — Slow King
        { enemies: [
            { type: 'slow_king', count: 5 },
            { type: 'elite_void_rusher', count: 10 },
            { type: 'void_brute', count: 10 }
        ]},

        // Wave 39 — Speedy King
        { enemies: [
            { type: 'speedy_king', count: 5 },
            { type: 'slow_king', count: 6 },
            { type: 'elite_void_rusher', count: 12 },
            { type: 'void_pike', count: 12 }
        ]},

        // Wave 40 — Crystalian
        { enemies: [
            { type: 'crystalian', count: 4 },
            { type: 'speedy_king', count: 6 },
            { type: 'slow_king', count: 6 },
            { type: 'void_titan', count: 3 }
        ]},

        // Wave 41 — Soul / Elite Soul
        { enemies: [
            { type: 'soul', count: 10 },
            { type: 'elite_soul', count: 5 },
            { type: 'crystalian', count: 5 },
            { type: 'speedy_king', count: 8 }
        ]},

        // Wave 42 — Void Trickster
        { enemies: [
            { type: 'void_trickster', count: 3 },
            { type: 'nightshade', count: 5 },
            { type: 'elite_soul', count: 7 },
            { type: 'void_keeper', count: 8 }
        ]},

        // Wave 43 — Vindicator
        { enemies: [
            { type: 'vindicator', count: 3 },
            { type: 'void_trickster', count: 4 },
            { type: 'nightshade', count: 8 },
            { type: 'elite_void_rusher', count: 12 }
        ]},

        // Wave 44 — Void Cultist
        { enemies: [
            { type: 'void_cultist', count: 3 },
            { type: 'vindicator', count: 4 },
            { type: 'void_trickster', count: 5 },
            { type: 'elite_soul', count: 8 },
            { type: 'void_titan', count: 3 }
        ]},

        // Wave 45 — Soul Stealer
        { enemies: [
            { type: 'soul_stealer', count: 2 },
            { type: 'void_cultist', count: 4 },
            { type: 'vindicator', count: 5 },
            { type: 'heavy_voidling', count: 3 }
        ]},

        // Wave 46 — Heavy Voidling
        { enemies: [
            { type: 'heavy_voidling', count: 5 },
            { type: 'soul_stealer', count: 3 },
            { type: 'void_cultist', count: 5 },
            { type: 'vindicator', count: 6 }
        ]},

        // Wave 47 — Void Knight
        { enemies: [
            { type: 'void_knight', count: 3 },
            { type: 'heavy_voidling', count: 6 },
            { type: 'soul_stealer', count: 4 },
            { type: 'vindicator', count: 7 }
        ]},

        // Wave 48 — Void Swordmaster
        { enemies: [
            { type: 'void_swordmaster', count: 3 },
            { type: 'void_knight', count: 4 },
            { type: 'heavy_voidling', count: 8 },
            { type: 'void_cultist', count: 6 },
            { type: 'vindicator', count: 8 }
        ]},

        // Wave 49 — Void Guardian
        { enemies: [
            { type: 'void_guardian', count: 2, mods: ['SHIELDED'], delay: 2.0 },
            { type: 'void_swordmaster', count: 4 },
            { type: 'void_knight', count: 5 },
            { type: 'heavy_voidling', count: 10 },
            { type: 'soul_stealer', count: 5 },
            { type: 'vindicator', count: 8 }
        ]},

        // ========================================================
        // Wave 50 — FINAL BOSS
        // ========================================================
        { enemies: [
            { type: 'void_knight', count: 5 },
            { type: 'void_swordmaster', count: 4 },
            { type: 'void_guardian', count: 2, mods: ['SHIELDED'], delay: 3.0 },
            { type: 'heavy_voidling', count: 8 },
            { type: 'vindicator', count: 6 },
            { type: 'soul_stealer', count: 4 },
            { type: 'void_reaver', count: 1, mods: ['SHIELDED'], delay: 5.0 }
        ]}
    ]
};
