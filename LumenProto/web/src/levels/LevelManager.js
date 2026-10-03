import * as Matter from 'matter-js';
import { Enemy } from '../entities/Enemy.js';
import { Boss } from '../entities/Boss.js';
import { Checkpoint } from '../entities/Checkpoint.js';
import { Gate } from '../entities/Gate.js';

export class LevelManager {
    constructor(game) {
        this.game = game;
        this.currentBiome = 'dark';
        this.checkpoints = [];
        this.spawnId = 0;
    }
    
    resetEnemies() {
        this.spawnId++; // Cancel pending spawns
        for (let e of this.game.enemies) {
            if(e.body) Matter.Composite.remove(this.game.physics.engine.world, e.body);
            if(e.sprite) this.game.renderer.scene.remove(e.sprite);
        }
        this.game.enemies = [];
        
        if (this.game.boss) {
            if(this.game.boss.body) Matter.Composite.remove(this.game.physics.engine.world, this.game.boss.body);
            if(this.game.boss.sprite) this.game.renderer.scene.remove(this.game.boss.sprite);
            if(this.game.boss.telegraphMesh) this.game.renderer.scene.remove(this.game.boss.telegraphMesh);
            this.game.boss = null;
        }
        
        if (this.gate) {
            this.gate.isUnlocked = false;
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
            this.createPlatform(5000, 350, 200, 20, color); // High route
            this.createPlatform(5300, 300, 200, 20, color);
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
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 3400, 400, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 5900, 400, biomeName));
            
        } else if (biomeName === 'ice') {
            // Expanded Ice Biome
            this.createPlatform(500, 500, 2000, 40, color); // Safe start zone (-500 to 1500)
            this.createPlatform(1800, 500, 400, 40, color); // Small encounter
            this.createPlatform(2400, 500, 600, 40, color); // Open Ice
            
            // Platforming Slippery gaps
            this.createPlatform(2900, 400, 200, 20, color);
            this.createPlatform(3150, 300, 200, 20, color);
            this.createPlatform(3500, 500, 200, 40, color); // Checkpoint
            
            // Ice pits
            this.createPlatform(3900, 600, 400, 40, color); // Pit
            this.createPlatform(4400, 500, 400, 40, color); // Up
            this.createPlatform(4900, 500, 400, 40, color); // Exploration
            
            this.createPlatform(5500, 500, 600, 40, color); // Hard Encounter
            
            // Elevated Ice Formations
            this.createPlatform(6100, 400, 200, 20, color);
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
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 3500, 400, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 6700, 400, biomeName));
            
        } else if (biomeName === 'jungle') {
            // Expanded Jungle Biome
            this.createPlatform(500, 500, 2000, 40, color); // Safe start zone (-500 to 1500)
            this.createPlatform(1800, 500, 400, 40, color); // Small Encounter
            
            // Vertical Climb
            this.createPlatform(2200, 400, 200, 20, color);
            this.createPlatform(2500, 300, 200, 20, color);
            this.createPlatform(2800, 200, 200, 20, color);
            
            this.createPlatform(3100, 350, 200, 20, color); // Checkpoint
            this.createPlatform(3600, 600, 600, 40, color); // Swamp pit
            
            this.createPlatform(4200, 500, 400, 40, color); // Exploration
            this.createPlatform(4800, 400, 600, 40, color); // Hard Encounter (Dragon intro)
            
            // Canopy Section
            this.createPlatform(5400, 300, 200, 20, color);
            this.createPlatform(5700, 200, 200, 20, color);
            this.createPlatform(6000, 500, 400, 40, color); // Lower path
            
            this.createPlatform(6500, 400, 200, 40, color); // Checkpoint
            this.createPlatform(7000, 400, 800, 40, color); // Intense Final Section
            this.createPlatform(8600, 300, 2000, 40, color); // Boss Arena (7600 to 9600)
            
            // Enemies (14)
            this.spawnEnemy(1800, 400, "lizard"); // Small
            this.spawnEnemy(2500, 200, "spider"); // Climb
            this.spawnEnemy(2800, 100, "bat"); // Climb
            
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
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 3100, 250, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 6500, 300, biomeName));
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
        await e.init(x, y);
        if (this.spawnId === currentSpawnId) {
            this.game.enemies.push(e);
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
        } else {
            boss.die();
        }
    }
    
    createPlatform(x, y, w, h, color) {
        const body = Matter.Bodies.rectangle(x, y, w, h, { isStatic: true });
        Matter.Composite.add(this.game.physics.engine.world, body);
        const mesh = this.game.renderer.createBox(x, y, w, h, color);
        this.game.platforms.push({ body, mesh });
    }
    
    createCore(x, y, type) {
        const color = type === 'blue' ? 0x0000ff : 0x00ff00;
        const body = Matter.Bodies.circle(x, y, 20, { isStatic: true, isSensor: true, label: `core_${type}` });
        Matter.Composite.add(this.game.physics.engine.world, body);
        const mesh = this.game.renderer.createBox(x, y, 40, 40, color);
        this.game.platforms.push({ body, mesh });
    }
    
    update(player) {
        if (!player || !player.body || this.game.ui.isDead) return;
        
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
