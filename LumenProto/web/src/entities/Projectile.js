import * as THREE from 'three';
import * as Matter from 'matter-js';

export class Projectile {
    constructor(physics, scene, x, y, dirX, dirY, config, type) {
        this.physics = physics;
        this.scene = scene;
        this.type = type; // "web" or "acid"
        this.damage = config.specialAttackDamage;
        this.speed = config.specialAttackProjectileSpeed;
        
        this.lifetime = 3.0; // max 3 seconds
        this.isActive = true;
        
        // Physics Body (Sensor so it doesn't push the player around)
        this.body = Matter.Bodies.circle(x, y, 10, {
            isSensor: true,
            label: "projectile_" + this.type
        });
        
        // Set initial velocity
        Matter.Body.setVelocity(this.body, { x: dirX * this.speed, y: dirY * this.speed });
        // Disable gravity for projectiles
        this.body.gravityScale = 0; // custom property, if needed
        Matter.Body.setInertia(this.body, Infinity);
        
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        // Visual
        const geo = new THREE.CircleGeometry(10, 16);
        const mat = new THREE.MeshBasicMaterial({ 
            color: this.type === 'web' ? 0xffffff : 0x00ff00,
            transparent: true,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(x, -y, 0);
        this.scene.add(this.mesh);
    }
    
    update(delta) {
        if (!this.isActive) return;
        
        // Anti-gravity (since Matter has world gravity, we counteract it every frame for flying projectiles)
        const gravityForce = this.physics.engine.world.gravity.y * this.physics.engine.world.gravity.scale * this.body.mass;
        Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -gravityForce });
        
        this.lifetime -= delta;
        if (this.lifetime <= 0) {
            this.destroy();
            return;
        }
        
        this.mesh.position.x = this.body.position.x;
        this.mesh.position.y = -this.body.position.y;
    }
    
    destroy() {
        if (!this.isActive) return;
        this.isActive = false;
        
        if (this.body) {
            Matter.Composite.remove(this.physics.engine.world, this.body);
            this.body = null;
        }
        
        if (this.mesh) {
            this.scene.remove(this.mesh);
            // Optionally, create a small splash effect here
            this.mesh.geometry.dispose();
            this.mesh.material.dispose();
            this.mesh = null;
        }
    }
}
