import * as THREE from 'three';
import { Camera } from './Camera.js';

export class Renderer {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new THREE.WebGLRenderer({ antialias: false }); // Pixel art style
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x111111);
        
        // Disable texture filtering globally for pixel art
        THREE.Texture.DEFAULT_MAG_FILTER = THREE.NearestFilter;
        THREE.Texture.DEFAULT_MIN_FILTER = THREE.NearestFilter;
    }

    async init() {
        document.getElementById('game-container').appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.onWindowResize.bind(this));
        
        // Add basic ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        // Add directional light
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(0, 10, 5);
        this.scene.add(dirLight);
    }
    
    createBox(x, y, w, h, color) {
        const geo = new THREE.BoxGeometry(w, h, 10);
        const mat = new THREE.MeshLambertMaterial({ color: color });
        const mesh = new THREE.Mesh(geo, mat);
        // Map Matter.js center origin (which we use for x,y) to Three.js
        mesh.position.set(x, -y, 0); 
        this.scene.add(mesh);
        return mesh;
    }

    onWindowResize() {
        this.camera.resize(window.innerWidth, window.innerHeight);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        this.renderer.render(this.scene, this.camera.cam);
    }
}
