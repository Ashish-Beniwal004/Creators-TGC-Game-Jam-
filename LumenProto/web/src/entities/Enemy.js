import * as THREE from 'three';
import * as Matter from 'matter-js';
import { AtlasAnimator } from '../rendering/AtlasAnimator.js';

export class Enemy {
    constructor(physicsWorld, scene, assetManager) {
        this.physics = physicsWorld;
        this.scene = scene;
        this.assetManager = assetManager;
        
        this.body = null;
        this.sprite = null;
        this.animator = null;
        
        this.speed = 2.0;
        this.direction = 1;
        
        this.isGrounded = false;
        
        this.health = 30;
        this.isHurt = false;
        this.hurtTimer = 0;
        
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
    }
    
    async init(x, y) {
        this.body = Matter.Bodies.rectangle(x, y, 50, 100, {
            inertia: Infinity,
            friction: 0.05,
            frictionAir: 0.02,
            restitution: 0.0
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        const geo = new THREE.PlaneGeometry(1, 1);
        this.sprite = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ transparent: true }));
        this.scene.add(this.sprite);
        
        const animMap = {
            "idle": [
                "entities/villain_frames_4x4/villain_0_0.png",
                "entities/villain_frames_4x4/villain_0_1.png",
                "entities/villain_frames_4x4/villain_0_2.png",
                "entities/villain_frames_4x4/villain_0_3.png"
            ],
            "run": [
                "entities/villain_frames_4x4/villain_1_0.png",
                "entities/villain_frames_4x4/villain_1_1.png",
                "entities/villain_frames_4x4/villain_1_2.png",
                "entities/villain_frames_4x4/villain_1_3.png"
            ],
            "attack": [
                "entities/villain_frames_4x4/villain_2_0.png",
                "entities/villain_frames_4x4/villain_2_1.png",
                "entities/villain_frames_4x4/villain_2_2.png",
                "entities/villain_frames_4x4/villain_2_3.png"
            ],
            "hurt": ["entities/villain_frames_4x4/villain_3_0.png"],
            "death": [
                "entities/villain_frames_4x4/villain_3_2.png",
                "entities/villain_frames_4x4/villain_3_3.png"
            ]
        };
        
        this.animator = new AtlasAnimator(this.sprite, this.assetManager, animMap);
        this.animator.baseScale = 0.3; // Match 100px body height
        this.animator.play("idle", 8);
    }
    
    update(delta, playerBody) {
        if (!this.body || this.health <= 0) return;
        
        if (this.isHurt) {
            this.hurtTimer -= delta;
            if (this.hurtTimer <= 0) this.isHurt = false;
        } else if (this.isAttacking) {
            this.attackTimer -= delta;
            if (this.attackTimer <= 0) this.isAttacking = false;
            Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
        } else {
            if (this.attackCooldown > 0) this.attackCooldown -= delta;
            
            // Simple AI: Move towards player
            if (playerBody) {
                const dist = playerBody.position.x - this.body.position.x;
                if (Math.abs(dist) > 70) {
                    this.direction = Math.sign(dist);
                    Matter.Body.setVelocity(this.body, { x: this.direction * this.speed, y: this.body.velocity.y });
                } else {
                    this.direction = Math.sign(dist) || this.direction;
                    Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                    
                    if (this.attackCooldown <= 0) {
                        this.isAttacking = true;
                        this.attackTimer = 0.5; // 500ms attack animation
                        this.attackCooldown = 1.5; // 1.5s between attacks
                    }
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
        } else if (Math.abs(this.body.velocity.x) > 0.1) {
            state = "run";
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
            // Die
            this.scene.remove(this.sprite);
            Matter.Composite.remove(this.physics.engine.world, this.body);
            this.body = null;
        }
    }
    
    canDealDamage() {
        if (!this.isAttacking) return false;
        return this.attackTimer <= 0.3 && this.attackTimer >= 0.1;
    }
}
