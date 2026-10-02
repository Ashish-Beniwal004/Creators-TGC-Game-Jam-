import * as THREE from 'three';
import * as Matter from 'matter-js';

export class Player {
    constructor(physicsWorld, scene, inputSystem) {
        this.physics = physicsWorld;
        this.scene = scene;
        this.input = inputSystem;
        
        this.body = null;
        this.sprite = null;
        this.material = null;
        
        this.isGrounded = false;
        
        // Godot equivalents
        this.speed = 4.0;
        this.jumpForce = -12.0;
    }
    
    async init(x, y) {
        // Matter.js body
        this.body = Matter.Bodies.rectangle(x, y, 40, 80, {
            inertia: Infinity, // don't rotate
            friction: 0.05,
            frictionAir: 0.02,
            restitution: 0.0 // don't bounce
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        // Load actual sprite (first frame of idle)
        const textureLoader = new THREE.TextureLoader();
        try {
            const texture = await textureLoader.loadAsync('/web/Gemini_Generated_Image_1en0xl1en0xl1en0_000.webp');
            this.material = new THREE.MeshBasicMaterial({ 
                map: texture,
                transparent: true,
                alphaTest: 0.1
            });
            const geo = new THREE.PlaneGeometry(80, 80); // Size relative to extracted webp
            this.sprite = new THREE.Mesh(geo, this.material);
            this.scene.add(this.sprite);
        } catch (e) {
            console.error("Failed to load player sprite, using fallback block", e);
            const geo = new THREE.BoxGeometry(40, 80, 10);
            this.material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
            this.sprite = new THREE.Mesh(geo, this.material);
            this.scene.add(this.sprite);
        }
    }
    
    update() {
        // Check grounded (simple vertical velocity check + raycast ideally, but simple vel check for Phase 24)
        this.isGrounded = Math.abs(this.body.velocity.y) < 0.1;
        
        // Horizontal movement
        let moveX = 0;
        if (this.input.isDown('ArrowLeft') || this.input.isDown('KeyA')) {
            moveX = -1;
            this.sprite.scale.x = -1; // flip sprite
        } else if (this.input.isDown('ArrowRight') || this.input.isDown('KeyD')) {
            moveX = 1;
            this.sprite.scale.x = 1;
        }
        
        Matter.Body.setVelocity(this.body, { x: moveX * this.speed, y: this.body.velocity.y });
        
        // Jump
        if ((this.input.isDown('ArrowUp') || this.input.isDown('KeyW') || this.input.isDown('Space')) && this.isGrounded) {
            Matter.Body.setVelocity(this.body, { x: this.body.velocity.x, y: this.jumpForce });
        }
        
        // Sync Three.js mesh to Matter.js body
        // Matter.js Y is down, Three.js Y is up
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = -this.body.position.y;
    }
}
