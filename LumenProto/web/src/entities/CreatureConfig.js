export const CreatureConfig = {
    // ---- NORMAL / GROUND CREATURES ----
    "wolf": {
        folder: "wolf_frames",
        prefix: "wolf",
        scale: 0.25,
        width: 60, height: 40,
        hp: 20, damage: 10, speed: 3.5,
        attackRange: 80, attackCooldown: 1.0, attackDuration: 0.4,
        detectionRange: 400,
        movementType: "ground",
        aiProfile: "pursuit"
    },
    "lizard": {
        folder: "lizard_frames",
        prefix: "lizard",
        scale: 0.25,
        width: 70, height: 30,
        hp: 15, damage: 8, speed: 2.0,
        attackRange: 70, attackCooldown: 1.5, attackDuration: 0.5,
        detectionRange: 300,
        movementType: "ground",
        aiProfile: "deliberate"
    },
    "spider": {
        folder: "spider_frames",
        prefix: "spider",
        scale: 0.2,
        width: 50, height: 30,
        hp: 10, damage: 5, speed: 4.0,
        attackRange: 60, attackCooldown: 0.8, attackDuration: 0.3,
        detectionRange: 200, // Reduced for ambush
        movementType: "ground",
        aiProfile: "ambush"
    },
    "scorpion": {
        folder: "scorpion_frames",
        prefix: "scorpion",
        scale: 0.25,
        width: 60, height: 40,
        hp: 25, damage: 12, speed: 1.5,
        attackRange: 90, // Longer reach
        attackCooldown: 2.0, attackDuration: 0.6,
        detectionRange: 250,
        movementType: "ground",
        aiProfile: "defensive"
    },
    "crocodile": {
        folder: "crocodile_frames",
        prefix: "crocodile",
        scale: 0.35,
        width: 100, height: 40,
        hp: 50, damage: 20, speed: 1.2,
        attackRange: 90, attackCooldown: 2.5, attackDuration: 0.8,
        detectionRange: 200,
        movementType: "ground",
        aiProfile: "heavy"
    },
    "ice_wolf": {
        folder: "ice_wolf_frames",
        prefix: "ice_wolf",
        scale: 0.28,
        width: 65, height: 45,
        hp: 40, damage: 15, speed: 4.2, // Faster
        attackRange: 85, attackCooldown: 0.8, attackDuration: 0.4,
        detectionRange: 450,
        movementType: "ground",
        aiProfile: "pursuit"
    },
    // ---- FLYING CREATURES ----
    "bat": {
        folder: "bat_frames",
        prefix: "bat",
        scale: 0.2,
        width: 40, height: 40,
        hp: 10, damage: 5, speed: 3.0,
        attackRange: 60, attackCooldown: 1.0, attackDuration: 0.3,
        detectionRange: 400,
        movementType: "flying",
        aiProfile: "swoop"
    },
    "dragon": {
        folder: "dragon_frames",
        prefix: "dragon",
        scale: 0.3,
        width: 80, height: 60,
        hp: 60, damage: 25, speed: 2.5,
        attackRange: 100, attackCooldown: 2.0, attackDuration: 0.5,
        detectionRange: 500,
        movementType: "flying",
        aiProfile: "aerial_heavy"
    },
    
    // ---- GENERIC FALLBACK (Just in case) ----
    "villain": {
        folder: "villain_frames_4x4",
        prefix: "villain",
        scale: 0.3,
        width: 50, height: 100,
        hp: 30, damage: 10, speed: 2.0,
        attackRange: 70, attackCooldown: 1.5, attackDuration: 0.5,
        detectionRange: 300,
        movementType: "ground",
        aiProfile: "deliberate"
    }
};

export function getAnimMap(folder, prefix) {
    return {
        "idle": [
            `entities/${folder}/${prefix}_0_0.png`,
            `entities/${folder}/${prefix}_0_1.png`,
            `entities/${folder}/${prefix}_0_2.png`,
            `entities/${folder}/${prefix}_0_3.png`
        ],
        "run": [
            `entities/${folder}/${prefix}_1_0.png`,
            `entities/${folder}/${prefix}_1_1.png`,
            `entities/${folder}/${prefix}_1_2.png`,
            `entities/${folder}/${prefix}_1_3.png`
        ],
        "attack": [
            `entities/${folder}/${prefix}_2_0.png`,
            `entities/${folder}/${prefix}_2_1.png`,
            `entities/${folder}/${prefix}_2_2.png`,
            `entities/${folder}/${prefix}_2_3.png`
        ],
        "hurt": [
            `entities/${folder}/${prefix}_3_0.png`,
            `entities/${folder}/${prefix}_3_1.png`
        ],
        "death": [
            `entities/${folder}/${prefix}_3_1.png`,
            `entities/${folder}/${prefix}_3_2.png`,
            `entities/${folder}/${prefix}_3_3.png`
        ]
    };
}
