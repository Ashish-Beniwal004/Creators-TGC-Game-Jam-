import * as THREE from 'three';

export class Camera {
    constructor() {
        // Orthographic camera is often better for 2D platformers
        const aspect = window.innerWidth / window.innerHeight;
        const frustumSize = 600;
        
        this.cam = new THREE.OrthographicCamera(
            frustumSize * aspect / -2,
            frustumSize * aspect / 2,
            frustumSize / 2,
            frustumSize / -2,
            1,
            1000
        );
        this.cam.position.z = 100;
    }
    
    resize(width, height) {
        const aspect = width / height;
        const frustumSize = 600;
        this.cam.left = -frustumSize * aspect / 2;
        this.cam.right = frustumSize * aspect / 2;
        this.cam.top = frustumSize / 2;
        this.cam.bottom = -frustumSize / 2;
        this.cam.updateProjectionMatrix();
    }
    
    follow(targetPosition) {
        // Simple lerp smoothing
        const lerpFactor = 0.1;
        this.cam.position.x += (targetPosition.x - this.cam.position.x) * lerpFactor;
        // Invert Y because Matter.js Y goes down, Three.js Y goes up
        this.cam.position.y += (targetPosition.y - this.cam.position.y) * lerpFactor;
    }
}
