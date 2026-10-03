import * as Matter from 'matter-js';
import * as THREE from 'three';

export class Gate {
    constructor(physics, scene, x, y, targetBiome) {
        this.physics = physics;
        this.scene = scene;
        this.targetBiome = targetBiome;
        this.isUnlocked = false;
        
        // Solid body initially
        this.body = Matter.Bodies.rectangle(x, y, 40, 150, {
            isStatic: true,
            label: 'gate'
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        // Visual
        const geo = new THREE.BoxGeometry(40, 150, 10);
        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 });
        this.mesh = new THREE.Mesh(geo, this.material);
        this.mesh.position.set(x, -y, -5);
        this.scene.add(this.mesh);
    }
    
    unlock() {
        if (this.isUnlocked) return;
        this.isUnlocked = true;
        this.body.isSensor = true; // Let player pass through
        this.material.color.setHex(0x0000ff); // Blue when unlocked
        this.material.opacity = 0.2;
    }
    
    destroy() {
        Matter.Composite.remove(this.physics.engine.world, this.body);
        this.scene.remove(this.mesh);
    }
}
