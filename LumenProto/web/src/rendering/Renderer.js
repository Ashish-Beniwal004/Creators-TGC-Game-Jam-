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
        // Generate procedural pixel-art tile texture
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        
        // Base color
        ctx.fillStyle = '#' + color.toString(16).padStart(6, '0');
        ctx.fillRect(0, 0, 64, 64);
        
        // Noise and cracks
        for (let i = 0; i < 200; i++) {
            ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.1)';
            ctx.fillRect(Math.random() * 64, Math.random() * 64, 4, 4);
        }
        
        // Top grass/moss rim
        ctx.fillStyle = 'rgba(20, 40, 20, 0.6)'; // subtle dark moss
        ctx.fillRect(0, 0, 64, 8);
        for(let i = 0; i < 16; i++) {
            if(Math.random() > 0.5) ctx.fillRect(i*4, 8, 4, 4);
        }
        
        const tex = new THREE.CanvasTexture(canvas);
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(w / 64, h / 64);
        
        const geo = new THREE.PlaneGeometry(w, h);
        const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide });
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
