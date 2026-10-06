import * as Matter from 'matter-js';
import * as THREE from 'three';
import { Enemy } from '../entities/Enemy.js';
import { Boss } from '../entities/Boss.js';
import { Checkpoint } from '../entities/Checkpoint.js';
import { Chest } from '../entities/Chest.js';
import { Gate } from '../entities/Gate.js';

export class LevelManager {
    constructor(game) {
        this.game = game;
        this.currentBiome = 'dark';
        this.checkpoints = [];
        this.chests = [];
        this.spawnId = 0;
    }
    
    resetEnemies() {
        this.spawnId++; // Cancel pending spawns
        for (let e of this.game.enemies) {
            if(e.body) Matter.Composite.remove(this.game.physics.engine.world, e.body);
            if(e.sprite) this.game.renderer.scene.remove(e.sprite);
        }
        this.game.enemies = [];
        this.game.totalEnemiesLevel = 0;
        
        if (this.game.projectiles) {
            for (let p of this.game.projectiles) { p.destroy(); }
            this.game.projectiles = [];
        }
        
        if (this.game.boss) {
            if(this.game.boss.body) Matter.Composite.remove(this.game.physics.engine.world, this.game.boss.body);
            if(this.game.boss.sprite) this.game.renderer.scene.remove(this.game.boss.sprite);
            if(this.game.boss.telegraphMesh) this.game.renderer.scene.remove(this.game.boss.telegraphMesh);
            this.game.boss = null;
        }
        
        if (this.gate) {
            this.gate.isUnlocked = false;
        }
        
        // Reset Chests
        if (this.chests) {
            for (let chest of this.chests) {
                chest.isOpened = false;
                chest.tex.offset.set(0, 3/4);
                chest.material.color.setHex(0xffffff);
            }
        }
        
        // Mark checkpoint as activated if we spawn there, so it doesn't instantly re-trigger dialogue
        if (this.game.respawnPoint) {
            for (let cp of this.checkpoints) {
                if (cp.x === this.game.respawnPoint.x) {
                    cp.activate();
                }
            }
        }
        
        // Spawn enemies based on biome
        if (this.currentBiome === 'dark') {
            this.spawnEnemy(1800, 400, "wolf");
            this.spawnEnemy(2800, 300, "spider");
            this.spawnEnemy(3100, 300, "wolf");
            this.spawnEnemy(3800, 300, "bat");
            this.spawnEnemy(4300, 400, "scorpion");
            this.spawnEnemy(4600, 400, "spider");
            this.spawnEnemy(4700, 400, "wolf");
            this.spawnEnemy(5000, 500, "scorpion");
            this.spawnEnemy(5300, 200, "bat");
            this.spawnEnemy(6300, 400, "wolf");
            this.spawnEnemy(6500, 400, "spider");
            this.spawnEnemy(6600, 300, "bat");
            this.spawnEnemy(6800, 400, "scorpion");
            this.spawnEnemy(7100, 300, "bat");
            this.spawnBoss(8400, 400, "dark_boss");
        } else if (this.currentBiome === 'ice') {
            this.spawnEnemy(1800, 400, "wolf");
            this.spawnEnemy(2500, 400, "ice_wolf");
            this.spawnEnemy(3900, 500, "ice_wolf");
            this.spawnEnemy(3900, 400, "bat");
            this.spawnEnemy(4400, 400, "ice_wolf");
            this.spawnEnemy(4900, 400, "bat");
            this.spawnEnemy(5400, 400, "ice_wolf");
            this.spawnEnemy(5600, 400, "wolf");
            this.spawnEnemy(5500, 300, "bat");
            this.spawnEnemy(6400, 200, "bat");
            this.spawnEnemy(7100, 400, "ice_wolf");
            this.spawnEnemy(7300, 400, "wolf");
            this.spawnEnemy(7200, 300, "bat");
            this.spawnEnemy(7400, 400, "ice_wolf");
            this.spawnBoss(8600, 450, "cold_blood");
        } else if (this.currentBiome === 'jungle') {
            this.spawnEnemy(1800, 400, "lizard");
            this.spawnEnemy(2500, 200, "spider");
            this.spawnEnemy(2800, 100, "bat");
            this.spawnEnemy(3500, 500, "crocodile");
            this.spawnEnemy(3700, 500, "crocodile");
            this.spawnEnemy(4200, 400, "lizard");
            this.spawnEnemy(4800, 200, "dragon");
            this.spawnEnemy(4700, 300, "bat");
            this.spawnEnemy(5400, 200, "spider");
            this.spawnEnemy(5700, 100, "bat");
            this.spawnEnemy(6000, 400, "crocodile");
            this.spawnEnemy(6800, 300, "lizard");
            this.spawnEnemy(7000, 300, "spider");
            this.spawnEnemy(7200, 200, "dragon");
            this.spawnBoss(8600, 150, "overgrowth");
        }
    }
    
    loadLevel(biomeName) {
        this.spawnId++; // Cancel pending spawns
        this.currentBiome = biomeName;
        // Load the visual environment layer
        if (this.game.environment) {
            this.game.environment.loadBiome(biomeName).catch(e => console.error("Failed to load biome visual:", e));
        }
        
        // Clear old
        for (let p of this.game.platforms) {
            this.game.renderer.scene.remove(p.mesh);
            Matter.Composite.remove(this.game.physics.engine.world, p.body);
        }
        this.game.platforms = [];
        
        for (let e of this.game.enemies) {
            if(e.body) Matter.Composite.remove(this.game.physics.engine.world, e.body);
            if(e.sprite) this.game.renderer.scene.remove(e.sprite);
        }
        this.game.enemies = [];
        this.game.totalEnemiesLevel = 0;
        
        if (this.game.decorations) {
            for (let d of this.game.decorations) {
                this.game.renderer.scene.remove(d);
            }
        }
        this.game.decorations = [];
        
        if (this.game.projectiles) {
            for (let p of this.game.projectiles) { p.destroy(); }
            this.game.projectiles = [];
        }
        
        if (this.game.boss) {
            if(this.game.boss.body) Matter.Composite.remove(this.game.physics.engine.world, this.game.boss.body);
            if(this.game.boss.sprite) this.game.renderer.scene.remove(this.game.boss.sprite);
            if(this.game.boss.telegraphMesh) this.game.renderer.scene.remove(this.game.boss.telegraphMesh);
            this.game.boss = null;
        }
        
        if (this.checkpoints) {
            for (let cp of this.checkpoints) {
                cp.destroy();
            }
        }
        this.checkpoints = [];
        
        if (this.chests) {
            for (let chest of this.chests) {
                chest.destroy();
            }
        }
        this.chests = [];
        
        if (this.gate) {
            this.gate.destroy();
            this.gate = null;
        }
        
        let color = 0x222222;
        if (biomeName === 'ice') color = 0x88ccff;
        if (biomeName === 'jungle') color = 0x228822;
        
        let targetBiome = null;
        if (biomeName === 'dark') targetBiome = 'ice';
        else if (biomeName === 'ice') targetBiome = 'jungle';
        
        // Automatically set respawn point to the start of this new biome
        this.game.respawnPoint = { x: 100, y: 350, biome: biomeName };
        
        // Create floors, platforms, and entities based on biome
        if (biomeName === 'dark') {
            // Expanded Dark Biome
            this.createPlatform(500, 500, 2000, 40, color); // Safe start zone (-500 to 1500)
            this.createPlatform(1800, 500, 400, 40, color); // Small encounter
            this.createPlatform(2200, 450, 200, 20, color); // Exploration gap
            this.createPlatform(2450, 400, 200, 20, color); // Vertical up
            this.createPlatform(2900, 400, 600, 40, color); // Medium encounter
            this.createPlatform(3400, 500, 200, 20, color); // Checkpoint
            this.createPlatform(3800, 500, 500, 40, color); // Exploration
            this.createPlatform(4500, 500, 700, 40, color); // Hard encounter
            
            // Environmental Challenge
            this.createPlatform(4900, 400, 200, 20, color); // High route (was 5000, 350)
            this.createPlatform(5200, 320, 200, 20, color); // (was 5300, 300)
            this.createPlatform(5000, 600, 400, 40, color); // Low route pit
            this.createPlatform(5500, 500, 400, 40, color);
            
            this.createPlatform(5900, 500, 200, 20, color); // Checkpoint
            this.createPlatform(6500, 500, 800, 40, color); // Intense Final Section
            this.createPlatform(7100, 400, 200, 20, color); // Stairs
            this.createPlatform(8400, 500, 2000, 40, color); // Boss Arena (7400 to 9400)
            
            if (!this.game.light.hasBlueCore) {
                this.createCore(6800, 400, 'blue');
            }
            
            // Enemies (14)
            this.spawnEnemy(1800, 400, "wolf"); // Small encounter
            this.spawnEnemy(2800, 300, "spider"); // Medium
            this.spawnEnemy(3100, 300, "wolf");
            this.spawnEnemy(3800, 300, "bat"); // High bat
            this.spawnEnemy(4300, 400, "scorpion"); // Hard encounter
            this.spawnEnemy(4600, 400, "spider");
            this.spawnEnemy(4700, 400, "wolf");
            this.spawnEnemy(5000, 500, "scorpion"); // Low route trap
            this.spawnEnemy(5300, 200, "bat"); // High route bat
            this.spawnEnemy(6300, 400, "wolf"); // Final section
            this.spawnEnemy(6500, 400, "spider");
            this.spawnEnemy(6600, 300, "bat");
            this.spawnEnemy(6800, 400, "scorpion");
            this.spawnEnemy(7100, 300, "bat"); // Guarding stairs
            
            this.spawnBoss(8400, 400, "dark_boss");
            
            this.game.ui.showDialogue(["Welcome to the Dark World.", "The light has faded.", "Find the Blue Core to restore the Ice."]);
            
            if (targetBiome) {
                this.gate = new Gate(this.game.physics, this.game.renderer.scene, 9200, 420, targetBiome);
            }
            
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 100, 400, biomeName));
            
        } else if (biomeName === 'ice') {
            // Expanded Ice Biome
            this.createPlatform(500, 500, 2000, 40, color); // Safe start zone (-500 to 1500)
            this.createPlatform(1800, 500, 400, 40, color); // Small encounter
            this.createPlatform(2400, 500, 600, 40, color); // Open Ice
            
            // Platforming Slippery gaps
            this.createPlatform(2900, 400, 200, 20, color);
            this.createPlatform(3100, 320, 200, 20, color);
            this.createPlatform(3400, 500, 200, 40, color); // Checkpoint
            
            // Ice pits
            this.createPlatform(3900, 600, 400, 40, color); // Pit
            this.createPlatform(4400, 500, 400, 40, color); // Up
            this.createPlatform(4900, 500, 400, 40, color); // Exploration
            
            this.createPlatform(5500, 500, 600, 40, color); // Hard Encounter
            
            // Elevated Ice Formations
            this.createPlatform(6100, 400, 200, 20, color);
            this.createPlatform(6250, 350, 100, 20, color);
            this.createPlatform(6400, 300, 200, 20, color);
            this.createPlatform(6700, 500, 200, 40, color); // Checkpoint
            
            this.createPlatform(7200, 500, 600, 40, color); // Intense Final
            this.createPlatform(8600, 600, 2000, 40, color); // Boss Arena (7600 to 9600)
            
            if (!this.game.light.hasGreenCore) {
                this.createCore(7400, 400, 'green');
            }
            
            // Enemies (14)
            this.spawnEnemy(1800, 400, "wolf"); // Small encounter
            this.spawnEnemy(2500, 400, "ice_wolf"); // Open ice
            this.spawnEnemy(3900, 500, "ice_wolf"); // Pit trap
            this.spawnEnemy(3900, 400, "bat");
            this.spawnEnemy(4400, 400, "ice_wolf");
            this.spawnEnemy(4900, 400, "bat"); // Exploration
            
            this.spawnEnemy(5400, 400, "ice_wolf"); // Hard
            this.spawnEnemy(5600, 400, "wolf");
            this.spawnEnemy(5500, 300, "bat");
            
            this.spawnEnemy(6400, 200, "bat"); // Formations
            
            this.spawnEnemy(7100, 400, "ice_wolf"); // Intense Final
            this.spawnEnemy(7300, 400, "wolf");
            this.spawnEnemy(7200, 300, "bat");
            this.spawnEnemy(7400, 400, "ice_wolf");
            
            this.spawnBoss(8600, 450, "cold_blood");
            this.game.ui.showDialogue(["The Ice Biome.", "Cold Blood guards the Green Core.", "Prepare for battle."]);
            
            if (targetBiome) {
                this.gate = new Gate(this.game.physics, this.game.renderer.scene, 9400, 420, targetBiome);
            }
            
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 100, 400, biomeName));
            
        } else if (biomeName === 'jungle') {
            // Expanded Jungle Biome
            this.createPlatform(500, 500, 2000, 40, color); // Safe start zone (-500 to 1500)
            this.createPlatform(1800, 500, 400, 40, color); // Small Encounter
            
            // Vertical Climb
            this.createPlatform(2200, 400, 200, 20, color);
            this.createPlatform(2400, 320, 350, 20, color); // Spider here
            this.createPlatform(2600, 240, 200, 20, color);
            
            this.createPlatform(2900, 350, 200, 20, color); // Checkpoint
            this.createPlatform(3600, 600, 600, 40, color); // Swamp pit
            
            this.createPlatform(4200, 500, 400, 40, color); // Exploration
            this.createPlatform(4800, 400, 600, 40, color); // Hard Encounter (Dragon intro)
            
            // Canopy Section
            this.createPlatform(5400, 300, 350, 20, color);
            this.createPlatform(5700, 200, 200, 20, color);
            this.createPlatform(6000, 500, 400, 40, color); // Lower path
            
            this.createPlatform(6500, 400, 200, 40, color); // Checkpoint
            this.createPlatform(7000, 400, 800, 40, color); // Intense Final Section
            this.createPlatform(8600, 300, 2000, 40, color); // Boss Arena (7600 to 9600)
            
            // Enemies (14)
            this.spawnEnemy(1800, 400, "lizard"); // Small
            this.spawnEnemy(2400, 200, "spider"); // Climb
            this.spawnEnemy(2600, 100, "bat"); // Climb
            
            this.spawnEnemy(3500, 500, "crocodile"); // Swamp
            this.spawnEnemy(3700, 500, "crocodile"); // Swamp
            
            this.spawnEnemy(4200, 400, "lizard"); // Exploration
            
            this.spawnEnemy(4800, 200, "dragon"); // Dragon intro
            this.spawnEnemy(4700, 300, "bat");
            
            this.spawnEnemy(5400, 200, "spider"); // Canopy
            this.spawnEnemy(5700, 100, "bat");
            this.spawnEnemy(6000, 400, "crocodile"); // Lower path
            
            this.spawnEnemy(6800, 300, "lizard"); // Intense Final
            this.spawnEnemy(7000, 300, "spider");
            this.spawnEnemy(7200, 200, "dragon");
            
            this.spawnBoss(8600, 150, "overgrowth");
            this.game.ui.showDialogue(["The Jungle.", "Overgrowth stands in your way.", "Defeat it to reveal the truth."]);
            
            // Just leaving the gate in place if there's ever a 4th biome
            this.gate = new Gate(this.game.physics, this.game.renderer.scene, 9400, 220, "victory"); 
            
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 100, 400, biomeName));
        }
        
        // Spawn up to 3 random chests on platforms
        if (this.game.platforms.length > 2) {
            let validPlatforms = this.game.platforms.slice(1); // skip the very first giant spawn platform
            validPlatforms.sort(() => 0.5 - Math.random());
            let numChests = Math.min(3, validPlatforms.length);
            for (let i = 0; i < numChests; i++) {
                let p = validPlatforms[i];
                let px = p.body.position.x;
                let py = p.body.bounds.min.y - 30; // 30 units above the platform surface
                this.chests.push(new Chest(this.game.physics, this.game.renderer.scene, px, py, this.game));
            }
        }
        
        // Mark checkpoint as activated if we spawn there
        if (this.game.respawnPoint) {
            for (let cp of this.checkpoints) {
                if (cp.x === this.game.respawnPoint.x) {
                    cp.activate();
                }
            }
        }
    }
    
    async spawnEnemy(x, y, type = "wolf") {
        const currentSpawnId = this.spawnId;
        const e = new Enemy(this.game.physics, this.game.renderer.scene, this.game.assets, type);
        
        let spawnX = x;
        if (e.config && e.config.movementType !== "flying") {
            const margin = (e.config.width / 2) + 80; // 80 units player landing safety margin
            for (let p of this.game.platforms) {
                if (p.body && p.body.bounds) {
                    // Check if spawn is horizontally near this platform and vertically above it
                    if (x >= p.body.bounds.min.x - 10 && x <= p.body.bounds.max.x + 10) {
                        if (y <= p.body.bounds.min.y && y >= p.body.bounds.min.y - 400) {
                            const minX = p.body.bounds.min.x + margin;
                            const maxX = p.body.bounds.max.x - margin;
                            if (minX <= maxX) {
                                spawnX = Math.max(minX, Math.min(maxX, spawnX));
                            }
                            break;
                        }
                    }
                }
            }
        }
        
        await e.init(spawnX, y);
        if (this.spawnId === currentSpawnId) {
            this.game.enemies.push(e);
            this.game.totalEnemiesLevel = (this.game.totalEnemiesLevel || 0) + 1;
        } else {
            e.die();
        }
    }
    
    async spawnBoss(x, y, type) {
        const currentSpawnId = this.spawnId;
        const boss = new Boss(this.game.physics, this.game.renderer.scene, this.game.assets, type);
        await boss.init(x, y);
        if (this.spawnId === currentSpawnId) {
            this.game.boss = boss;
            this.game.totalEnemiesLevel = (this.game.totalEnemiesLevel || 0) + 1;
        } else {
            boss.die();
        }
    }
    
    createPlatform(x, y, w, h, color) {
        const body = Matter.Bodies.rectangle(x, y, w, h, { isStatic: true });
        Matter.Composite.add(this.game.physics.engine.world, body);
        const mesh = this.game.renderer.createBox(x, y, w, h, color);
        this.game.platforms.push({ body, mesh });
        
        // Spawn Decor Deterministically
        this.game.decorations = this.game.decorations || [];
        const biome = this.currentBiome;
        const maxDecor = { 'dark': 127, 'ice': 30, 'jungle': 147 }[biome] || 0;
        
        if (maxDecor > 0) {
            // Pseudo-random based on platform X/Y so it's deterministic
            let seed = Math.abs(Math.sin(x * 12.9898 + y * 78.233)) * 43758.5453;
            let prng = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
            
            if (prng() > 0.2) {
                const decorCount = Math.floor(prng() * 3) + 1; // 1 to 3
                for (let i = 0; i < decorCount; i++) {
                    const rIdx = Math.floor(prng() * maxDecor);
                    const path = `./web/environments/${biome}/${biome}_decor_${rIdx}.png`;
                    
                    const decorX = x + (prng() - 0.5) * (w * 0.8);
                    
                    if (this.game.assets) {
                        const tex = this.game.assets.textureLoader.load(path);
                        tex.colorSpace = THREE.SRGBColorSpace; 
                        tex.magFilter = THREE.NearestFilter; 
                        tex.minFilter = THREE.NearestFilter;
                        const aspect = tex.image ? (tex.image.width / tex.image.height) : (Math.random()>0.5? 1.5 : 0.8);
                        
                        const scale = 40 + prng() * 120; // 40 to 160 height
                        
                        // decorY is the physical center Y of the mesh.
                        // WebGL coordinate Y goes UP. Platform center is -y.
                        // Top of platform is -y + h/2.
                        // Decor center should be top of platform + scale/2.
                        const decorY = -y + (h / 2) + (scale / 2) - 5; // Sink it 5 units into the platform so it sits flat
                        
                        const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, alphaTest: 0.1 });
                        const geo = new THREE.PlaneGeometry(scale * aspect, scale);
                        const decorMesh = new THREE.Mesh(geo, mat);
                        
                        // Z slightly back (-5 to -45) to prevent z-fighting and sit behind player
                        const decorZ = -5 - (prng() * 40);
                        
                        decorMesh.position.set(decorX, decorY, decorZ); 
                        this.game.renderer.scene.add(decorMesh);
                        this.game.decorations.push(decorMesh);
                    }
                }
            }
        }
    }
    
    createCore(x, y, type) {
        const body = Matter.Bodies.circle(x, y, 20, { isStatic: true, isSensor: true, label: `core_${type}` });
        Matter.Composite.add(this.game.physics.engine.world, body);
        
        const numFrames = type === 'blue' ? 16 : 22;
        const frames = [];
        for(let i=0; i<numFrames; i++) {
            frames.push(`particles/orb_${type}_decor_${i}.png`);
        }
        
        const geo = new THREE.PlaneGeometry(80, 80);
        const mat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, alphaTest: 0.1 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, -y, 10);
        this.game.renderer.scene.add(mesh);
        
        const core = { body, mesh, frames, currentFrame: -1, time: 0, type, baseY: -y };
        this.game.platforms.push(core);
        
        this.game.cores = this.game.cores || [];
        this.game.cores.push(core);
    }
    
    update(player) {
        if (!player || !player.body || this.game.ui.isDead) return;
        
        // Handle Cores
        if (this.game.cores) {
            for (let core of this.game.cores) {
                if (core.mesh.parent) {
                    core.time += 0.016;
                    core.mesh.position.y = core.baseY + Math.sin(core.time * 3) * 15;
                    const frameIndex = Math.floor(core.time * 12) % core.frames.length;
                    if (frameIndex !== core.currentFrame && this.game.assets) {
                        core.currentFrame = frameIndex;
                        const tex = this.game.assets.textureLoader.load(core.frames[frameIndex]);
                        tex.colorSpace = 152; // THREE.SRGBColorSpace
                        tex.magFilter = 1003; // THREE.NearestFilter
                        tex.minFilter = 1003;
                        core.mesh.material.map = tex;
                        core.mesh.material.needsUpdate = true;
                    }
                }
            }
        }
        
        // Handle Checkpoints
        for (let cp of this.checkpoints) {
            if (!cp.isActivated) {
                if (Matter.Bounds.overlaps(player.body.bounds, cp.body.bounds)) {
                    cp.activate();
                    this.game.respawnPoint = { x: cp.x, y: cp.y - 50, biome: this.currentBiome };
                    this.game.ui.showDialogue(["Checkpoint Reached.", "Progress Saved."]);
                }
            }
        }
        
        // Handle Chests
        let chestInRange = null;
        if (this.chests) {
            for (let chest of this.chests) {
                if (!chest.isOpened) {
                    if (Matter.Bounds.overlaps(player.body.bounds, chest.body.bounds)) {
                        chestInRange = chest;
                        break;
                    }
                }
            }
        }
        
        if (chestInRange) {
            if (this.game.input.isJustPressed('KeyC')) {
                this.game.input.consumeKey('KeyC'); // Prevent shield block
                chestInRange.open();
                this.game.ui.hideInteractionPrompt();
            } else {
                this.game.ui.showInteractionPrompt("Press C to Open");
            }
        } else {
            if (this.game.ui.hideInteractionPrompt) {
                this.game.ui.hideInteractionPrompt();
            }
        }
        

        // Handle Gate unlocking
        if (this.gate && !this.gate.isUnlocked) {
            const enemiesLeft = this.game.enemies.length;
            const bossAlive = this.game.boss && this.game.boss.health > 0;
            if (enemiesLeft === 0 && !bossAlive) {
                this.gate.unlock();
                this.game.ui.showDialogue(["PATH UNLOCKED"]);
            }
        }
        
        // Handle Gate transition
        if (this.gate) {
            if (Matter.Bounds.overlaps(player.body.bounds, this.gate.body.bounds)) {
                if (this.gate.isUnlocked) {
                    if (this.gate.targetBiome === "victory") {
                        this.game.ui.showVictoryScreen();
                    } else {
                        this.loadLevel(this.gate.targetBiome);
                        Matter.Body.setVelocity(player.body, { x: 0, y: 0 });
                        Matter.Body.setPosition(player.body, { x: 100, y: 300 });
                    }
                } else if (!this.gate.messageShown) {
                    const enemiesLeft = this.game.enemies.length;
                    this.game.ui.showDialogue([
                        "BIOME NOT CLEARED.",
                        `${enemiesLeft} ENEMIES REMAIN.`
                    ]);
                    this.gate.messageShown = true;
                    setTimeout(() => {
                        if (this.gate) this.gate.messageShown = false;
                    }, 5000);
                }
            }
        }
    }
}
