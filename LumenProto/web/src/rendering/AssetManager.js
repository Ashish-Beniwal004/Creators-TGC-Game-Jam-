import * as THREE from 'three';

export class AssetManager {
    constructor() {
        this.textureLoader = new THREE.TextureLoader();
        this.atlasTexture = null;
        this.atlasMeta = null;
        this.materials = new Map(); // Cache materials per frame
    }

    async init() {
        try {
            // Load atlas texture
            this.atlasTexture = await this.textureLoader.loadAsync('./web/characters_atlas.webp');
            this.atlasTexture.magFilter = THREE.NearestFilter;
            this.atlasTexture.minFilter = THREE.NearestFilter;
            this.atlasTexture.colorSpace = THREE.SRGBColorSpace;
            
            // Load atlas metadata
            const response = await fetch('./atlas_meta.json');
            if (response.ok) {
                this.atlasMeta = await response.json();
            } else {
                throw new Error(`Failed to load atlas_meta.json: ${response.statusText}`);
            }
            
            // Load isolated entity sprites
            await this.loadExternalSprite('entities/player.png');
            await this.loadExternalSprite('entities/villain.png');
            
            return true;
        } catch (error) {
            console.error("Asset Manager Initialization Error:", error);
            const debugUI = document.getElementById('debug-ui');
            if (debugUI) {
                debugUI.innerHTML = `
                    <div style="color:red; background:black; padding:20px; border:2px solid red;">
                        LUMEN FAILED TO LOAD<br><br>
                        Error:<br>${error.message}<br><br>
                        Open browser console for details.
                    </div>
                `;
            }
            throw error; // Rethrow to halt game loop initialization
        }
    }

    async loadExternalSprite(path) {
        try {
            const tex = await this.textureLoader.loadAsync('./web/' + path);
            tex.magFilter = THREE.NearestFilter;
            tex.minFilter = THREE.NearestFilter;
            tex.colorSpace = THREE.SRGBColorSpace;
            
            this.atlasMeta[path] = {
                x: 0, y: 0,
                width: tex.image.width,
                height: tex.image.height
            };
            
            const material = new THREE.MeshBasicMaterial({
                map: tex,
                transparent: true,
                alphaTest: 0.1,
                side: THREE.DoubleSide
            });
            this.materials.set(path, material);
        } catch (e) {
            console.warn("Failed to load external sprite:", path);
        }
    }

    getFrameMaterial(frameName) {
        if (this.materials.has(frameName)) {
            return this.materials.get(frameName);
        }
        
        const meta = this.atlasMeta[frameName];
        if (!meta) {
            console.warn(`Frame ${frameName} not found in atlas.`);
            return null;
        }
        
        // Create a cloned texture with offset and repeat set for this specific frame
        const tex = this.atlasTexture.clone();
        tex.needsUpdate = true;
        
        // Calculate UVs based on atlas dimensions (assume 2048 max width based on generation script, but let's read it)
        const atlasWidth = this.atlasTexture.image.width;
        const atlasHeight = this.atlasTexture.image.height;
        
        // Three.js UVs: (0,0) is bottom-left, atlas y is usually from top-left.
        // We must map it correctly. The atlas was generated via PIL paste, so y=0 is top.
        const u = meta.x / atlasWidth;
        const v = 1.0 - ((meta.y + meta.height) / atlasHeight);
        const w = meta.width / atlasWidth;
        const h = meta.height / atlasHeight;
        
        tex.offset.set(u, v);
        tex.repeat.set(w, h);
        
        const material = new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            alphaTest: 0.1,
            side: THREE.DoubleSide
        });
        
        this.materials.set(frameName, material);
        return material;
    }
}
