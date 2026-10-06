import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import configurations
const SRC_DIR = path.join(__dirname, '..', 'web', 'src');

const CreatureConfig = {
    "wolf": { width: 60, movementType: "ground" },
    "lizard": { width: 70, movementType: "ground" },
    "spider": { width: 50, movementType: "ground" },
    "scorpion": { width: 60, movementType: "ground" },
    "crocodile": { width: 100, movementType: "ground" },
    "ice_wolf": { width: 65, movementType: "ground" },
    "bat": { width: 40, movementType: "flying" },
    "dragon": { width: 80, movementType: "flying" }
};

const BiomeDefinitions = {
    dark: {
        platforms: [
            { x: 500, y: 500, w: 2000, h: 40 }, { x: 1800, y: 500, w: 400, h: 40 }, { x: 2200, y: 450, w: 200, h: 20 },
            { x: 2450, y: 400, w: 200, h: 20 }, { x: 2900, y: 400, w: 600, h: 40 }, { x: 3400, y: 500, w: 200, h: 20 },
            { x: 3800, y: 500, w: 500, h: 40 }, { x: 4500, y: 500, w: 700, h: 40 }, { x: 5000, y: 350, w: 200, h: 20 },
            { x: 5300, y: 300, w: 200, h: 20 }, { x: 5000, y: 600, w: 400, h: 40 }, { x: 5500, y: 500, w: 400, h: 40 },
            { x: 5900, y: 500, w: 200, h: 20 }, { x: 6500, y: 500, w: 800, h: 40 }, { x: 7100, y: 400, w: 200, h: 20 },
            { x: 8400, y: 500, w: 2000, h: 40 }
        ],
        enemies: [
            { x: 1800, y: 400, type: "wolf" }, { x: 2800, y: 300, type: "spider" }, { x: 3100, y: 300, type: "wolf" },
            { x: 3800, y: 300, type: "bat" }, { x: 4300, y: 400, type: "scorpion" }, { x: 4600, y: 400, type: "spider" },
            { x: 4700, y: 400, type: "wolf" }, { x: 5000, y: 500, type: "scorpion" }, { x: 5300, y: 200, type: "bat" },
            { x: 6300, y: 400, type: "wolf" }, { x: 6500, y: 400, type: "spider" }, { x: 6600, y: 300, type: "bat" },
            { x: 6800, y: 400, type: "scorpion" }, { x: 7100, y: 300, type: "bat" }
        ]
    },
    ice: {
        platforms: [
            { x: 500, y: 500, w: 2000, h: 40 }, { x: 1800, y: 500, w: 400, h: 40 }, { x: 2400, y: 500, w: 600, h: 40 },
            { x: 2900, y: 400, w: 200, h: 20 }, { x: 3150, y: 300, w: 200, h: 20 }, { x: 3500, y: 500, w: 200, h: 40 },
            { x: 3900, y: 600, w: 400, h: 40 }, { x: 4400, y: 500, w: 400, h: 40 }, { x: 4900, y: 500, w: 400, h: 40 },
            { x: 5500, y: 500, w: 600, h: 40 }, { x: 6100, y: 400, w: 200, h: 20 }, { x: 6350, y: 320, w: 200, h: 20 },
            { x: 6700, y: 500, w: 200, h: 40 }, { x: 7200, y: 500, w: 600, h: 40 }, { x: 8600, y: 600, w: 2000, h: 40 }
        ],
        enemies: [
            { x: 1800, y: 400, type: "wolf" }, { x: 2500, y: 400, type: "ice_wolf" }, { x: 3900, y: 500, type: "ice_wolf" },
            { x: 3900, y: 400, type: "bat" }, { x: 4400, y: 400, type: "ice_wolf" }, { x: 4900, y: 400, type: "bat" },
            { x: 5400, y: 400, type: "ice_wolf" }, { x: 5600, y: 400, type: "wolf" }, { x: 5500, y: 300, type: "bat" },
            { x: 6350, y: 200, type: "bat" }, { x: 7100, y: 400, type: "ice_wolf" }, { x: 7300, y: 400, type: "wolf" },
            { x: 7200, y: 300, type: "bat" }, { x: 7400, y: 400, type: "ice_wolf" }
        ]
    },
    jungle: {
        platforms: [
            { x: 500, y: 500, w: 2000, h: 40 }, { x: 1800, y: 500, w: 400, h: 40 }, { x: 2200, y: 400, w: 200, h: 20 },
            { x: 2400, y: 320, w: 350, h: 20 }, { x: 2600, y: 240, w: 200, h: 20 }, { x: 2900, y: 350, w: 200, h: 20 },
            { x: 3600, y: 600, w: 600, h: 40 }, { x: 4200, y: 500, w: 400, h: 40 }, { x: 4800, y: 400, w: 600, h: 40 },
            { x: 5400, y: 300, w: 350, h: 20 }, { x: 5700, y: 200, w: 200, h: 20 }, { x: 6000, y: 500, w: 400, h: 40 },
            { x: 6500, y: 400, w: 200, h: 40 }, { x: 7000, y: 400, w: 800, h: 40 }, { x: 8600, y: 300, w: 2000, h: 40 }
        ],
        enemies: [
            { x: 1800, y: 400, type: "lizard" }, { x: 2400, y: 200, type: "spider" }, { x: 2600, y: 100, type: "bat" },
            { x: 3500, y: 500, type: "crocodile" }, { x: 3700, y: 500, type: "crocodile" }, { x: 4200, y: 400, type: "lizard" },
            { x: 4800, y: 200, type: "dragon" }, { x: 4700, y: 300, type: "bat" }, { x: 5400, y: 200, type: "spider" },
            { x: 5700, y: 100, type: "bat" }, { x: 6000, y: 400, type: "crocodile" }, { x: 6800, y: 300, type: "lizard" },
            { x: 7000, y: 300, type: "spider" }, { x: 7200, y: 200, type: "dragon" }
        ]
    }
};

let fails = 0;
for (const [biomeName, biome] of Object.entries(BiomeDefinitions)) {
    console.log(`\nVerifying Biome: ${biomeName}`);
    for (const enemy of biome.enemies) {
        const config = CreatureConfig[enemy.type];
        if (config.movementType === 'flying') {
            console.log(`  [FLYING] ${enemy.type} at ${enemy.x} -> No bounds needed.`);
            continue;
        }

        const margin = (config.width / 2) + 80;
        
        // Find platform
        let foundPlatform = null;
        for (const p of biome.platforms) {
            const minX = p.x - (p.w / 2);
            const maxX = p.x + (p.w / 2);
            const minY = p.y - (p.h / 2);
            if (enemy.x >= minX - 10 && enemy.x <= maxX + 10) {
                if (enemy.y <= minY && enemy.y >= minY - 400) {
                    foundPlatform = { ...p, minX, maxX, minY };
                    break;
                }
            }
        }
        
        if (foundPlatform) {
            const minAllowed = foundPlatform.minX + margin;
            const maxAllowed = foundPlatform.maxX - margin;
            if (minAllowed > maxAllowed) {
                console.log(`  [FAIL] ${enemy.type} at ${enemy.x} on platform (w:${foundPlatform.w}). Platform is too narrow for margin ${margin}!`);
                fails++;
            } else {
                console.log(`  [PASS] ${enemy.type} at ${enemy.x} on platform (w:${foundPlatform.w}). Margin ${margin} -> Safe zone width: ${maxAllowed - minAllowed}`);
            }
        } else {
            console.log(`  [FAIL] ${enemy.type} at ${enemy.x} -> Could not find platform below it!`);
            fails++;
        }
    }
}
if (fails === 0) {
    console.log('\nSUCCESS! All grounded enemies have mathematically verified safe landing zones.');
} else {
    process.exit(1);
}
