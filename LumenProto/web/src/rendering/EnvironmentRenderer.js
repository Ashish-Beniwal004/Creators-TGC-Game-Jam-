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
        this.DEBUG_ENV = false; // Toggle to true to see bounding boxes
    }
    
    async init() {
        try {
            // Fetch manifest to know which assets belong to which biome
            const response = await fetch('./web/environments/asset_manifest.json');
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
            this.manifest = { assets: [] };
        }
    }
    
    async loadBiome(biomeId) {
        this.currentBiome = biomeId;
        
        // Clear old layers
        for (let mesh of this.layers) {
            this.group.remove(mesh);
        }
        this.layers = [];
        
        // Filter assets by biome (e.g. all assets starting with 'dark_')
        const biomeAssets = (this.manifest.assets || []).filter(a => a.id.startsWith(biomeId));
        
        // Fog/Lighting atmosphere color based on biome
        if (biomeId === 'dark') {
            this.scene.background = new THREE.Color(0x0a0a1a);
        } else if (biomeId === 'ice') {
            this.scene.background = new THREE.Color(0x88ccff);
        } else if (biomeId === 'jungle') {
            this.scene.background = new THREE.Color(0x0f2a1a);
        }

        if (biomeAssets.length === 0) return;

        // Base Z depths per layer type to ensure correct rendering order
        const depthConfig = {
            'sky': -500,
            'far': -400,
            'mid': -200,
            'foreground': -100,
            'atmosphere': 50
        };
        
        const decorPositions = {
            'dark_decor_1': { x: -800, y: 150, z: -150, scaleY: 400, parallax: 0.12 }
        };

        for (const asset of biomeAssets) {
            try {
                const fullPath = `./web/environments/${asset.url.replace('./', '')}`;
                const tex = await this.assets.textureLoader.loadAsync(fullPath);
                
                tex.colorSpace = THREE.SRGBColorSpace;
                tex.minFilter = THREE.NearestFilter;
                tex.magFilter = THREE.NearestFilter;
                
                let isLayer = asset.type === 'background_layer';
                
                if (isLayer) {
                    tex.wrapS = THREE.RepeatWrapping;
                    tex.repeat.set(4, 1);
                }
                
                // Determine z-depth based on ID for layers, or deterministic for objects
                let baseZ = -300;
                let baseY = 0;
                let scaleY = 1000;
                let offsetX = 0;
                let parallax = asset.parallax;
                
                if (asset.id.includes('sky')) { baseZ = -500; baseY = 300; scaleY = 2000; parallax = 0.02; }
                else if (asset.id.includes('far')) { baseZ = -400; baseY = 150; scaleY = 1500; parallax = 0.05; }
                else if (asset.id.includes('mid')) { baseZ = -200; baseY = 50; scaleY = 1000; parallax = 0.10; }
                else if (asset.id.includes('foreground')) { baseZ = -100; baseY = -50; scaleY = 1000; parallax = 0.18; }
                else if (asset.id.includes('atmosphere')) { baseZ = 50; baseY = 0; scaleY = 1200; parallax = 0.08; }
                else if (asset.type === 'decorative_object') {
                    const decorCfg = decorPositions[asset.id] || { x: 0, y: 0, z: -50, scaleY: 500, parallax: 0.15 };
                    baseZ = decorCfg.z;
                    baseY = decorCfg.y;
                    scaleY = decorCfg.scaleY;
                    offsetX = decorCfg.x;
                    parallax = decorCfg.parallax;
                }
                
                const aspect = tex.image.width / tex.image.height;
                const meshWidth = scaleY * aspect;
                
                const mat = new THREE.MeshBasicMaterial({ 
                    map: tex, 
                    transparent: !asset.id.includes('sky'), 
                    depthWrite: false 
                });
                
                // If it's a layer, tile it. If object, just place it.
                const geo = isLayer 
                    ? new THREE.PlaneGeometry(meshWidth * 4, scaleY)
                    : new THREE.PlaneGeometry(meshWidth, scaleY);
                    
                const mesh = new THREE.Mesh(geo, mat);
                
                mesh.position.set(offsetX, baseY, baseZ);
                mesh.userData = { type: asset.id, parallaxX: parallax, startX: offsetX };
                
                this.group.add(mesh);
                this.layers.push(mesh);
                
                if (this.DEBUG_ENV) {
                    const box = new THREE.BoxHelper(mesh, 0xff0000);
                    this.group.add(box);
                    this.layers.push(box); // Add to layers so it gets cleaned up
                    
                    // Simple HTML overlay for labels since TextGeometry requires font loading
                    const debugUI = document.getElementById('env-debug-ui') || (function() {
                        const div = document.createElement('div');
                        div.id = 'env-debug-ui';
                        div.style.position = 'absolute';
                        div.style.top = '10px';
                        div.style.right = '10px';
                        div.style.color = 'lime';
                        div.style.fontFamily = 'monospace';
                        div.style.pointerEvents = 'none';
                        div.style.background = 'rgba(0,0,0,0.7)';
                        div.style.padding = '10px';
                        document.body.appendChild(div);
                        return div;
                    })();
                    debugUI.innerHTML += `[${asset.id.toUpperCase()}] z:${baseZ} plx:${parallax}<br>`;
                }
                
            } catch (err) {
                console.error(`Failed to load asset ${asset.id}:`, err);
            }
        }
    }
    
    update(cameraPosition) {
        // Apply parallax offsets
        for (let obj of this.layers) {
            // Check if it's a mesh or a BoxHelper
            const mesh = obj.type === 'BoxHelper' ? obj.object : obj;
            const px = mesh.userData.parallaxX || 0;
            const startX = mesh.userData.startX || 0;
            // The camera moves away from center. We move background slightly to create illusion.
            mesh.position.x = startX + cameraPosition.x * (1 - px);
            
            if (obj.type === 'BoxHelper') {
                obj.update();
            }
        }
    }
}
