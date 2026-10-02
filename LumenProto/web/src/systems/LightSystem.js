export class LightSystem {
    constructor() {
        this.lightPower = 0;
        this.maxLightPower = 2; // 0 = Dark, 1 = Ice Restored, 2 = Jungle Restored
        
        this.hasBlueCore = false;
        this.hasGreenCore = false;
        
        this.onLightChanged = null;
    }
    
    acquireCore(color) {
        if (color === 'blue' && !this.hasBlueCore) {
            this.hasBlueCore = true;
            this.lightPower = 1;
            this.notify();
        } else if (color === 'green' && !this.hasGreenCore) {
            this.hasGreenCore = true;
            this.lightPower = 2;
            this.notify();
        }
    }
    
    notify() {
        if (this.onLightChanged) {
            this.onLightChanged(this.lightPower);
        }
    }
}
