import * as THREE from 'three';

export class ParticleSystem {
    constructor(scene) {
        this.scene = scene;
        this.mesh = null;
        this.count = 0;
        this.dummy = new THREE.Object3D();
    }
    
    init(count) {
        this.count = count;
        
        // 1. Identify legitimate use case: rendering thousands of ambient spores/dust particles in the background
        // 2. What it renders: simple glowing squares representing spores
        // 3. Why it improves efficiency: InstancedBufferGeometry draws all 1000 spores in a single draw call instead of 1000 draw calls.
        
        const geometry = new THREE.InstancedBufferGeometry();
        // A simple tiny plane
        const baseGeometry = new THREE.PlaneGeometry(2, 2);
        geometry.index = baseGeometry.index;
        geometry.attributes.position = baseGeometry.attributes.position;
        geometry.attributes.uv = baseGeometry.attributes.uv;
        
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x00ffff, // Cyan glow
            transparent: true,
            opacity: 0.6
        });
        
        this.mesh = new THREE.InstancedMesh(geometry, material, this.count);
        
        // Distribute them in a large volume
        for (let i = 0; i < this.count; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * -50 - 10; // behind player
            
            this.dummy.position.set(x, y, z);
            this.dummy.updateMatrix();
            this.mesh.setMatrixAt(i, this.dummy.matrix);
        }
        
        this.scene.add(this.mesh);
    }
    
    update(time) {
        if (!this.mesh) return;
        
        // Slowly float them upwards and sway
        const sway = Math.sin(time * 0.001) * 0.5;
        this.mesh.position.y += 0.2;
        this.mesh.position.x += sway;
        
        // If they float too high, we'd theoretically wrap them, but for Phase 24 keeping it simple.
        this.mesh.updateMatrix();
    }
}
