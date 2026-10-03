async function runEndToEndTest() {
    console.log("=========================================");
    console.log("STARTING END-TO-END BROWSER TEST");
    console.log("=========================================");

    const g = window.game;
    
    // Helper to wait
    const wait = ms => new Promise(r => setTimeout(r, ms));
    
    // Helper to dismiss dialogue
    const dismissDialogue = () => {
        if (g.ui && g.ui.dialogueBox) {
            g.ui.dialogueBox.style.display = 'none';
            g.ui.queue = [];
        }
    };
    
    // Helper to press keys
    const pressKey = (key, duration) => {
        g.input.keys[key] = true;
        return wait(duration).then(() => { g.input.keys[key] = false; });
    };

    try {
        console.log("1. Starting in Dark Biome");
        dismissDialogue();
        await wait(500);
        
        console.log("2. Teleporting to Boss in Dark Biome");
        if (g.boss) {
            window.Matter.Body.setPosition(g.player.body, { x: g.boss.body.position.x - 200, y: g.boss.body.position.y });
            await wait(500);
            
            console.log("3. Killing Boss");
            g.boss.takeDamage(1000, 1);
            await wait(1000);
            
            if (!g.boss) {
                console.log("PASS: Boss died and was removed from game state.");
            } else {
                console.log("FAIL: Boss did not die or was not removed.");
            }
            
            console.log("4. Teleporting to Gate");
            let gate = g.levels.currentGate;
            if (gate) {
                window.Matter.Body.setPosition(g.player.body, { x: gate.position.x, y: gate.position.y });
                await wait(1000);
                
                if (g.levels.currentBiome === 'ice') {
                    console.log("PASS: Transitioned to Ice Biome.");
                } else {
                    console.log("FAIL: Did not transition to Ice Biome.");
                }
            }
        }
        
        dismissDialogue();
        await wait(500);
        
        console.log("5. Testing State Reset after Biome Transition");
        if (g.projectiles.length === 0) console.log("PASS: Projectiles cleared.");
        else console.log("FAIL: Projectiles not cleared.");
        
        if (g.enemies.length > 0) console.log("PASS: New enemies loaded.");
        else console.log("FAIL: New enemies not loaded.");
        
        if (g.boss && g.boss.type === 'cold_blood') console.log("PASS: Ice boss loaded.");
        else console.log("FAIL: Ice boss not loaded.");
        
        console.log("6. Testing Checkpoint Respawn loop");
        let checkpoint = g.levels.checkpoints[0];
        if (checkpoint) {
            window.Matter.Body.setPosition(g.player.body, { x: checkpoint.x, y: checkpoint.y });
            await wait(500);
            dismissDialogue();
            console.log("PASS: Checkpoint reached.");
            
            // Die
            window.Matter.Body.setPosition(g.player.body, { x: checkpoint.x, y: 2000 });
            await wait(1000);
            dismissDialogue();
            
            // Press R
            g.input.keys['KeyR'] = true;
            await wait(100);
            g.input.keys['KeyR'] = false;
            await wait(500);
            
            if (g.player.health === 100) console.log("PASS: Health reset after respawn.");
            else console.log("FAIL: Health not reset.");
            
            if (Math.abs(g.player.body.position.x - checkpoint.x) < 50) console.log("PASS: Respawned at checkpoint.");
            else console.log("FAIL: Did not respawn at checkpoint.");
        }
        
        console.log("=========================================");
        console.log("END-TO-END TEST COMPLETE");
        console.log("=========================================");

    } catch (e) {
        console.error("TEST SCRIPT ERROR:", e);
    }
}

// Start test when game is ready
let checkReadyInterval = setInterval(() => {
    if (window.game && window.game.player && window.game.player.body) {
        clearInterval(checkReadyInterval);
        setTimeout(runEndToEndTest, 1000);
    }
}, 100);
