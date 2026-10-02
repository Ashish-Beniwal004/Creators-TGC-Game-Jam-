import * as Matter from 'matter-js';

export class LevelManager {
    constructor(game) {
        this.game = game; // reference to Game to access renderer, physics, assets
        this.currentBiome = 'dark';
    }
    
    loadLevel(biomeName) {
        this.currentBiome = biomeName;
        // In a real game, this would read from a JSON file mapped by Godot.
        // For now, we procedurally generate based on biome rules.
        
        // Clear old
        for (let p of this.game.platforms) {
            this.game.renderer.scene.remove(p.mesh);
            Matter.Composite.remove(this.game.physics.engine.world, p.body);
        }
        this.game.platforms = [];
        
        let color = 0x222222;
        if (biomeName === 'ice') color = 0x88ccff;
        if (biomeName === 'jungle') color = 0x228822;
        
        // Create floors and platforms
        this.createPlatform(400, 500, 2000, 40, color);
        this.createPlatform(600, 380, 200, 20, color);
        this.createPlatform(900, 300, 200, 20, color);
        
        // Spawn core if needed based on biome
        if (biomeName === 'dark' && !this.game.light.hasBlueCore) {
            this.createCore(1000, 250, 'blue');
        } else if (biomeName === 'ice' && !this.game.light.hasGreenCore) {
            this.createCore(1200, 200, 'green');
        }
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
        if (!player || !player.body) return;
        
        // Simple progression gating based on X position for Phase 28
        const px = player.body.position.x;
        
        // If we reach the end of the dark level, transition to ice
        if (this.currentBiome === 'dark' && px > 1500) {
            if (this.game.light.hasBlueCore) {
                this.loadLevel('ice');
                Matter.Body.setPosition(player.body, { x: 100, y: 300 });
            }
        } else if (this.currentBiome === 'ice' && px > 1500) {
            if (this.game.light.hasGreenCore) {
                this.loadLevel('jungle');
                Matter.Body.setPosition(player.body, { x: 100, y: 300 });
            }
        }
    }
}
