import * as THREE from 'three';
import * as Matter from 'matter-js';
import { AtlasAnimator } from '../rendering/AtlasAnimator.js';

export class Boss {
    constructor(physicsWorld, scene, assetManager, type = "cold_blood") {
        this.physics = physicsWorld;
        this.scene = scene;
        this.assetManager = assetManager;
        this.type = type; // "cold_blood" or "overgrowth"
        
        this.body = null;
        this.sprite = null;
        this.animator = null;
        
        this.speed = 1.5;
        this.direction = -1;
        this.health = 300;
        
        this.isHurt = false;
        this.hurtTimer = 0;
        
        this.state = "idle";
        this.stateTimer = 0;
        
        // telegraphing
        this.telegraphMesh = null;
    }
    
    async init(x, y) {
        this.body = Matter.Bodies.rectangle(x, y, 100, 150, {
            inertia: Infinity,
            friction: 0.05,
            frictionAir: 0.02,
            restitution: 0.0
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        const geo = new THREE.PlaneGeometry(1, 1);
        this.sprite = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ transparent: true }));
        this.scene.add(this.sprite);
        
        let folder = "villain_frames_4x4";
        let prefix = "villain";
        
        if (this.type === "cold_blood") {
            folder = "ice_boss_frames";
            prefix = "iceboss";
        } else if (this.type === "overgrowth") {
            folder = "jungle_boss_frames";
            prefix = "jungleboss";
        } else if (this.type === "dark_boss") {
            folder = "dark_boss_frames";
            prefix = "darkboss";
        }
        
        const animMap = {
            "idle": [
                `entities/${folder}/${prefix}_0_0.png`,
                `entities/${folder}/${prefix}_0_1.png`,
                `entities/${folder}/${prefix}_0_2.png`,
                `entities/${folder}/${prefix}_0_3.png`
            ],
            "run": [ // Row 1 is a charge/attack for bosses, let's use idle for run, or row 0
                `entities/${folder}/${prefix}_0_0.png`,
                `entities/${folder}/${prefix}_0_1.png`,
                `entities/${folder}/${prefix}_0_2.png`,
                `entities/${folder}/${prefix}_0_3.png`
            ],
            "attack": [ // Row 2 is typically the big swing
                `entities/${folder}/${prefix}_2_0.png`,
                `entities/${folder}/${prefix}_2_1.png`,
                `entities/${folder}/${prefix}_2_2.png`,
                `entities/${folder}/${prefix}_2_3.png`
            ],
            "hurt": [ // Row 3 start
                `entities/${folder}/${prefix}_3_0.png`,
                `entities/${folder}/${prefix}_3_1.png`
            ],
            "death": [ // Row 3 end
                `entities/${folder}/${prefix}_3_1.png`,
                `entities/${folder}/${prefix}_3_2.png`,
                `entities/${folder}/${prefix}_3_3.png`
            ]
        };
        
        this.animator = new AtlasAnimator(this.sprite, this.assetManager, animMap);
        this.animator.baseScale = 0.25; // Huge
        this.animator.play("idle", 8);
        
        // Telegraph Mesh
        this.telegraphMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(150, 10),
            new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.0 })
        );
        this.scene.add(this.telegraphMesh);
    }
    
    update(delta, playerBody) {
        if (!this.body || this.health <= 0) return;
        
        if (this.body.position.y > 1500) {
            this.die();
            return;
        }
        
        if (this.isHurt) {
            this.hurtTimer -= delta;
            if (this.hurtTimer <= 0) this.isHurt = false;
        }
        
        // Boss State Machine (Idle -> Telegraph -> Attack -> Run -> Idle)
        this.stateTimer -= delta;
        if (this.stateTimer <= 0) {
            this.transitionState();
        }
        
        // Behavior
        if (this.state === "run" && playerBody) {
            const dist = playerBody.position.x - this.body.position.x;
            if (Math.abs(dist) > 80) {
                this.direction = Math.sign(dist);
                Matter.Body.setVelocity(this.body, { x: this.direction * this.speed, y: this.body.velocity.y });
                this.animator.play("run");
            } else {
                Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
                // If in range, stop running and start telegraphing
                if (this.stateTimer > 0) {
                    this.state = "telegraph";
                    this.stateTimer = 1.0;
                }
            }
        } else if (this.state === "idle") {
            Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
            this.animator.play("idle");
        } else if (this.state === "telegraph") {
            Matter.Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y });
            this.telegraphMesh.material.opacity = 0.5 + Math.sin(Date.now() * 0.02) * 0.3; // Blink
        } else if (this.state === "attack") {
            this.telegraphMesh.material.opacity = 0.0;
            this.animator.play("attack");
            // Hitbox trigger in Game.js
        }
        
        this.animator.setFlipX(this.direction < 0);
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
        
        this.telegraphMesh.position.x = this.body.position.x + (this.direction * 75);
        this.telegraphMesh.position.y = -this.body.position.y - 20;
    }
    
    transitionState() {
        if (this.state === "idle") {
            this.state = "run";
            this.stateTimer = 3.0; // Chase for 3s
        } else if (this.state === "run") {
            this.state = "telegraph";
            this.stateTimer = 1.0; // Telegraph for 1s
        } else if (this.state === "telegraph") {
            this.state = "attack";
            this.stateTimer = 0.5; // Attack for 0.5s
        } else {
            this.state = "idle";
            this.stateTimer = 1.0;
            this.telegraphMesh.material.opacity = 0.0;
        }
    }
    
    takeDamage(amount, knockbackDir) {
        if (this.isHurt || this.health <= 0) return;
        
        this.health -= amount;
        this.isHurt = true;
        this.hurtTimer = 0.2; // Less hitstun for boss
        
        if (this.health <= 0) {
            this.die();
        }
    }
    
    die() {
        this.health = 0;
        this.scene.remove(this.sprite);
        this.scene.remove(this.telegraphMesh);
        if (this.body) {
            Matter.Composite.remove(this.physics.engine.world, this.body);
            this.body = null;
        }
    }
    
    canDealDamage() {
        if (this.state !== "attack") return false;
        // Attack state lasts 0.5s (stateTimer counts down from 0.5 to 0)
        // Only deal damage in the middle of the attack
        return this.stateTimer <= 0.4 && this.stateTimer >= 0.2;
    }
}
