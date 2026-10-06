import * as THREE from 'three';
import * as Matter from 'matter-js';
import { AtlasAnimator } from '../rendering/AtlasAnimator.js';
import { CreatureConfig, getAnimMap } from './CreatureConfig.js';
import { Projectile } from './Projectile.js';

export class Enemy {
    constructor(physicsWorld, scene, assetManager, type = "wolf") {
        this.physics = physicsWorld;
        this.scene = scene;
        this.assetManager = assetManager;
        
        this.type = type;
        this.config = CreatureConfig[type] || CreatureConfig["villain"];
        
        this.body = null;
        this.sprite = null;
        this.animator = null;
        
        // Slightly randomize speed to prevent identical stacking
        this.speed = this.config.speed + (Math.random() * 0.5 - 0.25);
        this.direction = 1;
        
        this.isGrounded = false;
        
        this.health = this.config.hp;
        this.isHurt = false;
        this.hurtTimer = 0;
        
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
        
        this.specialCooldownTimer = this.config.specialAttackCooldown || 0;
        this.currentAttackType = "melee";
        this.hasFiredProjectile = false;
    }
    
    async init(x, y) {
        const isFlying = this.config.movementType === "flying";
        
        this.body = Matter.Bodies.rectangle(x, y, this.config.width, this.config.height, {
            inertia: Infinity,
            friction: 0.05,
            frictionAir: isFlying ? 0.05 : 0.02,
            restitution: 0.0,
            isSensor: isFlying // Flying creatures don't collide with platforms
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        // Anti-gravity for flying creatures
        if (isFlying) {
            this.body.plugin = { gravityScale: 0 }; 
            // We'll manually counter gravity in update
        }
        
        const geo = new THREE.PlaneGeometry(1, 1);
        this.sprite = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ transparent: true }));
        this.scene.add(this.sprite);
        
        const animMap = getAnimMap(this.config.folder, this.config.prefix);
        
        this.animator = new AtlasAnimator(this.sprite, this.assetManager, animMap);
        this.animator.baseScale = this.config.scale; 
        
        // Flying creatures always use 'run' as their flying loop
        this.animator.play(isFlying ? "run" : "idle", 8);
    }
    
    update(delta, playerBody) {
        if (!this.body || this.health <= 0) return;
        
        if (this.body.position.y > 1500) {
            this.die();
            return;
        }
        
        const isFlying = this.config.movementType === "flying";
        if (isFlying) {
            Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -0.001 * this.body.mass });
        }
        
        if (this.isHurt) {
            this.hurtTimer -= delta;
            if (this.hurtTimer <= 0) this.isHurt = false;
        } else if (this.isAttacking) {
            this.attackTimer -= delta;
            if (this.attackTimer <= 0) this.isAttacking = false;
            
            // Fire projectile during special attack windup
            if (this.currentAttackType === "special" && !this.hasFiredProjectile && this.attackTimer <= this.config.attackDuration / 2) {
                this.hasFiredProjectile = true;
                if (playerBody && game && game.projectiles) {
                    const distX = playerBody.position.x - this.body.position.x;
                    const distY = playerBody.position.y - this.body.position.y;
                    const dist = Math.sqrt(distX * distX + distY * distY) || 1;
                    
                    const p = new Projectile(
                        this.physics, 
                        this.scene, 
                        this.body.position.x + (this.direction * 20), 
                        this.body.position.y - 15, // Spawn higher to avoid hitting the floor instantly
                        distX / dist, 
                        distY / dist, 
                        this.config, 
                        this.config.specialAttack
                    );
                    game.projectiles.push(p);
                    console.log("DEBUG: FIRED", this.config.specialAttack);
                }
            }
            
            if (isFlying) {
                Matter.Body.setVelocity(this.body, { x: this.body.velocity.x * 0.9, y: this.body.velocity.y * 0.9 });
            } else {
                Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
            }
        } else {
            if (this.attackCooldown > 0) this.attackCooldown -= delta;
            if (this.specialCooldownTimer > 0) this.specialCooldownTimer -= delta;
            
            // Creature AI
            if (playerBody) {
                const distX = playerBody.position.x - this.body.position.x;
                const distY = playerBody.position.y - this.body.position.y;
                const dist = Math.sqrt(distX * distX + distY * distY);
                
                if (dist < this.config.detectionRange) {
                    this.direction = Math.sign(distX) || this.direction;
                    
                    let shouldSpecial = this.config.specialAttack && this.specialCooldownTimer <= 0 && dist <= this.config.specialAttackRange;
                    let shouldMelee = this.attackCooldown <= 0 && dist <= this.config.attackRange;
                    
                    if (shouldSpecial || shouldMelee) {
                        // Attack phase
                        if (isFlying) {
                            if (this.config.aiProfile === "swoop" || this.config.aiProfile === "aerial_heavy") {
                                Matter.Body.setVelocity(this.body, { x: this.direction * this.speed * -0.5, y: -2 });
                            } else {
                                Matter.Body.setVelocity(this.body, { x: this.body.velocity.x * 0.8, y: this.body.velocity.y * 0.8 });
                            }
                        } else {
                            if (this.config.aiProfile === "defensive") {
                                Matter.Body.setVelocity(this.body, { x: this.direction * -0.5, y: this.body.velocity.y });
                            } else if (this.config.aiProfile === "heavy") {
                                Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                            } else if (this.config.aiProfile === "pursuit") {
                                Matter.Body.setVelocity(this.body, { x: this.direction * 1.5, y: this.body.velocity.y });
                            } else {
                                Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                            }
                        }
                        
                        this.isAttacking = true;
                        this.hasFiredProjectile = false;
                        this.attackTimer = this.config.attackDuration; 
                        
                        if (shouldSpecial) {
                            this.currentAttackType = "special";
                            this.specialCooldownTimer = this.config.specialAttackCooldown;
                            this.attackCooldown = this.config.attackCooldown; // reset melee too
                        } else {
                            this.currentAttackType = "melee";
                            this.attackCooldown = this.config.attackCooldown;
                        }
                    } else {
                        // Move phase (not close enough to attack, or attacks on cooldown)
                        if (isFlying) {
                            let dirX = distX / dist;
                            let dirY = distY / dist;
                            
                            if (this.config.aiProfile === "swoop") {
                                Matter.Body.setVelocity(this.body, { x: dirX * this.speed, y: dirY * this.speed });
                            } else if (this.config.aiProfile === "aerial_heavy") {
                                if (Math.abs(distX) > 150) {
                                    const targetY = playerBody.position.y - 150;
                                    const altDistY = targetY - this.body.position.y;
                                    const altDist = Math.sqrt(distX * distX + altDistY * altDistY) || 1;
                                    dirX = distX / altDist;
                                    dirY = altDistY / altDist;
                                }
                                Matter.Body.setVelocity(this.body, { x: dirX * this.speed, y: dirY * this.speed });
                            } else {
                                Matter.Body.setVelocity(this.body, { x: dirX * this.speed, y: dirY * this.speed });
                            }
                        } else {
                            // Ground Move
                            let currentSpeed = this.speed;
                            if (this.config.aiProfile === "ambush") {
                                currentSpeed = this.speed * 1.5;
                            } else if (this.config.aiProfile === "defensive") {
                                currentSpeed = this.speed * 0.8;
                            }
                            
                            // Basic cliff detection
                            if (Math.abs(this.body.velocity.y) < 0.1) {
                                const checkX = this.body.position.x + (this.direction * 50);
                                const checkY = this.body.position.y + 50;
                                const bodies = Matter.Composite.allBodies(this.physics.engine.world);
                                let overFloor = false;
                                for (let b of bodies) {
                                    if (b.isStatic && !b.isSensor) {
                                        if (checkX > b.bounds.min.x && checkX < b.bounds.max.x &&
                                            checkY > b.bounds.min.y && checkY < b.bounds.max.y) {
                                            overFloor = true;
                                            break;
                                        }
                                    }
                                }
                                if (!overFloor) {
                                    currentSpeed = 0; 
                                }
                            }
                            
                            Matter.Body.setVelocity(this.body, { x: this.direction * currentSpeed, y: this.body.velocity.y });
                        }
                    }
                } else {
                    // Out of range, slow down
                    if (isFlying) {
                        Matter.Body.setVelocity(this.body, { x: this.body.velocity.x * 0.9, y: this.body.velocity.y * 0.9 });
                    } else {
                        Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                    }
                }
            } else {
                if (isFlying) {
                    Matter.Body.setVelocity(this.body, { x: this.body.velocity.x * 0.9, y: this.body.velocity.y * 0.9 });
                } else {
                    Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                }
            }
        }
        
        let state = "idle";
        if (this.health <= 0) {
            state = "death";
        } else if (this.isHurt) {
            state = "hurt";
        } else if (this.isAttacking) {
            state = "attack";
            this.animator.setFlipX(this.direction < 0);
        } else if (Math.abs(this.body.velocity.x) > 0.1 || (isFlying && Math.abs(this.body.velocity.y) > 0.1)) {
            state = "run";
            this.animator.setFlipX(this.direction < 0);
        } else {
            this.animator.setFlipX(this.direction < 0);
        }
        
        this.animator.play(state, 8);
        this.animator.update(delta);
        
        // Visual Hit Flash
        if (this.isHurt && this.sprite.material) {
            this.sprite.material.color.setHex(0xff5555);
        } else if (this.sprite.material) {
            this.sprite.material.color.setHex(0xffffff);
        }
        
        // Sync and Enforce Platform Bounds
        if (!isFlying && this.body.velocity.y > -0.1 && this.body.velocity.y < 0.1) {
            const margin = (this.config.width / 2) + 80;
            const bodies = Matter.Composite.allBodies(this.physics.engine.world);
            for (let b of bodies) {
                if (b.isStatic && !b.isSensor) {
                    if (this.body.position.x > b.bounds.min.x - 50 && this.body.position.x < b.bounds.max.x + 50) {
                        if (this.body.bounds.max.y <= b.bounds.min.y + 10 && this.body.bounds.max.y >= b.bounds.min.y - 100) {
                            const minX = b.bounds.min.x + margin;
                            const maxX = b.bounds.max.x - margin;
                            if (minX <= maxX) {
                                if (this.body.position.x < minX) {
                                    Matter.Body.setPosition(this.body, { x: minX, y: this.body.position.y });
                                    if (this.body.velocity.x < 0) Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                                } else if (this.body.position.x > maxX) {
                                    Matter.Body.setPosition(this.body, { x: maxX, y: this.body.position.y });
                                    if (this.body.velocity.x > 0) Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
        
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = -this.body.position.y;
    }
    
    takeDamage(amount, knockbackDir) {
        if (this.isHurt || this.health <= 0) return;
        
        this.health -= amount;
        this.isHurt = true;
        this.hurtTimer = 0.5;
        this.isAttacking = false; // Cancel attack
        
        // Knockback
        Matter.Body.setVelocity(this.body, { x: knockbackDir * 5, y: -5 });
        
        if (this.health <= 0) {
            this.die();
        }
    }
    
    die() {
        this.health = 0;
        this.scene.remove(this.sprite);
        if (this.body) {
            Matter.Composite.remove(this.physics.engine.world, this.body);
            this.body = null;
        }
    }
    
    canDealDamage() {
        if (!this.isAttacking) return false;
        return this.attackTimer <= 0.3 && this.attackTimer >= 0.1;
    }
}
