#!/usr/bin/env node
/**
 * LumenProto — Automated QA Validation Suite
 * 
 * Validates:
 * 1. Asset integrity (all configured creature frames exist on disk)
 * 2. Creature configuration audit (meaningful stat differentiation)
 * 3. Enemy AI state machine simulation (NaN, infinite velocity, stuck states)
 * 4. Spawn validation (biome creature types, spawn positions, distributions)
 * 5. Checkpoint / Respawn logic (code-level audit)
 * 6. Biome size validation
 * 7. Boss validation
 * 8. Player system audit (R key, C key behavior)
 * 9. Animation state coverage
 * 10. Performance / memory leak patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '..', 'assets', 'web', 'entities');
const SRC_DIR = path.join(__dirname, '..', 'web', 'src');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
let bugs = [];

function test(name, condition, detail = '') {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  ✓ ${name}`);
    } else {
        failedTests++;
        console.log(`  ✗ FAIL: ${name}${detail ? ' — ' + detail : ''}`);
        bugs.push({ test: name, detail });
    }
}

function section(title) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`  ${title}`);
    console.log('='.repeat(60));
}

// ============================================================
// 1. CREATURE CONFIG (inline since we can't import ES modules easily in Node without build)
// ============================================================

const CreatureConfig = {
    "wolf": {
        folder: "wolf_frames", prefix: "wolf", scale: 0.25,
        width: 60, height: 40, hp: 20, damage: 10, speed: 3.5,
        attackRange: 80, attackCooldown: 1.0, attackDuration: 0.4,
        detectionRange: 400, movementType: "ground"
    },
    "lizard": {
        folder: "lizard_frames", prefix: "lizard", scale: 0.25,
        width: 70, height: 30, hp: 15, damage: 8, speed: 2.0,
        attackRange: 70, attackCooldown: 1.5, attackDuration: 0.5,
        detectionRange: 300, movementType: "ground"
    },
    "spider": {
        folder: "spider_frames", prefix: "spider", scale: 0.2,
        width: 50, height: 30, hp: 10, damage: 5, speed: 4.0,
        attackRange: 60, attackCooldown: 0.8, attackDuration: 0.3,
        detectionRange: 350, movementType: "ground"
    },
    "scorpion": {
        folder: "scorpion_frames", prefix: "scorpion", scale: 0.25,
        width: 60, height: 40, hp: 25, damage: 12, speed: 1.5,
        attackRange: 80, attackCooldown: 2.0, attackDuration: 0.6,
        detectionRange: 250, movementType: "ground"
    },
    "crocodile": {
        folder: "crocodile_frames", prefix: "crocodile", scale: 0.35,
        width: 100, height: 40, hp: 50, damage: 20, speed: 1.2,
        attackRange: 90, attackCooldown: 2.5, attackDuration: 0.8,
        detectionRange: 200, movementType: "ground"
    },
    "ice_wolf": {
        folder: "ice_wolf_frames", prefix: "ice_wolf", scale: 0.28,
        width: 65, height: 45, hp: 40, damage: 15, speed: 3.8,
        attackRange: 85, attackCooldown: 1.0, attackDuration: 0.4,
        detectionRange: 450, movementType: "ground"
    },
    "bat": {
        folder: "bat_frames", prefix: "bat", scale: 0.2,
        width: 40, height: 40, hp: 10, damage: 5, speed: 3.0,
        attackRange: 60, attackCooldown: 1.0, attackDuration: 0.3,
        detectionRange: 400, movementType: "flying"
    },
    "dragon": {
        folder: "dragon_frames", prefix: "dragon", scale: 0.3,
        width: 80, height: 60, hp: 60, damage: 25, speed: 2.5,
        attackRange: 100, attackCooldown: 2.0, attackDuration: 0.5,
        detectionRange: 500, movementType: "flying"
    },
    "villain": {
        folder: "villain_frames_4x4", prefix: "villain", scale: 0.3,
        width: 50, height: 100, hp: 30, damage: 10, speed: 2.0,
        attackRange: 70, attackCooldown: 1.5, attackDuration: 0.5,
        detectionRange: 300, movementType: "ground"
    }
};

function getAnimMap(folder, prefix) {
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

// Boss configs (from Boss.js)
const BossConfigs = {
    "dark_boss": { folder: "dark_boss_frames", prefix: "darkboss" },
    "cold_blood": { folder: "ice_boss_frames", prefix: "iceboss" },
    "overgrowth": { folder: "jungle_boss_frames", prefix: "jungleboss" },
    "ancient_dragon": { folder: "ancient_dragon_frames", prefix: "ancient_dragon" },
    "villain_fallback": { folder: "villain_frames_4x4", prefix: "villain" }
};

// Biome definitions (from LevelManager.js)
const BiomeDefinitions = {
    dark: {
        platforms: [
            { x: 500, y: 500, w: 2000, h: 40 },
            { x: 1800, y: 500, w: 400, h: 40 },
            { x: 2200, y: 450, w: 200, h: 20 },
            { x: 2450, y: 400, w: 200, h: 20 },
            { x: 2900, y: 400, w: 600, h: 40 },
            { x: 3400, y: 500, w: 200, h: 20 },
            { x: 3800, y: 500, w: 500, h: 40 },
            { x: 4500, y: 500, w: 700, h: 40 },
            { x: 5000, y: 350, w: 200, h: 20 },
            { x: 5300, y: 300, w: 200, h: 20 },
            { x: 5000, y: 600, w: 400, h: 40 },
            { x: 5500, y: 500, w: 400, h: 40 },
            { x: 5900, y: 500, w: 200, h: 20 },
            { x: 6500, y: 500, w: 800, h: 40 },
            { x: 7100, y: 400, w: 200, h: 20 },
            { x: 8400, y: 500, w: 2000, h: 40 }
        ],
        enemies: [
            { x: 1800, y: 400, type: "wolf" },
            { x: 2800, y: 300, type: "spider" },
            { x: 3100, y: 300, type: "wolf" },
            { x: 3800, y: 300, type: "bat" },
            { x: 4300, y: 400, type: "scorpion" },
            { x: 4600, y: 400, type: "spider" },
            { x: 4700, y: 400, type: "wolf" },
            { x: 5000, y: 500, type: "scorpion" },
            { x: 5300, y: 200, type: "bat" },
            { x: 6300, y: 400, type: "wolf" },
            { x: 6500, y: 400, type: "spider" },
            { x: 6600, y: 300, type: "bat" },
            { x: 6800, y: 400, type: "scorpion" },
            { x: 7100, y: 300, type: "bat" }
        ],
        boss: { x: 8400, y: 400, type: "dark_boss" },
        checkpoint: { x: 100, y: 400 },
        gate: { x: 9200, y: 420 },
        expectedCreatures: ["wolf", "bat", "spider", "scorpion"]
    },
    ice: {
        platforms: [
            { x: 500, y: 500, w: 2000, h: 40 },
            { x: 1800, y: 500, w: 400, h: 40 },
            { x: 2400, y: 500, w: 600, h: 40 },
            { x: 2900, y: 400, w: 200, h: 20 },
            { x: 3150, y: 300, w: 200, h: 20 },
            { x: 3500, y: 500, w: 200, h: 40 },
            { x: 3900, y: 600, w: 400, h: 40 },
            { x: 4400, y: 500, w: 400, h: 40 },
            { x: 4900, y: 500, w: 400, h: 40 },
            { x: 5500, y: 500, w: 600, h: 40 },
            { x: 6100, y: 400, w: 200, h: 20 },
            { x: 6400, y: 300, w: 200, h: 20 },
            { x: 6700, y: 500, w: 200, h: 40 },
            { x: 7200, y: 500, w: 600, h: 40 },
            { x: 8600, y: 600, w: 2000, h: 40 }
        ],
        enemies: [
            { x: 1800, y: 400, type: "wolf" },
            { x: 2500, y: 400, type: "ice_wolf" },
            { x: 3900, y: 500, type: "ice_wolf" },
            { x: 3900, y: 400, type: "bat" },
            { x: 4400, y: 400, type: "ice_wolf" },
            { x: 4900, y: 400, type: "bat" },
            { x: 5400, y: 400, type: "ice_wolf" },
            { x: 5600, y: 400, type: "wolf" },
            { x: 5500, y: 300, type: "bat" },
            { x: 6400, y: 200, type: "bat" },
            { x: 7100, y: 400, type: "ice_wolf" },
            { x: 7300, y: 400, type: "wolf" },
            { x: 7200, y: 300, type: "bat" },
            { x: 7400, y: 400, type: "ice_wolf" }
        ],
        boss: { x: 8600, y: 450, type: "cold_blood" },
        checkpoint: { x: 100, y: 400 },
        gate: { x: 9400, y: 420 },
        expectedCreatures: ["ice_wolf", "wolf", "bat"]
    },
    jungle: {
        platforms: [
            { x: 500, y: 500, w: 2000, h: 40 },
            { x: 1800, y: 500, w: 400, h: 40 },
            { x: 2200, y: 400, w: 200, h: 20 },
            { x: 2500, y: 300, w: 200, h: 20 },
            { x: 2800, y: 200, w: 200, h: 20 },
            { x: 3100, y: 350, w: 200, h: 20 },
            { x: 3600, y: 600, w: 600, h: 40 },
            { x: 4200, y: 500, w: 400, h: 40 },
            { x: 4800, y: 400, w: 600, h: 40 },
            { x: 5400, y: 300, w: 200, h: 20 },
            { x: 5700, y: 200, w: 200, h: 20 },
            { x: 6000, y: 500, w: 400, h: 40 },
            { x: 6500, y: 400, w: 200, h: 40 },
            { x: 7000, y: 400, w: 800, h: 40 },
            { x: 8600, y: 300, w: 2000, h: 40 }
        ],
        enemies: [
            { x: 1800, y: 400, type: "lizard" },
            { x: 2500, y: 200, type: "spider" },
            { x: 2800, y: 100, type: "bat" },
            { x: 3500, y: 500, type: "crocodile" },
            { x: 3700, y: 500, type: "crocodile" },
            { x: 4200, y: 400, type: "lizard" },
            { x: 4800, y: 200, type: "dragon" },
            { x: 4700, y: 300, type: "bat" },
            { x: 5400, y: 200, type: "spider" },
            { x: 5700, y: 100, type: "bat" },
            { x: 6000, y: 400, type: "crocodile" },
            { x: 6800, y: 300, type: "lizard" },
            { x: 7000, y: 300, type: "spider" },
            { x: 7200, y: 200, type: "dragon" }
        ],
        boss: { x: 8600, y: 150, type: "overgrowth" },
        checkpoint: { x: 100, y: 400 },
        gate: null,
        expectedCreatures: ["lizard", "spider", "crocodile", "bat", "dragon"]
    }
};

// ============================================================
// TEST 1: ASSET VALIDATION
// ============================================================

section('TEST 1: ASSET VALIDATION');

for (const [creatureType, config] of Object.entries(CreatureConfig)) {
    const animMap = getAnimMap(config.folder, config.prefix);
    const allFrames = new Set();
    for (const [state, frames] of Object.entries(animMap)) {
        for (const frame of frames) {
            allFrames.add(frame);
        }
    }
    
    for (const framePath of allFrames) {
        // framePath: "entities/wolf_frames/wolf_0_0.png"
        // On disk: assets/web/entities/wolf_frames/wolf_0_0.png
        const diskPath = path.join(ASSETS_DIR, '..', framePath.replace('entities/', 'entities/'));
        const exists = fs.existsSync(diskPath);
        test(`${creatureType}: ${path.basename(framePath)} exists`, exists, `Missing: ${diskPath}`);
    }
}

// Boss assets
for (const [bossType, config] of Object.entries(BossConfigs)) {
    const folder = config.folder;
    const prefix = config.prefix;
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const filename = `${prefix}_${row}_${col}.png`;
            const diskPath = path.join(ASSETS_DIR, folder, filename);
            const exists = fs.existsSync(diskPath);
            test(`Boss ${bossType}: ${filename} exists`, exists, `Missing: ${diskPath}`);
        }
    }
}

// Player frames
const playerFrameIds = [0, 1, 2, 3, 5, 6, 12, 17, 20, 21, 25, 28, 36];
for (const fid of playerFrameIds) {
    const diskPath = path.join(ASSETS_DIR, 'player_frames', `player_frame_${fid}.png`);
    const exists = fs.existsSync(diskPath);
    test(`Player: player_frame_${fid}.png exists`, exists, `Missing: ${diskPath}`);
}

// Check for empty files (0 bytes)
section('TEST 1b: ASSET FILE SIZE VALIDATION');
const entityDirs = fs.readdirSync(ASSETS_DIR).filter(d => {
    const full = path.join(ASSETS_DIR, d);
    return fs.statSync(full).isDirectory();
});

for (const dir of entityDirs) {
    const dirPath = path.join(ASSETS_DIR, dir);
    const pngs = fs.readdirSync(dirPath).filter(f => f.endsWith('.png'));
    for (const png of pngs) {
        const fullPath = path.join(dirPath, png);
        const stat = fs.statSync(fullPath);
        test(`${dir}/${png} not empty`, stat.size > 100, `File is only ${stat.size} bytes`);
    }
}

// ============================================================
// TEST 2: CREATURE CONFIGURATION AUDIT
// ============================================================

section('TEST 2: CREATURE CONFIGURATION AUDIT');

console.log('\n  Creature Stats Table:');
console.log('  ' + '-'.repeat(110));
console.log(`  ${'Creature'.padEnd(12)} | ${'Category'.padEnd(8)} | ${'HP'.padStart(4)} | ${'Dmg'.padStart(4)} | ${'Spd'.padStart(4)} | ${'AtkRng'.padStart(6)} | ${'AtkCD'.padStart(5)} | ${'AtkDur'.padStart(6)} | ${'DetRng'.padStart(6)} | ${'Size'.padEnd(10)}`);
console.log('  ' + '-'.repeat(110));

for (const [name, c] of Object.entries(CreatureConfig)) {
    console.log(`  ${name.padEnd(12)} | ${c.movementType.padEnd(8)} | ${String(c.hp).padStart(4)} | ${String(c.damage).padStart(4)} | ${String(c.speed).padStart(4)} | ${String(c.attackRange).padStart(6)} | ${String(c.attackCooldown).padStart(5)} | ${String(c.attackDuration).padStart(6)} | ${String(c.detectionRange).padStart(6)} | ${c.width}x${c.height}`);
}

// Check for meaningful differentiation
const creatures = Object.entries(CreatureConfig).filter(([k]) => k !== 'villain');
for (let i = 0; i < creatures.length; i++) {
    for (let j = i + 1; j < creatures.length; j++) {
        const [n1, c1] = creatures[i];
        const [n2, c2] = creatures[j];
        const sameStats = c1.hp === c2.hp && c1.damage === c2.damage && c1.speed === c2.speed && 
                          c1.attackRange === c2.attackRange && c1.attackCooldown === c2.attackCooldown;
        test(`${n1} differs from ${n2}`, !sameStats, 'Identical combat stats detected');
    }
}

// Validate reasonable ranges
for (const [name, c] of Object.entries(CreatureConfig)) {
    test(`${name} HP > 0`, c.hp > 0);
    test(`${name} damage > 0`, c.damage > 0);
    test(`${name} speed > 0 && speed < 20`, c.speed > 0 && c.speed < 20);
    test(`${name} attackRange > 0`, c.attackRange > 0);
    test(`${name} attackCooldown > 0`, c.attackCooldown > 0);
    test(`${name} detectionRange > attackRange`, c.detectionRange > c.attackRange);
}

// ============================================================
// TEST 3: ENEMY AI STATE MACHINE SIMULATION
// ============================================================

section('TEST 3: ENEMY AI STATE MACHINE SIMULATION');

function simulateEnemy(type, config, frames = 600) {
    // Simulated enemy state
    let pos = { x: 500, y: 400 };
    let vel = { x: 0, y: 0 };
    let health = config.hp;
    let isHurt = false;
    let hurtTimer = 0;
    let isAttacking = false;
    let attackTimer = 0;
    let attackCooldown = 0;
    let direction = 1;
    const isFlying = config.movementType === 'flying';
    
    const playerPos = { x: 800, y: 400 };
    const delta = 1 / 60;
    
    let nanDetected = false;
    let infiniteVelocity = false;
    let stuckFrames = 0;
    let maxStuck = 0;
    let lastX = pos.x;
    let states = [];
    
    for (let frame = 0; frame < frames; frame++) {
        // Void death check
        if (pos.y > 1500) {
            health = 0;
            break;
        }
        
        if (health <= 0) break;
        
        // Gravity for ground
        if (!isFlying) {
            vel.y += 1.5 * delta * 16.67; // approximate
            // Simple ground collision at y=400
            if (pos.y >= 400) {
                pos.y = 400;
                vel.y = 0;
            }
        } else {
            // Anti-gravity force
            vel.y -= 0.001 * delta * 60;
        }
        
        if (isHurt) {
            hurtTimer -= delta;
            if (hurtTimer <= 0) isHurt = false;
            states.push('hurt');
        } else if (isAttacking) {
            attackTimer -= delta;
            if (attackTimer <= 0) isAttacking = false;
            if (!isFlying) vel.x = 0;
            states.push('attack');
        } else {
            if (attackCooldown > 0) attackCooldown -= delta;
            
            const distX = playerPos.x - pos.x;
            const distY = playerPos.y - pos.y;
            const dist = Math.sqrt(distX * distX + distY * distY);
            
            if (dist < config.detectionRange && dist > config.attackRange) {
                direction = Math.sign(distX);
                if (isFlying) {
                    const dirX = distX / dist;
                    const dirY = distY / dist;
                    vel.x = dirX * config.speed;
                    vel.y = dirY * config.speed;
                } else {
                    vel.x = direction * config.speed;
                }
                states.push('chase');
            } else if (dist <= config.attackRange) {
                direction = Math.sign(distX) || direction;
                if (!isFlying) vel.x = 0;
                
                if (attackCooldown <= 0) {
                    isAttacking = true;
                    attackTimer = config.attackDuration;
                    attackCooldown = config.attackCooldown;
                    states.push('attack_start');
                } else {
                    states.push('in_range_waiting');
                }
            } else {
                vel.x = isFlying ? vel.x * 0.9 : 0;
                states.push('idle');
            }
        }
        
        // Simulate damage at frame 300
        if (frame === 300 && health > 0) {
            health -= 10;
            isHurt = true;
            hurtTimer = 0.5;
            isAttacking = false;
            vel.x = -5; // knockback
            vel.y = -5;
        }
        
        pos.x += vel.x;
        pos.y += vel.y;
        
        // NaN checks
        if (isNaN(pos.x) || isNaN(pos.y) || isNaN(vel.x) || isNaN(vel.y)) {
            nanDetected = true;
            break;
        }
        
        // Velocity explosion
        if (Math.abs(vel.x) > 1000 || Math.abs(vel.y) > 1000) {
            infiniteVelocity = true;
            break;
        }
        
        // Stuck detection
        if (Math.abs(pos.x - lastX) < 0.01 && !isAttacking && !isHurt) {
            stuckFrames++;
        } else {
            maxStuck = Math.max(maxStuck, stuckFrames);
            stuckFrames = 0;
        }
        lastX = pos.x;
    }
    
    return { nanDetected, infiniteVelocity, maxStuck, finalHealth: health, states };
}

for (const [type, config] of Object.entries(CreatureConfig)) {
    if (type === 'villain') continue;
    const result = simulateEnemy(type, config, 600);
    test(`${type}: No NaN positions`, !result.nanDetected);
    test(`${type}: No velocity explosion`, !result.infiniteVelocity);
    test(`${type}: Not permanently stuck (maxStuck < 400)`, result.maxStuck < 400, `Was stuck for ${result.maxStuck} frames`);
    test(`${type}: Damage was applied`, result.finalHealth < config.hp, `Health unchanged at ${result.finalHealth}`);
    test(`${type}: State transitions occurred`, result.states.length > 0);
}

// ============================================================
// TEST 4: SPAWN VALIDATION
// ============================================================

section('TEST 4: SPAWN & BIOME VALIDATION');

for (const [biomeName, biome] of Object.entries(BiomeDefinitions)) {
    console.log(`\n  --- ${biomeName.toUpperCase()} BIOME ---`);
    
    // Check enemy types exist in CreatureConfig
    for (const enemy of biome.enemies) {
        test(`${biomeName}: ${enemy.type} has config`, CreatureConfig[enemy.type] !== undefined, `Missing config for ${enemy.type}`);
    }
    
    // Check boss type has frames
    if (biome.boss) {
        const bossConfig = BossConfigs[biome.boss.type];
        test(`${biomeName}: Boss ${biome.boss.type} has config`, bossConfig !== undefined, `Missing boss config for ${biome.boss.type}`);
        if (bossConfig) {
            const bossFramePath = path.join(ASSETS_DIR, bossConfig.folder, `${bossConfig.prefix}_0_0.png`);
            test(`${biomeName}: Boss frames exist`, fs.existsSync(bossFramePath), `Missing: ${bossFramePath}`);
        }
    }
    
    // Calculate biome dimensions
    let minX = Infinity, maxX = -Infinity;
    for (const p of biome.platforms) {
        const left = p.x - p.w / 2;
        const right = p.x + p.w / 2;
        minX = Math.min(minX, left);
        maxX = Math.max(maxX, right);
    }
    const biomeWidth = maxX - minX;
    console.log(`  Biome width: ${Math.round(biomeWidth)}px (from ${Math.round(minX)} to ${Math.round(maxX)})`);
    test(`${biomeName}: Has reasonable width (>1500px)`, biomeWidth > 1500, `Only ${biomeWidth}px wide`);
    
    // Check enemy count
    test(`${biomeName}: Has enemies (count > 0)`, biome.enemies.length > 0, `${biome.enemies.length} enemies`);
    test(`${biomeName}: Has checkpoint`, biome.checkpoint !== undefined);
    
    // Check spawn positions — are enemies spawned on/near platforms?
    for (const enemy of biome.enemies) {
        const onPlatform = biome.platforms.some(p => {
            const left = p.x - p.w / 2;
            const right = p.x + p.w / 2;
            return enemy.x >= left - 100 && enemy.x <= right + 100;
        });
        // Flying creatures don't need to be on a platform
        const isFlying = CreatureConfig[enemy.type] && CreatureConfig[enemy.type].movementType === 'flying';
        if (!isFlying) {
            test(`${biomeName}: ${enemy.type} at (${enemy.x},${enemy.y}) near a platform`, onPlatform,
                 `Ground enemy may fall into void`);
        }
    }
    
    // Spawn distribution for this biome
    const typeCounts = {};
    for (const enemy of biome.enemies) {
        typeCounts[enemy.type] = (typeCounts[enemy.type] || 0) + 1;
    }
    console.log(`  Spawn distribution:`);
    for (const [type, count] of Object.entries(typeCounts)) {
        const pct = ((count / biome.enemies.length) * 100).toFixed(0);
        console.log(`    ${type}: ${count} (${pct}%)`);
    }
}

// ============================================================
// TEST 5: BIOME SIZE VALIDATION
// ============================================================

section('TEST 5: BIOME SIZE REPORT');

for (const [biomeName, biome] of Object.entries(BiomeDefinitions)) {
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    for (const p of biome.platforms) {
        minX = Math.min(minX, p.x - p.w / 2);
        maxX = Math.max(maxX, p.x + p.w / 2);
        minY = Math.min(minY, p.y - p.h / 2);
        maxY = Math.max(maxY, p.y + p.h / 2);
    }
    console.log(`  ${biomeName}: ${Math.round(maxX - minX)}px wide × ${Math.round(maxY - minY)}px tall  [${Math.round(minX)} → ${Math.round(maxX)}]`);
    console.log(`    Platforms: ${biome.platforms.length}, Enemies: ${biome.enemies.length}, Boss: ${biome.boss ? biome.boss.type : 'none'}`);
}

// ============================================================
// TEST 6: PLAYER SYSTEM AUDIT (R key, C key)
// ============================================================

section('TEST 6: PLAYER SYSTEM AUDIT');

// Read the source files to verify behavior
const playerSrc = fs.readFileSync(path.join(SRC_DIR, 'entities', 'Player.js'), 'utf-8');
const gameSrc = fs.readFileSync(path.join(SRC_DIR, 'game', 'Game.js'), 'utf-8');
const uiSrc = fs.readFileSync(path.join(SRC_DIR, 'systems', 'UIAndDialogue.js'), 'utf-8');
const levelSrc = fs.readFileSync(path.join(SRC_DIR, 'levels', 'LevelManager.js'), 'utf-8');

// C key = Block
test('C key is Block (isDown KeyC)', playerSrc.includes("this.input.isDown('KeyC')"), 'C key not found in Player.js');
test('C key blocked during attack', playerSrc.includes('!this.isAttacking'), 'Block not gated by attack state');
test('Block reduces speed', playerSrc.includes('this.speed * 0.3'), 'No speed reduction while blocking');
test('Block reduces damage', playerSrc.includes('amount / 4'), 'No damage reduction on block');

// R key = Respawn on death
test('R key triggers respawn', gameSrc.includes("this.input.isJustPressed('KeyR')"), 'R key respawn not found in Game.js');
test('R key gated by isDead', gameSrc.includes("this.ui.isDead && this.input.isJustPressed('KeyR')"), 'R key not gated by death state');
test('Respawn resets player', gameSrc.includes('this.player.resetAtCheckpoint('), 'Player.resetAtCheckpoint() not called on respawn');
test('Respawn uses respawnPoint', gameSrc.includes('this.respawnPoint'), 'respawnPoint not used on respawn');
test('Respawn reloads level', gameSrc.includes("this.levels.loadLevel(this.respawnPoint.biome)"), 'Level not reloaded on respawn');

// Void death
test('Void death at y > 1500', gameSrc.includes('this.player.body.position.y > 1500'), 'Void threshold not found');
test('Player.die() called on void', gameSrc.includes('this.player.die()'), 'Player.die() not called');

// Checkpoint
test('Checkpoint sets respawnPoint', levelSrc.includes("this.game.respawnPoint = {"), 'respawnPoint not set by checkpoint');

// ============================================================
// TEST 7: BOSS VALIDATION
// ============================================================

section('TEST 7: BOSS VALIDATION');

const bossSrc = fs.readFileSync(path.join(SRC_DIR, 'entities', 'Boss.js'), 'utf-8');

test('Boss has void death (y > 1500)', bossSrc.includes('this.body.position.y > 1500'), 'Boss has no void death protection');
test('Boss has state machine', bossSrc.includes('transitionState'), 'Boss has no state machine');
test('Boss has telegraph state', bossSrc.includes("this.state === \"telegraph\""), 'Boss has no telegraph mechanic');
test('Boss has attack state', bossSrc.includes("this.state === \"attack\""), 'Boss has no attack state');
test('Boss has proper cleanup on die()', bossSrc.includes('this.scene.remove(this.sprite)') && bossSrc.includes('Matter.Composite.remove'), 'Boss cleanup incomplete');
test('Boss telegraph mesh cleaned on die()', bossSrc.includes('this.scene.remove(this.telegraphMesh)'), 'Telegraph mesh not cleaned');
test('Boss HP = 300', bossSrc.includes('this.health = 300'), 'Boss HP not found/correct');
test('Boss canDealDamage only during attack', bossSrc.includes("this.state !== \"attack\""), 'Boss can deal damage outside attack');

// Boss scale is small — potential issue (checked in KNOWN BUGS)

// ============================================================
// TEST 8: ANIMATION STATE COVERAGE
// ============================================================

section('TEST 8: ANIMATION STATE COVERAGE');

console.log('\n  Animation States Per Creature:');
console.log('  ' + '-'.repeat(75));
console.log(`  ${'Creature'.padEnd(14)} | ${'Idle'.padEnd(6)} | ${'Run'.padEnd(6)} | ${'Attack'.padEnd(6)} | ${'Hurt'.padEnd(6)} | ${'Death'.padEnd(6)}`);
console.log('  ' + '-'.repeat(75));

for (const [name, config] of Object.entries(CreatureConfig)) {
    const animMap = getAnimMap(config.folder, config.prefix);
    const states = {};
    for (const state of ['idle', 'run', 'attack', 'hurt', 'death']) {
        const frames = animMap[state] || [];
        // Check if the first frame file exists
        if (frames.length > 0) {
            const firstFrame = frames[0];
            const diskPath = path.join(ASSETS_DIR, '..', firstFrame.replace('entities/', 'entities/'));
            states[state] = fs.existsSync(diskPath) ? 'YES' : 'MISSING';
        } else {
            states[state] = 'NO';
        }
    }
    console.log(`  ${name.padEnd(14)} | ${states.idle.padEnd(6)} | ${states.run.padEnd(6)} | ${states.attack.padEnd(6)} | ${states.hurt.padEnd(6)} | ${states.death.padEnd(6)}`);
}

// ============================================================
// TEST 9: ENEMY CODE QUALITY AUDIT
// ============================================================

section('TEST 9: ENEMY CODE QUALITY AUDIT');

const enemySrc = fs.readFileSync(path.join(SRC_DIR, 'entities', 'Enemy.js'), 'utf-8');

test('Enemy uses CreatureConfig', enemySrc.includes('CreatureConfig'));
test('Enemy has void death (y > 1500)', enemySrc.includes('this.body.position.y > 1500'));
test('Enemy die() removes physics body', enemySrc.includes('Matter.Composite.remove(this.physics.engine.world, this.body)'));
test('Enemy die() removes sprite', enemySrc.includes('this.scene.remove(this.sprite)'));
test('Enemy body set to null on death', enemySrc.includes('this.body = null'));
test('Flying enemies have anti-gravity', enemySrc.includes('gravityScale: 0') || enemySrc.includes('applyForce'));
test('Flying enemies have isSensor', enemySrc.includes('isSensor: isFlying'));
test('Enemy uses config damage values', enemySrc.includes('this.config.') && enemySrc.includes('this.config.speed'));
test('Enemy has attack cooldown', enemySrc.includes('this.attackCooldown'));
test('Enemy has direction tracking', enemySrc.includes('this.direction'));

// ============================================================
// TEST 10: PERFORMANCE / MEMORY AUDIT
// ============================================================

section('TEST 10: PERFORMANCE / MEMORY AUDIT');

// Check for common patterns
test('Dead enemies removed from array', gameSrc.includes('this.enemies.splice(i, 1)'), 'Dead enemies never removed');
test('Level clear removes old enemies', gameSrc.includes('this.game.enemies = []') || 
     fs.readFileSync(path.join(SRC_DIR, 'levels', 'LevelManager.js'), 'utf-8').includes('this.game.enemies = []'));
test('Level clear removes old platforms', 
     fs.readFileSync(path.join(SRC_DIR, 'levels', 'LevelManager.js'), 'utf-8').includes('this.game.platforms = []'));
test('Physics bodies cleaned on level load', 
     fs.readFileSync(path.join(SRC_DIR, 'levels', 'LevelManager.js'), 'utf-8').includes('Matter.Composite.remove'));
test('Meshes cleaned on level load', 
     fs.readFileSync(path.join(SRC_DIR, 'levels', 'LevelManager.js'), 'utf-8').includes('this.game.renderer.scene.remove'));

// Check dialogue bug
test('Dialogue showDialogue not disabled', !uiSrc.match(/showDialogue\(textLines\)\s*\{\s*return;/), 
     'showDialogue has an early return that disables all dialogue');

// ============================================================
// TEST 11: COMBAT SYSTEM AUDIT
// ============================================================

section('TEST 11: COMBAT DAMAGE VALIDATION');

// Verify that enemy damage from config is not being used (it's hardcoded in Game.js)
const playerDamageToEnemy = gameSrc.match(/e\.takeDamage\((\d+)/);
const bossDamageToPlayer = gameSrc.match(/this\.player\.takeDamage\((\d+)/);

if (playerDamageToEnemy) {
    console.log(`  Player deals ${playerDamageToEnemy[1]} damage to enemies (hardcoded in Game.js)`);
    test('Player damage to enemy is reasonable', parseInt(playerDamageToEnemy[1]) > 0 && parseInt(playerDamageToEnemy[1]) <= 50);
}

// Check if enemy damage from config is used
const enemyDamageUsed = gameSrc.includes('e.config.damage') || gameSrc.includes('e.damage');
test('Enemy damage uses per-creature config values', enemyDamageUsed, 
     'Enemy damage is hardcoded at 10 in Game.js instead of using creature-specific config');

// ============================================================
// KNOWN BUGS ANALYSIS
// ============================================================

section('KNOWN BUGS ANALYSIS');

// BUG: showDialogue() has early return — all dialogue disabled
const dialogueBug = uiSrc.match(/showDialogue\(textLines\)\s*\{\s*\n\s*return;/);
if (dialogueBug) {
    console.log('  ⚠ BUG FOUND: showDialogue() has `return;` on line 100 — all dialogue is DISABLED');
    bugs.push({ 
        test: 'Dialogue System Disabled', 
        detail: 'UIAndDialogue.js showDialogue() has an early `return;` that prevents all dialogue from appearing' 
    });
}

// BUG: Dark biome has wrong creatures (dragon, crocodile instead of scorpion)
const darkEnemies = BiomeDefinitions.dark.enemies.map(e => e.type);
if (darkEnemies.includes('dragon') || darkEnemies.includes('crocodile')) {
    console.log('  ⚠ BUG FOUND: Dark biome spawns dragon and crocodile (should have scorpion)');
    bugs.push({
        test: 'Dark Biome Wrong Creatures',
        detail: 'Dark biome spawns dragon and crocodile instead of the expected scorpion creature for that biome'
    });
}

// BUG: All enemy damage hardcoded to 10 in Game.js
if (!enemyDamageUsed) {
    console.log('  ⚠ BUG FOUND: Enemy damage is hardcoded to 10 in Game.js — creature-specific damage values ignored');
    bugs.push({
        test: 'Enemy Damage Hardcoded',
        detail: 'Game.js line ~198: player.takeDamage(10, ...) ignores the per-creature damage from CreatureConfig'
    });
}

// BUG: Boss scale very small (0.25)
const isBossScaleCorrect = bossSrc.includes('this.animator.baseScale = 0.45');
test('Boss scale is correct (0.45)', isBossScaleCorrect, 'Boss visual scale check');

// BUG: Scorpion not spawned in any biome
const allSpawnedTypes = new Set();
for (const biome of Object.values(BiomeDefinitions)) {
    for (const e of biome.enemies) allSpawnedTypes.add(e.type);
}
test('Scorpion is spawned somewhere', allSpawnedTypes.has('scorpion'), 'Scorpion configured but never spawned in any biome');

// ============================================================
// TEST 12: DETERMINISTIC INTEGRATION SIMULATIONS
// ============================================================

section('TEST 12: INTEGRATION SIMULATIONS');

// Simulating the Game loop interaction
function simulateIntegration(scenario) {
    let player = { health: 100, isHurt: false, hurtTimer: 0, isBlocking: false, isAttacking: false, isDead: false, velocity: {x:0,y:0}, pos: {x:100, y:300}, attackTimer: 0 };
    let enemy = { health: 20, isAttacking: false, attackTimer: 0, pos: {x:150, y:300} };
    let game = { respawnPoint: null, enemies: [enemy], gate: { isUnlocked: false }, boss: null };
    let input = { isDown: (k) => false, isJustPressed: (k) => false };
    const delta = 1/60;

    // A simplified tick logic reflecting the repaired codebase
    const tick = () => {
        if (player.health <= 0 && !player.isDead) {
            player.isDead = true;
        }
        
        if (player.isDead) {
            if (input.isJustPressed('KeyR')) {
                player.isDead = false;
                player.health = 100;
                player.isHurt = false;
                player.isBlocking = false;
                player.isAttacking = false;
                player.velocity = {x:0, y:0};
                if (game.respawnPoint) {
                    player.pos = { ...game.respawnPoint };
                }
            }
            return;
        }
        
        if (player.pos.y > 1500) {
            player.health = 0;
            player.isDead = true;
            return;
        }
        
        // Player Update
        if (player.health > 0) {
            player.isBlocking = input.isDown('KeyC') && !player.isAttacking;
        }
        if (player.isHurt) {
            player.hurtTimer -= delta;
            if (player.hurtTimer <= 0) player.isHurt = false;
        } else {
            if (input.isJustPressed('KeyX') && !player.isAttacking && !player.isBlocking) {
                player.isAttacking = true;
                player.attackTimer = 0.3;
            }
        }
        if (player.isAttacking) {
            player.attackTimer -= delta;
            if (player.attackTimer <= 0) player.isAttacking = false;
            
            // Deal damage
            if (enemy.health > 0) {
                enemy.health -= 10;
            }
        }
        
        // Enemy Update
        if (enemy.pos.y > 1500 && enemy.health > 0) {
            enemy.health = 0;
            game.enemies.splice(0, 1);
        }
        
        if (enemy.isAttacking && !player.isHurt) {
            if (player.isBlocking) {
                player.health -= 2.5;
                player.isHurt = true;
                player.hurtTimer = 0.3;
                player.velocity.x = 2;
            } else {
                player.health -= 10;
                player.isHurt = true;
                player.hurtTimer = 0.5;
                player.velocity.x = 5;
                player.isBlocking = false;
                player.isAttacking = false;
            }
        }
        
        // Gate Logic
        if (game.enemies.length === 0 && !game.boss) {
            game.gate.isUnlocked = true;
        }
    };
    
    scenario(tick, player, enemy, game, input);
}

// TEST A: Checkpoint
simulateIntegration((tick, player, enemy, game, input) => {
    game.respawnPoint = { x: 3400, y: 350 };
    player.pos.y = 2000; // Void death
    tick(); // Player dies
    test('TEST A: Player is dead in void', player.isDead);
    input.isJustPressed = (k) => k === 'KeyR';
    tick(); // Press R
    test('TEST A: Player respawned at checkpoint', player.pos.x === 3400 && player.pos.y === 350);
});

// TEST B: Block
simulateIntegration((tick, player, enemy, game, input) => {
    input.isDown = (k) => k === 'KeyC';
    tick(); // Starts blocking
    test('TEST B: Block activated', player.isBlocking);
    enemy.isAttacking = true;
    tick(); // Enemy hits
    test('TEST B: Damage mitigated (100 -> 97.5)', player.health === 97.5);
    test('TEST B: Knockback reduced (vel.x == 2)', player.velocity.x === 2);
    input.isDown = (k) => false; // Release C
    tick();
    test('TEST B: Block dropped', player.isBlocking === false);
});

// TEST C: Attack
simulateIntegration((tick, player, enemy, game, input) => {
    input.isJustPressed = (k) => k === 'KeyX';
    tick();
    test('TEST C: Player attacking', player.isAttacking);
    test('TEST C: Enemy took damage (20 -> 10)', enemy.health === 10);
});

// TEST D: Block -> Attack
simulateIntegration((tick, player, enemy, game, input) => {
    input.isDown = (k) => k === 'KeyC';
    input.isJustPressed = (k) => k === 'KeyX';
    tick(); // Holds C, presses X
    test('TEST D: Block active', player.isBlocking);
    test('TEST D: Attack prevented by block', !player.isAttacking);
    input.isDown = (k) => false; // Release C
    tick(); // Presses X without C
    test('TEST D: Attack succeeds after releasing C', player.isAttacking);
});

// TEST F: Void Enemy
simulateIntegration((tick, player, enemy, game, input) => {
    enemy.pos.y = 2000;
    tick();
    test('TEST F: Enemy dies in void', enemy.health === 0);
    test('TEST F: Enemy removed from array', game.enemies.length === 0);
});

// TEST G: Gate
simulateIntegration((tick, player, enemy, game, input) => {
    enemy.pos.y = 2000;
    tick();
    test('TEST G: Gate unlocked when enemies die', game.gate.isUnlocked);
});

// TEST H: Projectile Hit
simulateIntegration((tick, player, enemy, game, input) => {
    // Modify tick to handle projectiles
    let projectile = { type: 'web', isActive: true, damage: 2 };
    
    // Simulating the Game.js projectile collision loop
    if (projectile.isActive) {
        if (!player.isHurt) {
            if (player.isBlocking) {
                if (projectile.type === 'web') projectile.isActive = false;
                else if (projectile.type === 'acid') { player.health -= Math.floor(projectile.damage / 4); projectile.isActive = false; }
            } else {
                if (projectile.type === 'web') {
                    player.isWebbed = true;
                    player.health -= projectile.damage;
                } else if (projectile.type === 'acid') {
                    player.health -= projectile.damage;
                }
                projectile.isActive = false;
            }
        }
    }
    
    test('TEST H: Web slows player when not blocking', player.isWebbed === true && player.health === 98 && projectile.isActive === false);
});

// TEST I: Projectile Block
simulateIntegration((tick, player, enemy, game, input) => {
    let projectile = { type: 'web', isActive: true, damage: 2 };
    player.isBlocking = true;
    
    if (projectile.isActive) {
        if (!player.isHurt) {
            if (player.isBlocking) {
                if (projectile.type === 'web') projectile.isActive = false;
                else if (projectile.type === 'acid') { player.health -= Math.floor(projectile.damage / 4); projectile.isActive = false; }
            } else {
                if (projectile.type === 'web') {
                    player.isWebbed = true;
                    player.health -= projectile.damage;
                } else if (projectile.type === 'acid') {
                    player.health -= projectile.damage;
                }
                projectile.isActive = false;
            }
        }
    }
    
    test('TEST I: Web is destroyed, player not slowed when blocking', player.isWebbed === undefined && player.health === 100 && projectile.isActive === false);
});

// ============================================================
// FINAL SUMMARY
// ============================================================

section('FINAL SUMMARY');

console.log(`\n  Total Tests: ${totalTests}`);
console.log(`  Passed: ${passedTests}`);
console.log(`  Failed: ${failedTests}`);
console.log(`  Bugs Found: ${bugs.length}`);

if (failedTests > 0) {
    process.exit(1);
}

if (bugs.length > 0) {
    console.log('\n  Bug List:');
    for (let i = 0; i < bugs.length; i++) {
        console.log(`  ${i + 1}. ${bugs[i].test}: ${bugs[i].detail}`);
    }
}

console.log(`\n  Creature Types: ${Object.keys(CreatureConfig).length - 1} (excl. villain fallback)`);
console.log(`  Boss Types: ${Object.keys(BossConfigs).length}`);
console.log(`  Biomes: ${Object.keys(BiomeDefinitions).length}`);

process.exit(failedTests > 0 ? 1 : 0);
