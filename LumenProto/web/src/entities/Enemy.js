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
            "idle": ["Gemini_Generated_Image_tvqq9itvqq9itvqq_000.webp"],
            "run": ["Gemini_Generated_Image_tvqq9itvqq9itvqq_000.webp"], // Fake run since we only have 1 frame extracted clearly
            "attack": ["Gemini_Generated_Image_tvqq9itvqq9itvqq_000.webp"]
        };
        
        this.animator = new AtlasAnimator(this.sprite, this.assetManager, animMap);
        this.animator.baseScale = 0.6; // Slightly larger than player
        this.animator.play("idle", 8);
    }
    
    update(delta, playerBody) {
        if (!this.body || this.health <= 0) return;
        
        if (this.isHurt) {
            this.hurtTimer -= delta;
            if (this.hurtTimer <= 0) this.isHurt = false;
        } else {
            // Simple AI: Move towards player
            if (playerBody) {
                const dist = playerBody.position.x - this.body.position.x;
                if (Math.abs(dist) > 50) {
                    this.direction = Math.sign(dist);
                } else {
                    this.direction = 0;
                }
            }
            Matter.Body.setVelocity(this.body, { x: this.direction * this.speed, y: this.body.velocity.y });
        }
        
        let state = "idle";
        if (this.health <= 0) {
            state = "death";
        } else if (this.isHurt) {
            state = "hurt";
        } else if (this.direction !== 0) {
            state = "run";
            this.animator.setFlipX(this.direction < 0);
        }
        
        this.animator.play(state, 8);
        this.animator.update(delta);
        
        // Sync
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = -this.body.position.y;
    }
    
    takeDamage(amount, knockbackDir) {
        if (this.isHurt || this.health <= 0) return;
        
        this.health -= amount;
        this.isHurt = true;
        this.hurtTimer = 0.5;
        
        // Knockback
        Matter.Body.setVelocity(this.body, { x: knockbackDir * 5, y: -5 });
        
        if (this.health <= 0) {
            // Die
            this.scene.remove(this.sprite);
            Matter.Composite.remove(this.physics.engine.world, this.body);
            this.body = null;
        }
    }
}
