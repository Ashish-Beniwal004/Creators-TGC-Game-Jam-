import * as Matter from 'matter-js';
import * as THREE from 'three';

export class Checkpoint {
    constructor(physics, scene, x, y, biomeId) {
        this.physics = physics;
        this.scene = scene;
        this.biomeId = biomeId;
        this.x = x;
        this.y = y;
        this.isActivated = false;
        
        // Sensor body to detect player
        this.body = Matter.Bodies.rectangle(x, y, 60, 100, {
            isStatic: true,
            isSensor: true,
            label: 'checkpoint'
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        // Visual (a simple obelisk or crystal)
        const geo = new THREE.BoxGeometry(40, 80, 10);
        this.material = new THREE.MeshBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.8 });
        this.mesh = new THREE.Mesh(geo, this.material);
        this.mesh.position.set(x, -y, -5);
        this.scene.add(this.mesh);
        
        // Light indicator
        this.light = new THREE.PointLight(0xff0000, 0, 150);
        this.light.position.set(x, -y + 20, 10);
        this.scene.add(this.light);
    }
    
    activate() {
        if (this.isActivated) return;
        this.isActivated = true;
        this.material.color.setHex(0x00ff00);
        this.light.color.setHex(0x00ff00);
        this.light.intensity = 2;
    }
    
    destroy() {
        Matter.Composite.remove(this.physics.engine.world, this.body);
        this.scene.remove(this.mesh);
        this.scene.remove(this.light);
    }
}
