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
import { UIAndDialogue } from '../systems/UIAndDialogue.js';
import { AudioManager } from '../systems/AudioManager.js';
import { EnvironmentRenderer } from '../rendering/EnvironmentRenderer.js';
import { Projectile } from '../entities/Projectile.js';
import * as Matter from 'matter-js';

export class Game {
    constructor() {
        this.renderer = new Renderer();
        this.physics = new PhysicsWorld();
        this.input = new InputSystem();
        this.assets = new AssetManager();
        this.combat = new CombatSystem(this.physics);
        this.light = new LightSystem();
        this.ui = new UIAndDialogue();
        this.audio = new AudioManager();
        this.levels = new LevelManager(this);
        this.environment = new EnvironmentRenderer(this.renderer.scene, this.assets);
        
        this.player = null;
        this.enemies = [];
        this.boss = null;
        this.platforms = [];
        this.projectiles = [];
        this.particles = null;
        
        this.lastTime = performance.now();
        this.frameCount = 0;
        this.fps = 0;
        this.lastFpsTime = this.lastTime;
        
        this.DEBUG_MODE = false;
        
        if (!this.DEBUG_MODE) {
            const debugUI = document.getElementById('debug-ui');
            if (debugUI) debugUI.style.display = 'none';
        }
    }

    async init() {
        // Init renderer, audio & assets
        await this.renderer.init();
        this.audio.init();
        await this.assets.init();
        
        // Init physics
        this.physics.init();
        
        // Init input
        this.input.init();
        
        // Create player
        this.player = new Player(this.physics, this.renderer.scene, this.input, this.assets);
        await this.player.init(100, 300);
        
        // Create level and environments
        await this.environment.init();
        await this.environment.loadBiome('dark');
        this.levels.loadLevel('dark');
        
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
        
        // (Input update moved to end of loop)
        
        const isDialogueActive = this.ui.dialogueBox.style.display === 'block';
        
        // Hit-Stop logic
        if (this.hitStopTimer > 0) {
            this.hitStopTimer -= deltaTime;
            this.renderer.render();
            requestAnimationFrame(this.loop.bind(this));
            return;
        }
        
        // Update physics step (60Hz) - freeze during dialogue
        if (!isDialogueActive) {
            this.physics.update(1000/60);
        }
        
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
                        
                        // Remove visual mesh
                        for (let i = 0; i < this.platforms.length; i++) {
                            if (this.platforms[i].body === b) {
                                this.renderer.scene.remove(this.platforms[i].mesh);
                                break;
                            }
                        }
                        
                        console.log(`Acquired ${color} core! LightPower is now ${this.light.lightPower}`);
                    }
                }
            }
        }
        
        // Update Level
        this.levels.update(this.player);
        
        // Handle input for dialogue and pause
        this.ui.handleInput(this.input);
        
        // Handle Restart
        if (this.ui.isDead && this.input.isJustPressed('KeyR')) {
            this.ui.isDead = false;
            this.ui.overlay.style.display = 'none';
            
            let spawnX = 100;
            let spawnY = 300;
            
            if (this.respawnPoint) {
                // Only load if biome changed (prevents unnecessary reloads)
                if (this.levels.currentBiome !== this.respawnPoint.biome) {
                    this.levels.loadLevel(this.respawnPoint.biome);
                } else {
                    // Just reset enemies if same biome
                    this.levels.resetEnemies();
                }
                spawnX = this.respawnPoint.x;
                spawnY = this.respawnPoint.y;
            } else {
                if (this.levels.currentBiome !== 'dark') this.levels.loadLevel('dark');
                else this.levels.resetEnemies();
            }
            
            this.player.resetAtCheckpoint(spawnX, spawnY);
            requestAnimationFrame(this.loop.bind(this));
            return;
        }
        
        // Block updates if paused or dead (except rendering/particles)
        if (this.ui.isPaused || this.ui.isDead) {
            this.renderer.render();
            this.input.update(); // Fix: Clear input buffer
            requestAnimationFrame(this.loop.bind(this));
            return;
        }
        
        // Update entities
        if (this.player) {
            // Disable player movement if dialogue is active
            if (isDialogueActive) {
                Matter.Body.setVelocity(this.player.body, { x: 0, y: this.player.body.velocity.y });
                this.player.animator.play("idle");
                this.player.animator.update(deltaTime);
                this.player.sprite.position.x = this.player.body.position.x;
                this.player.sprite.position.y = -this.player.body.position.y;
            } else {
                this.player.update(deltaTime);
                if (this.player.justJumped) {
                    this.audio.playJump();
                    this.player.justJumped = false;
                }
            }
            this.renderer.camera.follow(this.player.sprite.position, deltaTime);
            this.environment.update(this.renderer.camera.cam.position);
            
            let enemiesAlive = this.enemies.filter(e => e.health > 0).length;
            if (this.boss && this.boss.health > 0) {
                enemiesAlive += 1;
            }
            let totalEnemies = this.totalEnemiesLevel || 0;
            this.ui.updateHUD(this.player, this.light, totalEnemies - enemiesAlive, totalEnemies);
            
            // Combat logic only when dialogue is not active
            if (!isDialogueActive) {
                // Player attacks enemies
                if (this.player.canDealDamage()) {
                    for (let e of this.enemies) {
                        if (e.health > 0 && this.combat.checkMeleeHit(this.player, e, 80, this.player.direction)) {
                            e.takeDamage(this.player.damage || 10, this.player.direction);
                            this.audio.playHit();
                            this.renderer.camera.shake(2, 0.1);
                            this.hitStopTimer = 0.05; // 50ms hit stop
                        }
                    }
                    if (this.boss && this.boss.health > 0 && this.combat.checkMeleeHit(this.player, this.boss, 120, this.player.direction)) {
                        this.boss.takeDamage(this.player.damage || 10, this.player.direction);
                        this.audio.playHit();
                        this.renderer.camera.shake(4, 0.15);
                        this.hitStopTimer = 0.08; // Stronger hit stop for boss
                    }
                }
                
                // Enemies attack player
                for (let e of this.enemies) {
                    if (e.health > 0 && e.canDealDamage() && !this.player.isHurt) {
                        if (this.combat.checkMeleeHit(e, this.player, 80, e.direction)) {
                            this.player.takeDamage(e.config ? e.config.damage : 10, e.direction);
                            this.audio.playHit();
                            this.renderer.camera.shake(5, 0.2);
                            this.hitStopTimer = 0.05;
                        }
                    }
                }
                
                if (this.boss && this.boss.health > 0 && this.boss.canDealDamage() && !this.player.isHurt) {
                    if (this.combat.checkMeleeHit(this.boss, this.player, 150, this.boss.direction)) {
                        this.player.takeDamage(this.boss.damage || 20, this.boss.direction);
                        this.audio.playHit();
                        this.renderer.camera.shake(8, 0.3);
                        this.hitStopTimer = 0.1;
                    }
                }
            }
            
            // Projectile Updates & Collision
            if (this.projectiles) {
                for (let i = this.projectiles.length - 1; i >= 0; i--) {
                    let p = this.projectiles[i];
                    if (!isDialogueActive) {
                        p.update(deltaTime);
                    }
                    
                    if (p.isActive) {
                        // Check collision with player
                        if (this.player && this.player.health > 0 && !this.player.isHurt) {
                            if (Matter.Bounds.overlaps(p.body.bounds, this.player.body.bounds)) {
                                if (p.type === 'web') {
                                    if (this.player.isBlocking) {
                                        // Blocked: destroyed, minimal effect
                                        p.destroy();
                                    } else {
                                        // Slow player
                                        this.player.isWebbed = true;
                                        this.player.webTimer = 2.0; // 2 seconds slow
                                        this.player.takeDamage(p.damage, Math.sign(this.player.body.position.x - p.body.position.x));
                                        p.destroy();
                                    }
                                } else if (p.type === 'acid') {
                                    if (this.player.isBlocking) {
                                        this.player.takeDamage(Math.floor(p.damage / 4), Math.sign(this.player.body.position.x - p.body.position.x));
                                    } else {
                                        this.player.takeDamage(p.damage, Math.sign(this.player.body.position.x - p.body.position.x));
                                    }
                                    p.destroy();
                                }
                            }
                        }
                        
                        // Check collision with terrain
                        if (p.isActive) {
                            for (let platform of this.platforms) {
                                if (Matter.Bounds.overlaps(p.body.bounds, platform.body.bounds)) {
                                    p.destroy();
                                    break;
                                }
                            }
                        }
                    }
                    
                    if (!p.isActive) {
                        this.projectiles.splice(i, 1);
                    }
                }
            }

            
            // ISSUE 3: Void Death
            if (this.player.body.position.y > 1500) {
                if (this.player.health > 0) {
                    this.player.die();
                }
            }
        }
        
        // Update Enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            let e = this.enemies[i];
            if (!isDialogueActive) {
                e.update(deltaTime, this.player ? this.player.body : null, this);
            }
            if (!e.body) {
                this.enemies.splice(i, 1);
            }
        }
        
        if (this.boss) {
            if (!isDialogueActive) {
                this.boss.update(deltaTime, this.player ? this.player.body : null);
            }
            if (!this.boss.body) {
                this.boss = null;
            }
        }
        
        // Update particles
        if (this.particles) {
            this.particles.update(currentTime);
        }
        
        // Render
        this.renderer.render();
        
        // Clear justPressed for next frame
        this.input.update();
        
        requestAnimationFrame(this.loop.bind(this));
    }
    
    updateDebug() {
        if (!this.DEBUG_MODE) return;
        
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
                Enemies: ${this.enemies.length}<br>
                Boss Health: ${this.boss ? this.boss.health : 0}<br>
                LightPower: ${this.light.lightPower}<br>
            `;
        }
    }
}
