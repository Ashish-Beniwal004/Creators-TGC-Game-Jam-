import * as THREE from 'three';
import * as Matter from 'matter-js';
import { AtlasAnimator } from '../rendering/AtlasAnimator.js';

export class Player {
    constructor(physicsWorld, scene, inputSystem, assetManager) {
        this.physics = physicsWorld;
        this.scene = scene;
        this.input = inputSystem;
        this.assetManager = assetManager;
        
        this.body = null;
        this.sprite = null;
        this.animator = null;
        
        this.isGrounded = false;
        
        // Combat
        this.health = 100;
        this.isHurt = false;
        this.hurtTimer = 0;
        this.isAttacking = false;
        this.attackTimer = 0;
        this.direction = 1;
        
        // Godot equivalents
        this.speed = 4.0;
        this.jumpForce = -12.0;
    }
    
    async init(x, y) {
        this.body = Matter.Bodies.rectangle(x, y, 40, 80, {
            inertia: Infinity,
            friction: 0.05,
            frictionAir: 0.02,
            restitution: 0.0
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        // Setup Three.js sprite
        const geo = new THREE.PlaneGeometry(1, 1); // Scale handled by animator
        this.sprite = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ transparent: true }));
        this.scene.add(this.sprite);
        
        // Setup Animator
        const animMap = {
            "idle": ["entities/player_frames/player_frame_0.png"],
            "run": [
                "entities/player_frames/player_frame_0.png",
                "entities/player_frames/player_frame_1.png",
                "entities/player_frames/player_frame_2.png",
                "entities/player_frames/player_frame_3.png",
                "entities/player_frames/player_frame_5.png",
                "entities/player_frames/player_frame_20.png"
            ],
            "jump": ["entities/player_frames/player_frame_5.png"],
            "fall": ["entities/player_frames/player_frame_2.png"],
            "attack": [
                "entities/player_frames/player_frame_12.png",
                "entities/player_frames/player_frame_17.png",
                "entities/player_frames/player_frame_6.png",
                "entities/player_frames/player_frame_21.png",
                "entities/player_frames/player_frame_25.png"
            ],
            "hurt": ["entities/player_frames/player_frame_28.png"],
            "death": ["entities/player_frames/player_frame_36.png"]
        };
        
        this.animator = new AtlasAnimator(this.sprite, this.assetManager, animMap);
        this.animator.baseScale = 0.35; // Tune to match Godot scale
        this.animator.play("idle", 8);
    }
    
    update(delta) {
        if (!this.body) return;
        
        this.isGrounded = Math.abs(this.body.velocity.y) < 0.1;
        
        let moveX = 0;
        let isMoving = false;
        
        if (!this.isHurt) {
            if (this.input.isDown('ArrowLeft') || this.input.isDown('KeyA')) {
                moveX = -1;
                isMoving = true;
                this.direction = -1;
                this.animator.setFlipX(true);
            } else if (this.input.isDown('ArrowRight') || this.input.isDown('KeyD')) {
                moveX = 1;
                isMoving = true;
                this.direction = 1;
                this.animator.setFlipX(false);
            }
            
            Matter.Body.setVelocity(this.body, { x: moveX * this.speed, y: this.body.velocity.y });
            
            if ((this.input.isDown('ArrowUp') || this.input.isDown('KeyW') || this.input.isDown('Space')) && this.isGrounded) {
                Matter.Body.setVelocity(this.body, { x: this.body.velocity.x, y: this.jumpForce });
                this.isGrounded = false;
            }
            
            // Attack trigger
            if (this.input.isJustPressed('KeyX') && !this.isAttacking) {
                this.isAttacking = true;
                this.attackTimer = 0.3; // 300ms attack duration
                // Stop moving while attacking (hit-stop)
                Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
            }
        }
        
        // Timers
        if (this.isAttacking) {
            this.attackTimer -= delta;
            if (this.attackTimer <= 0) this.isAttacking = false;
        }
        
        if (this.isHurt) {
            this.hurtTimer -= delta;
            if (this.hurtTimer <= 0) this.isHurt = false;
        }
        
        // Animation State Machine
        let state = "idle";
        let fps = 8;
        
        if (this.health <= 0) {
            state = "death"; // fallback if mapped
        } else if (this.isHurt) {
            state = "hurt"; // fallback
        } else if (this.isAttacking) {
            state = "attack";
            fps = 15;
        } else if (!this.isGrounded) {
            if (this.body.velocity.y < 0) {
                state = "jump";
            } else {
                state = "fall";
            }
        } else if (isMoving) {
            state = "run";
            fps = 12;
        }
        
        this.animator.play(state, fps);
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
        this.isAttacking = false; // Cancel attack
        
        // Knockback
        Matter.Body.setVelocity(this.body, { x: knockbackDir * 5, y: -5 });
    }
}
