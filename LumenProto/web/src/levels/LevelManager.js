import * as Matter from 'matter-js';
import { Enemy } from '../entities/Enemy.js';
import { Boss } from '../entities/Boss.js';
import { Checkpoint } from '../entities/Checkpoint.js';
import { Gate } from '../entities/Gate.js';

export class LevelManager {
    constructor(game) {
        this.game = game;
        this.currentBiome = 'dark';
    }
    
    loadLevel(biomeName) {
        this.currentBiome = biomeName;
        // In a real game, this would read from a JSON file mapped by Godot.
        // For now, we procedurally generate based on biome rules.
        
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
        
        if (this.checkpoint) {
            this.checkpoint.destroy();
            this.checkpoint = null;
        }
        if (this.gate) {
            this.gate.destroy();
            this.gate = null;
        }
        
        let color = 0x222222;
        if (biomeName === 'ice') color = 0x88ccff;
        if (biomeName === 'jungle') color = 0x228822;
        
        // Create floors, platforms, and entities based on biome
        if (biomeName === 'dark') {
            // Dark Biome: Intro, simple gaps, vertical platforms
            this.createPlatform(300, 500, 600, 40, color); // Start floor
            this.createPlatform(675, 400, 150, 20, color); // Gap platform
            this.createPlatform(1000, 500, 500, 40, color); // Mid floor
            this.createPlatform(1150, 350, 200, 20, color); // Upper platform
            this.createPlatform(1600, 500, 600, 40, color); // Gate floor
            
            if (!this.game.light.hasBlueCore) {
                this.createCore(1150, 250, 'blue');
            }
            this.spawnEnemy(1000, 400);
            this.spawnEnemy(1150, 250);
            this.game.ui.showDialogue(["Welcome to the Dark World.", "The light has faded.", "Find the Blue Core to restore the Ice."]);
            
        } else if (biomeName === 'ice') {
            // Ice Biome: Sunken arena for boss
            this.createPlatform(200, 500, 600, 40, color); // Start floor
            this.createPlatform(550, 400, 150, 20, color); // Step down
            this.createPlatform(900, 600, 800, 40, color); // Boss Arena (lower)
            this.createPlatform(1250, 400, 150, 20, color); // Step up
            this.createPlatform(1600, 500, 600, 40, color); // Gate floor
            
            if (!this.game.light.hasGreenCore) {
                this.createCore(900, 450, 'green');
            }
            this.spawnBoss(900, 500, "cold_blood");
            this.game.ui.showDialogue(["The Ice Biome.", "Cold Blood guards the Green Core.", "Prepare for battle."]);
            
        } else if (biomeName === 'jungle') {
            // Jungle Biome: Vertical climbing
            this.createPlatform(200, 500, 400, 40, color); // Start floor
            this.createPlatform(450, 380, 150, 20, color); // Step 1
            this.createPlatform(700, 260, 150, 20, color); // Step 2
            this.createPlatform(1100, 260, 600, 40, color); // High Boss Arena
            this.createPlatform(1600, 500, 400, 40, color); // Low Gate exit
            this.createPlatform(1350, 380, 150, 20, color); // Step down
            
            this.spawnBoss(1100, 150, "overgrowth");
            this.game.ui.showDialogue(["The Jungle.", "Overgrowth stands in your way.", "Defeat it to reveal the truth."]);
        }
        
        // Spawn checkpoint at beginning
        this.checkpoint = new Checkpoint(this.game.physics, this.game.renderer.scene, 100, 400, biomeName);
        
        let targetBiome = null;
        if (biomeName === 'dark') targetBiome = 'ice';
        else if (biomeName === 'ice') targetBiome = 'jungle';
        
        if (targetBiome) {
            this.gate = new Gate(this.game.physics, this.game.renderer.scene, 1500, 420, targetBiome);
        }
    }
    
    async spawnEnemy(x, y) {
        const e = new Enemy(this.game.physics, this.game.renderer.scene, this.game.assets);
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
        // Just a visual representation for now. Sensor will be added later if needed.
        const color = type === 'blue' ? 0x0000ff : 0x00ff00;
        const body = Matter.Bodies.circle(x, y, 20, { isStatic: true, isSensor: true, label: `core_${type}` });
        Matter.Composite.add(this.game.physics.engine.world, body);
        const mesh = this.game.renderer.createBox(x, y, 40, 40, color);
        this.game.platforms.push({ body, mesh }); // Push to platforms array just so it cleans up on level load
    }
    
    update(player) {
        if (!player || !player.body || this.game.ui.isDead) return;
        
        // Handle Checkpoint
        if (this.checkpoint && !this.checkpoint.isActivated) {
            if (Matter.Bounds.overlaps(player.body.bounds, this.checkpoint.body.bounds)) {
                this.checkpoint.activate();
                this.game.respawnPoint = { x: this.checkpoint.x, y: this.checkpoint.y - 50, biome: this.checkpoint.biomeId };
                this.game.ui.showDialogue(["Checkpoint Reached.", "Progress Saved."]);
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
        
        // Handle Gate transition or locked message
        if (this.gate) {
            if (Matter.Bounds.overlaps(player.body.bounds, this.gate.body.bounds)) {
                if (this.gate.isUnlocked) {
                    this.loadLevel(this.gate.targetBiome);
                    Matter.Body.setPosition(player.body, { x: 100, y: 300 });
                } else if (!this.gate.messageShown) {
                    const enemiesLeft = this.game.enemies.length;
                    this.game.ui.showDialogue([
                        "BIOME NOT CLEARED.",
                        `${enemiesLeft} ENEMIES REMAIN.`
                    ]);
                    this.gate.messageShown = true;
                    
                    // Reset message shown after a few seconds so it doesn't spam, but can trigger again
                    setTimeout(() => {
                        if (this.gate) this.gate.messageShown = false;
                    }, 5000);
                }
            }
        }
    }
}
