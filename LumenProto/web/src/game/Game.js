import { Renderer } from '../rendering/Renderer.js';
import { PhysicsWorld } from '../physics/PhysicsWorld.js';
import { Player } from '../entities/Player.js';
import { Enemy } from '../entities/Enemy.js';
import { InputSystem } from '../systems/InputSystem.js';
import { ParticleSystem } from '../systems/ParticleSystem.js';
import { AssetManager } from '../rendering/AssetManager.js';
import * as Matter from 'matter-js';

export class Game {
    constructor() {
        this.renderer = new Renderer();
        this.physics = new PhysicsWorld();
        this.input = new InputSystem();
        this.assets = new AssetManager();
        
        this.player = null;
        this.enemy = null;
        this.platforms = [];
        this.particles = null;
        
        this.lastTime = performance.now();
        this.frameCount = 0;
        this.fps = 0;
        this.lastFpsTime = this.lastTime;
    }

    async init() {
        // Init renderer & assets
        await this.renderer.init();
        await this.assets.init();
        
        // Init physics
        this.physics.init();
        
        // Init input
        this.input.init();
        
        // Create level
        this.createLevel();
        
        // Create player
        this.player = new Player(this.physics, this.renderer.scene, this.input, this.assets);
        await this.player.init(100, 300);
        
        // Create enemy
        this.enemy = new Enemy(this.physics, this.renderer.scene, this.assets);
        await this.enemy.init(600, 300);
        
        // Add InstancedBufferGeometry particles (Spores/Dust)
        this.particles = new ParticleSystem(this.renderer.scene);
        this.particles.init(1000); // 1000 background spores
        
        // Start loop
        requestAnimationFrame(this.loop.bind(this));
        
        console.log("Lumen Web Boot Complete");
    }
    
    createLevel() {
        // Floor
        const floor = Matter.Bodies.rectangle(400, 500, 1000, 40, { isStatic: true });
        Matter.Composite.add(this.physics.engine.world, floor);
        
        // Add a visual block for the floor
        this.renderer.createBox(400, 500, 1000, 40, 0x222222);
        
        // A platform
        const plat = Matter.Bodies.rectangle(600, 380, 200, 20, { isStatic: true });
        Matter.Composite.add(this.physics.engine.world, plat);
        this.renderer.createBox(600, 380, 200, 20, 0x333333);
        
        this.platforms.push(floor, plat);
    }

    loop(currentTime) {
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        this.frameCount++;
        if (currentTime - this.lastFpsTime >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastFpsTime = currentTime;
            this.updateDebug();
        }
        
        // Update input
        this.input.update();
        
        // Update physics step (60Hz)
        this.physics.update(1000/60);
        
        // Update entities
        if (this.player) {
            this.player.update(deltaTime);
            this.renderer.camera.follow(this.player.sprite.position);
        }
        
        if (this.enemy) {
            this.enemy.update(deltaTime, this.player ? this.player.body : null);
        }
        
        // Update particles
        if (this.particles) {
            this.particles.update(currentTime);
        }
        
        // Render
        this.renderer.render();
        
        requestAnimationFrame(this.loop.bind(this));
    }
    
    updateDebug() {
        const debugUI = document.getElementById('debug-ui');
        if (debugUI && this.player) {
            const pos = this.player.body.position;
            const anim = this.player.animator;
            debugUI.innerHTML = `
                FPS: ${this.fps}<br>
                Player Pos: ${Math.round(pos.x)}, ${Math.round(pos.y)}<br>
                Player State: ${anim ? anim.currentState : 'none'}<br>
                Frame: ${anim ? anim.frameIndex + 1 + '/' + anim.frames.length : '0'}<br>
            `;
        }
    }
}
