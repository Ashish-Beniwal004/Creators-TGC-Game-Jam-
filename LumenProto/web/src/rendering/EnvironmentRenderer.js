import * as THREE from 'three';

export class EnvironmentRenderer {
    constructor(scene, assetManager) {
        this.scene = scene;
        this.assets = assetManager;
        
        this.layers = [];
        this.group = new THREE.Group();
        this.scene.add(this.group);
        
        this.parallaxRates = {
            'sky': 0.05,
            'distant': 0.1,
            'background': 0.25,
            'midground': 0.45,
            'foreground': 1.1
        };
        
        this.currentBiome = 'dark';
    }
    
    async init() {
        // Fetch manifest to know which assets belong to which biome
        const response = await fetch('./environments/manifest.json');
        if (response.ok) {
            this.manifest = await response.json();
        } else {
            console.warn("No environment manifest found. Using default.");
            this.manifest = { environments: {} };
        }
    }
    
    async loadBiome(biomeId) {
        this.currentBiome = biomeId;
        
        // Clear old layers
        for (let mesh of this.layers) {
            this.group.remove(mesh);
        }
        this.layers = [];
        
        const biomeKey = `${biomeId}_background`;
        const images = this.manifest.environments[biomeKey] || [];
        
        if (images.length === 0) return;
        
        // Find the non-transparent one for the sky/distant background
        let skyImage = images.find(img => !img.includes('transparent')) || images[0];
        // Find transparent one for midground/foreground
        let midImage = images.find(img => img.includes('transparent')) || images[0];
        
        // Load textures
        const skyTex = await this.assets.textureLoader.loadAsync(`./environments/${skyImage}`);
        skyTex.colorSpace = THREE.SRGBColorSpace;
        
        const midTex = await this.assets.textureLoader.loadAsync(`./environments/${midImage}`);
        midTex.colorSpace = THREE.SRGBColorSpace;
        
        // Create Sky (Tile horizontally)
        skyTex.wrapS = THREE.RepeatWrapping;
        skyTex.repeat.set(5, 1);
        
        const skyMat = new THREE.MeshBasicMaterial({ map: skyTex, depthWrite: false });
        const skyGeo = new THREE.PlaneGeometry(10000, 2000);
        const skyMesh = new THREE.Mesh(skyGeo, skyMat);
        skyMesh.position.set(0, 500, -500); // Push far back
        skyMesh.userData = { type: 'sky', parallaxX: this.parallaxRates['sky'] };
        this.group.add(skyMesh);
        this.layers.push(skyMesh);
        
        // Create Midground (Parallax Layer)
        midTex.wrapS = THREE.RepeatWrapping;
        midTex.repeat.set(3, 1);
        
        const midMat = new THREE.MeshBasicMaterial({ map: midTex, transparent: true, depthWrite: false });
        const midGeo = new THREE.PlaneGeometry(6000, 1500);
        const midMesh = new THREE.Mesh(midGeo, midMat);
        midMesh.position.set(0, 300, -200);
        midMesh.userData = { type: 'midground', parallaxX: this.parallaxRates['midground'] };
        this.group.add(midMesh);
        this.layers.push(midMesh);
        
        // Fog/Lighting atmosphere color based on biome
        if (biomeId === 'dark') {
            this.scene.background = new THREE.Color(0x0a0a1a);
        } else if (biomeId === 'ice') {
            this.scene.background = new THREE.Color(0x88ccff);
        } else if (biomeId === 'jungle') {
            this.scene.background = new THREE.Color(0x0f2a1a);
        }
    }
    
    update(cameraPosition) {
        // Apply parallax offsets
        for (let mesh of this.layers) {
            const px = mesh.userData.parallaxX || 0;
            // The camera moves away from center. We move background slightly to create illusion.
            mesh.position.x = cameraPosition.x * (1 - px);
        }
    }
}
