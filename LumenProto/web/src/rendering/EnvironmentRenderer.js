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
        try {
            // Fetch manifest to know which assets belong to which biome
            const response = await fetch('./web/environments/manifest.json');
            if (response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    this.manifest = await response.json();
                } else {
                    throw new Error("Manifest URL returned non-JSON content (likely a 404 fallback to index.html)");
                }
            } else {
                throw new Error(`Manifest fetch failed: ${response.status} ${response.statusText}`);
            }
        } catch (e) {
            console.warn("Failed to load environment manifest. Proceeding with blank background. Error:", e);
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
        
        const biomeManifest = this.manifest[biomeId];
        
        // Fog/Lighting atmosphere color based on biome
        if (biomeId === 'dark') {
            this.scene.background = new THREE.Color(0x0a0a1a);
        } else if (biomeId === 'ice') {
            this.scene.background = new THREE.Color(0x88ccff);
        } else if (biomeId === 'jungle') {
            this.scene.background = new THREE.Color(0x0f2a1a);
        }

        if (!biomeManifest) return;

        // Configuration for depth and scale per layer
        const layerConfig = {
            'sky': { z: -500, y: 300, scale: 2000, parallax: 0.02 },
            'far': { z: -400, y: 150, scale: 1500, parallax: 0.05 },
            'mid': { z: -200, y: 50, scale: 1000, parallax: 0.12 },
            'foreground': { z: -100, y: -50, scale: 1000, parallax: 0.20 },
            'atmosphere': { z: 50, y: 0, scale: 1200, parallax: 0.08 }
        };

        for (const [layerName, path] of Object.entries(biomeManifest)) {
            const config = layerConfig[layerName] || { z: -300, y: 0, scale: 1000, parallax: 0.1 };
            
            try {
                // Correct path resolution relative to where manifest is loaded
                const fullPath = `./web/environments/${path.replace('./', '')}`;
                const tex = await this.assets.textureLoader.loadAsync(fullPath);
                
                tex.colorSpace = THREE.SRGBColorSpace;
                tex.wrapS = THREE.RepeatWrapping;
                tex.minFilter = THREE.NearestFilter;
                tex.magFilter = THREE.NearestFilter;
                
                // Calculate correct aspect ratio wrapping based on natural image size
                const aspect = tex.image.width / tex.image.height;
                const meshWidth = config.scale * aspect;
                
                // We want to tile it horizontally
                tex.repeat.set(4, 1);
                
                const mat = new THREE.MeshBasicMaterial({ 
                    map: tex, 
                    transparent: layerName !== 'sky', 
                    depthWrite: false 
                });
                
                // Since we repeat 4 times, plane must be 4 times wider
                const geo = new THREE.PlaneGeometry(meshWidth * 4, config.scale);
                const mesh = new THREE.Mesh(geo, mat);
                
                mesh.position.set(0, config.y, config.z);
                mesh.userData = { type: layerName, parallaxX: config.parallax };
                
                this.group.add(mesh);
                this.layers.push(mesh);
                
            } catch (err) {
                console.error(`Failed to load layer ${layerName} for biome ${biomeId}:`, err);
            }
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
