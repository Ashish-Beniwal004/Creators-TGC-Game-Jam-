import { Renderer } from '../rendering/Renderer.js';
import { PhysicsWorld } from '../physics/PhysicsWorld.js';
import { Player } from '../entities/Player.js';
import { Enemy } from '../entities/Enemy.js';
import { InputSystem } from '../systems/InputSystem.js';
import { ParticleSystem } from '../systems/ParticleSystem.js';
import { AssetManager } from '../rendering/AssetManager.js';
import { CombatSystem } from '../systems/CombatSystem.js';
import { LightSystem } from '../systems/LightSystem.js';
import { LevelManager } from '../levels/LevelManager.js';
import * as Matter from 'matter-js';

export class Game {
    constructor() {
        this.renderer = new Renderer();
        this.physics = new PhysicsWorld();
        this.input = new InputSystem();
        this.assets = new AssetManager();
        this.combat = new CombatSystem(this.physics);
        this.light = new LightSystem();
        this.levels = new LevelManager(this);
        
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
        this.levels.loadLevel('dark');
        
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
        
        // Handle Core collection sensors
        if (this.player && this.player.body) {
            const playerBounds = this.player.body.bounds;
            const bodies = Matter.Composite.allBodies(this.physics.engine.world);
            for (let b of bodies) {
                if (b.isSensor && b.label.startsWith('core_')) {
                    if (Matter.Bounds.overlaps(playerBounds, b.bounds)) {
                        const color = b.label.split('_')[1];
                        this.light.acquireCore(color);
                        Matter.Composite.remove(this.physics.engine.world, b);
                        b.label = "collected"; // prevent multiple triggers
                        console.log(`Acquired ${color} core! LightPower is now ${this.light.lightPower}`);
                    }
                }
            }
        }
        
        // Update Level
        this.levels.update(this.player);
        
        // Update entities
        if (this.player) {
            this.player.update(deltaTime);
            this.renderer.camera.follow(this.player.sprite.position);
            
            // Player attacks enemy
            if (this.player.isAttacking && this.enemy && this.enemy.health > 0) {
                if (this.combat.checkMeleeHit(this.player, this.enemy, 80, this.player.direction)) {
                    this.enemy.takeDamage(10, this.player.direction);
                }
            }
            
            // Enemy touches player
            if (this.enemy && this.enemy.health > 0 && !this.player.isHurt) {
                if (this.combat.checkMeleeHit(this.enemy, this.player, 50, this.enemy.direction)) {
                    this.player.takeDamage(10, this.enemy.direction);
                }
            }
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
                Biome: ${this.levels.currentBiome}<br>
                Player Pos: ${Math.round(pos.x)}, ${Math.round(pos.y)}<br>
                Player State: ${anim ? anim.currentState : 'none'}<br>
                Player Health: ${this.player.health}<br>
                Enemy Health: ${this.enemy ? this.enemy.health : 0}<br>
                LightPower: ${this.light.lightPower}<br>
            `;
        }
    }
}
