import * as Matter from 'matter-js';
import * as THREE from 'three';
import checkpointImg from '../../../assets/checkpoint/checkpoint-removebg-preview.png';

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
        
        // Visual (Plane with texture)
        this.tex = new THREE.TextureLoader().load(checkpointImg);
        this.tex.colorSpace = THREE.SRGBColorSpace;
        
        // Spritesheet is 4 cols, 3 rows
        this.tex.repeat.set(1/4, 1/3);
        this.tex.offset.set(0, 2/3); // Top-left inactive frame
        
        const geo = new THREE.PlaneGeometry(80, 100);
        this.material = new THREE.MeshBasicMaterial({ 
            map: this.tex, 
            color: 0x555555, // dark initially
            transparent: true,
            side: THREE.DoubleSide
        });
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
        this.material.color.setHex(0xffffff); // Full bright glow
        this.tex.offset.set(3/4, 0); // Bottom-right active frame
        this.light.color.setHex(0x00ffff); // Cyan glow to match asset
        this.light.intensity = 2;
    }
    
    destroy() {
        Matter.Composite.remove(this.physics.engine.world, this.body);
        this.scene.remove(this.mesh);
        this.scene.remove(this.light);
    }
}
