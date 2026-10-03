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
        
        // Create floors and platforms
        this.createPlatform(400, 500, 2000, 40, color);
        this.createPlatform(600, 380, 200, 20, color);
        this.createPlatform(900, 300, 200, 20, color);
        
        this.createPlatform(1500, 300, 400, 40, color); // Biome gate platform
        
        // Spawn core if needed based on biome
        if (biomeName === 'dark' && !this.game.light.hasBlueCore) {
            this.createCore(1000, 250, 'blue');
            this.spawnEnemy(800, 300);
            this.spawnEnemy(1200, 200);
            this.game.ui.showDialogue(["Welcome to the Dark World.", "The light has faded.", "Find the Blue Core to restore the Ice."]);
        } else if (biomeName === 'ice' && !this.game.light.hasGreenCore) {
            this.createCore(1200, 200, 'green');
            this.spawnBoss(1000, 300, "cold_blood");
            this.game.ui.showDialogue(["The Ice Biome.", "Cold Blood guards the Green Core."]);
        } else if (biomeName === 'jungle') {
            this.spawnBoss(1000, 300, "overgrowth");
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
