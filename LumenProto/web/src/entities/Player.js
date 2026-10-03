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
        this.damage = 10;
        this.isHurt = false;
        this.hurtTimer = 0;
        this.isAttacking = false;
        this.attackTimer = 0;
        this.isBlocking = false;
        this.direction = 1;
        
        this.isWebbed = false;
        this.webTimer = 0;
        
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
        
        // Setup slash visual
        const slashGeo = new THREE.PlaneGeometry(60, 60);
        this.slashMesh = new THREE.Mesh(slashGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 }));
        this.slashMesh.visible = false;
        this.scene.add(this.slashMesh);
        
        // Setup block visual
        const blockGeo = new THREE.CircleGeometry(35, 32);
        this.blockMesh = new THREE.Mesh(blockGeo, new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.4 }));
        this.blockMesh.visible = false;
        this.scene.add(this.blockMesh);
        
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
        
        if (this.health > 0) {
            this.isBlocking = this.input.isDown('KeyC') && !this.isAttacking;
        }
        
        if (!this.isHurt) {
            let currentSpeed = this.isBlocking ? this.speed * 0.3 : this.speed;
            if (this.isWebbed) currentSpeed *= 0.5;
            
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
            
            Matter.Body.setVelocity(this.body, { x: moveX * currentSpeed, y: this.body.velocity.y });
            
            if ((this.input.isJustPressed('ArrowUp') || this.input.isJustPressed('KeyW') || this.input.isJustPressed('Space')) && this.isGrounded) {
                Matter.Body.setVelocity(this.body, { x: this.body.velocity.x, y: this.jumpForce });
                this.isGrounded = false;
                this.justJumped = true;
            }
            
            // Attack trigger
            if (this.input.isJustPressed('KeyX') && !this.isAttacking && !this.isBlocking) {
                this.isAttacking = true;
                this.attackTimer = 0.3; // 300ms attack duration
                // Hit-stop
                Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                
                // Show slash visual
                if (this.slashMesh) {
                    this.slashMesh.visible = true;
                    this.slashMesh.material.opacity = 0.8;
                }
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
        
        if (this.isWebbed) {
            this.webTimer -= delta;
            if (this.webTimer <= 0) this.isWebbed = false;
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
        
        // Visual indicator for blocking and hurt
        if (this.isHurt && this.sprite.material) {
            this.sprite.material.color.setHex(0xff5555);
        } else if (this.isBlocking && this.sprite.material) {
            this.sprite.material.color.setHex(0x55aaff);
        } else if (this.isWebbed && this.sprite.material) {
            this.sprite.material.color.setHex(0xccffcc); // pale green
        } else if (this.sprite.material) {
            this.sprite.material.color.setHex(0xffffff);
        }
        
        // Sync
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = -this.body.position.y;
        
        // Sync slash
        if (this.slashMesh) {
            this.slashMesh.position.x = this.body.position.x + (this.direction * 30);
            this.slashMesh.position.y = -this.body.position.y;
            this.slashMesh.scale.x = this.direction;
            if (this.slashMesh.material.opacity > 0) {
                this.slashMesh.material.opacity -= delta * 3;
            } else {
                this.slashMesh.visible = false;
            }
        }
        
        if (this.blockMesh) {
            this.blockMesh.position.x = this.body.position.x;
            this.blockMesh.position.y = -this.body.position.y;
            this.blockMesh.visible = this.isBlocking;
        }
    }
    
    takeDamage(amount, knockbackDir) {
        if (this.isHurt || this.health <= 0) return;
        
        if (this.isBlocking) {
            this.health -= Math.floor(amount / 4);
            Matter.Body.setVelocity(this.body, { x: knockbackDir * 2, y: 0 }); // minimal knockback
            this.isHurt = true;
            this.hurtTimer = 0.3; // slightly shorter invincibility for blocking
            // Do not cancel block, let player keep holding it
            if (this.health <= 0) this.die();
            return;
        }
        
        this.health -= amount;
        this.isHurt = true;
        this.hurtTimer = 0.5;
        this.isAttacking = false; // Cancel attack
        this.isBlocking = false;
        
        // Knockback
        Matter.Body.setVelocity(this.body, { x: knockbackDir * 5, y: -5 });
        
        if (this.health <= 0) this.die();
    }
    
    die() {
        this.health = 0;
        this.isHurt = true;
        this.isAttacking = false;
        this.isBlocking = false;
        Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
        if (this.blockMesh) this.blockMesh.visible = false;
    }
    
    resetAtCheckpoint(x, y) {
        this.health = 100;
        this.isHurt = false;
        this.hurtTimer = 0;
        this.isAttacking = false;
        this.attackTimer = 0;
        this.isBlocking = false;
        this.isWebbed = false;
        this.webTimer = 0;
        
        // Explicitly clear velocity and forces
        Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(this.body, 0);
        this.body.force = { x: 0, y: 0 };
        
        // Explicit teleport
        Matter.Body.setPosition(this.body, { x: x, y: y });
        
        // Visual sync immediately
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = -this.body.position.y;
        this.animator.play("idle", 8);
        if (this.slashMesh) {
            this.slashMesh.visible = false;
        }
    }
    
    canDealDamage() {
        if (!this.isAttacking) return false;
        if (this.animator.currentState === "attack") {
            // The attack animation has 5 frames: 0, 1, 2, 3, 4
            // Deal damage on frames 2, 3, or 4 (the swing and follow-through)
            return this.animator.frameIndex >= 2;
        }
        return false;
    }
}
