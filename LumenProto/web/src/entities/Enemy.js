import * as THREE from 'three';
import * as Matter from 'matter-js';
import { AtlasAnimator } from '../rendering/AtlasAnimator.js';
import { CreatureConfig, getAnimMap } from './CreatureConfig.js';

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
        
        this.speed = this.config.speed;
        this.direction = 1;
        
        this.isGrounded = false;
        
        this.health = this.config.hp;
        this.isHurt = false;
        this.hurtTimer = 0;
        
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
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
            
            if (isFlying) {
                Matter.Body.setVelocity(this.body, { x: this.body.velocity.x * 0.9, y: this.body.velocity.y * 0.9 });
            } else {
                Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
            }
        } else {
            if (this.attackCooldown > 0) this.attackCooldown -= delta;
            
            // Creature AI
            if (playerBody) {
                const distX = playerBody.position.x - this.body.position.x;
                // For flying creatures, they need to fly down to the player
                const distY = playerBody.position.y - this.body.position.y;
                const dist = Math.sqrt(distX * distX + distY * distY);
                
                if (dist < this.config.detectionRange && dist > this.config.attackRange) {
                    this.direction = Math.sign(distX);
                    
                    if (isFlying) {
                        const dirX = distX / dist;
                        const dirY = distY / dist;
                        Matter.Body.setVelocity(this.body, { x: dirX * this.speed, y: dirY * this.speed });
                    } else {
                        Matter.Body.setVelocity(this.body, { x: this.direction * this.speed, y: this.body.velocity.y });
                    }
                } else if (dist <= this.config.attackRange) {
                    this.direction = Math.sign(distX) || this.direction;
                    if (isFlying) {
                        Matter.Body.setVelocity(this.body, { x: this.body.velocity.x * 0.8, y: this.body.velocity.y * 0.8 });
                    } else {
                        Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                    }
                    
                    if (this.attackCooldown <= 0) {
                        this.isAttacking = true;
                        this.attackTimer = this.config.attackDuration; 
                        this.attackCooldown = this.config.attackCooldown; 
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
        
        // Sync
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
