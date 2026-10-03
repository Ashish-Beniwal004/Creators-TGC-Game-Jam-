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
    }
    
    loadLevel(biomeName) {
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
            this.createPlatform(1700, 400, 400, 20, color);
            this.createPlatform(2200, 300, 400, 20, color);
            this.createPlatform(2900, 550, 1000, 40, color); // Pit
            this.createPlatform(3600, 450, 400, 20, color);
            this.createPlatform(4200, 500, 1000, 40, color);
            this.createPlatform(5000, 350, 400, 20, color);
            this.createPlatform(5800, 550, 1200, 40, color);
            this.createPlatform(6600, 400, 400, 20, color);
            this.createPlatform(7100, 300, 300, 20, color);
            this.createPlatform(7900, 500, 2000, 40, color); // Boss Arena (6900 to 8900)
            
            if (!this.game.light.hasBlueCore) {
                this.createCore(7100, 200, 'blue');
            }
            
            // Enemies
            this.spawnEnemy(1300, 400, "wolf");
            this.spawnEnemy(1700, 300, "bat");
            this.spawnEnemy(2200, 200, "spider");
            this.spawnEnemy(2700, 500, "scorpion");
            this.spawnEnemy(3000, 500, "wolf");
            this.spawnEnemy(3600, 350, "bat");
            this.spawnEnemy(4100, 400, "spider");
            this.spawnEnemy(4500, 400, "scorpion");
            this.spawnEnemy(5000, 250, "bat");
            this.spawnEnemy(5500, 450, "wolf");
            this.spawnEnemy(5900, 450, "wolf");
            this.spawnEnemy(6600, 300, "spider");
            this.spawnEnemy(7100, 200, "scorpion");
            this.spawnEnemy(7500, 400, "bat");
            
            this.spawnBoss(8000, 400, "dark_boss");
            
            this.game.ui.showDialogue(["Welcome to the Dark World.", "The light has faded.", "Find the Blue Core to restore the Ice."]);
            
            if (targetBiome) {
                this.gate = new Gate(this.game.physics, this.game.renderer.scene, 8700, 420, targetBiome);
            }
            
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 100, 400, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 4200, 400, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 6800, 350, biomeName));
            
        } else if (biomeName === 'ice') {
            // Expanded Ice Biome
            this.createPlatform(500, 500, 2000, 40, color); // Safe start zone (-500 to 1500)
            this.createPlatform(1700, 400, 400, 20, color);
            this.createPlatform(2200, 300, 400, 20, color);
            this.createPlatform(2900, 650, 1000, 40, color); // Trench
            this.createPlatform(3600, 500, 600, 40, color);
            this.createPlatform(4200, 350, 400, 20, color);
            this.createPlatform(4700, 250, 400, 20, color);
            this.createPlatform(5500, 600, 1200, 40, color);
            this.createPlatform(6300, 450, 500, 20, color);
            this.createPlatform(6900, 300, 400, 20, color);
            this.createPlatform(8000, 600, 2000, 40, color); // Boss Arena (7000 to 9000)
            
            if (!this.game.light.hasGreenCore) {
                this.createCore(7500, 450, 'green');
            }
            
            this.spawnEnemy(1400, 400, "wolf");
            this.spawnEnemy(1700, 300, "bat");
            this.spawnEnemy(2200, 200, "bat");
            this.spawnEnemy(2700, 550, "ice_wolf");
            this.spawnEnemy(3000, 550, "ice_wolf");
            this.spawnEnemy(3500, 400, "wolf");
            this.spawnEnemy(4200, 250, "bat");
            this.spawnEnemy(4700, 150, "bat");
            this.spawnEnemy(5200, 500, "ice_wolf");
            this.spawnEnemy(5700, 500, "wolf");
            this.spawnEnemy(6300, 350, "ice_wolf");
            this.spawnEnemy(6900, 200, "bat");
            this.spawnEnemy(7300, 500, "ice_wolf");
            this.spawnEnemy(7600, 500, "ice_wolf");
            
            this.spawnBoss(8100, 450, "cold_blood");
            this.game.ui.showDialogue(["The Ice Biome.", "Cold Blood guards the Green Core.", "Prepare for battle."]);
            
            if (targetBiome) {
                this.gate = new Gate(this.game.physics, this.game.renderer.scene, 8800, 420, targetBiome);
            }
            
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 100, 400, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 3700, 400, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 6300, 350, biomeName));
            
        } else if (biomeName === 'jungle') {
            // Expanded Jungle Biome
            this.createPlatform(500, 500, 2000, 40, color); // Safe start zone (-500 to 1500)
            this.createPlatform(1700, 400, 400, 20, color);
            this.createPlatform(2200, 300, 400, 20, color);
            this.createPlatform(2700, 200, 400, 20, color);
            this.createPlatform(3400, 600, 1200, 40, color); // Swamp floor
            this.createPlatform(4300, 450, 500, 20, color);
            this.createPlatform(4900, 300, 500, 20, color);
            this.createPlatform(5700, 600, 1000, 40, color);
            this.createPlatform(6400, 450, 400, 20, color);
            this.createPlatform(6900, 300, 400, 20, color);
            this.createPlatform(7400, 150, 400, 20, color);
            this.createPlatform(8400, 300, 2000, 40, color); // Boss Arena (7400 to 9400)
            
            this.spawnEnemy(1300, 400, "lizard");
            this.spawnEnemy(1700, 300, "spider");
            this.spawnEnemy(2200, 200, "bat");
            this.spawnEnemy(2700, 100, "bat");
            this.spawnEnemy(3100, 500, "crocodile");
            this.spawnEnemy(3500, 500, "crocodile");
            this.spawnEnemy(4300, 350, "lizard");
            this.spawnEnemy(4900, 200, "dragon");
            this.spawnEnemy(5400, 500, "crocodile");
            this.spawnEnemy(5900, 500, "spider");
            this.spawnEnemy(6400, 350, "lizard");
            this.spawnEnemy(6900, 200, "spider");
            this.spawnEnemy(7400, 50, "bat");
            this.spawnEnemy(7800, 200, "dragon");
            
            this.spawnBoss(8500, 150, "overgrowth");
            this.game.ui.showDialogue(["The Jungle.", "Overgrowth stands in your way.", "Defeat it to reveal the truth."]);
            
            // Just leaving the gate in place if there's ever a 4th biome
            this.gate = new Gate(this.game.physics, this.game.renderer.scene, 9200, 420, "victory"); 
            
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 100, 400, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 4300, 350, biomeName));
            this.checkpoints.push(new Checkpoint(this.game.physics, this.game.renderer.scene, 6400, 350, biomeName));
        }
    }
    
    async spawnEnemy(x, y, type = "wolf") {
        const e = new Enemy(this.game.physics, this.game.renderer.scene, this.game.assets, type);
        await e.init(x, y);
        this.game.enemies.push(e);
    }
    
    async spawnBoss(x, y, type) {
        this.game.boss = new Boss(this.game.physics, this.game.renderer.scene, this.game.assets, type);
        await this.game.boss.init(x, y);
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
