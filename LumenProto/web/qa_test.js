async function autoPlay() {
    console.log("=========================================");
    console.log("STARTING AUTOPLAY BOT PLAYTHROUGH");
    console.log("=========================================");

    const g = window.game;
    if (!g) return;
    
    let isPlaying = true;
    
    const wait = ms => new Promise(r => setTimeout(r, ms));
    
    // Auto-dismiss dialogs
    setInterval(() => {
        if (g.ui && g.ui.dialogueBox && g.ui.dialogueBox.style.display !== 'none') {
            console.log("Auto-dismissing dialogue");
            g.ui.dialogueBox.style.display = 'none';
            g.ui.queue = [];
        }
    }, 100);

    // Bot loop
    while (isPlaying) {
        if (g.ui.isDead) {
            console.log("BOT DIED. Pressing R to respawn.");
            g.input.keys['KeyR'] = true;
            await wait(100);
            g.input.keys['KeyR'] = false;
            await wait(500);
            continue;
        }
        
        let p = g.player;
        if (!p || !p.body) {
            await wait(100);
            continue;
        }

        // Basic Bot Logic
        g.input.keys['ArrowRight'] = true; // Always run right
        g.input.keys['ArrowLeft'] = false;
        
        // Check for gaps or walls ahead
        let x = p.body.position.x;
        let y = p.body.position.y;
        
        let platformAhead = g.platforms.find(plat => 
            plat.body.position.x > x && 
            plat.body.position.x < x + 150 && 
            plat.body.position.y < y - 20
        );
        
        let gapAhead = !g.platforms.some(plat => 
            plat.body.position.x > x && 
            plat.body.position.x < x + 100 && 
            Math.abs(plat.body.position.y - y) < 50
        );
        
        if ((platformAhead || gapAhead) && p.isGrounded) {
            // console.log("Bot detected gap/wall, JUMPING");
            g.input.keys['Space'] = true;
            await wait(100);
            g.input.keys['Space'] = false;
        }
        
        // Combat
        let enemyAhead = g.enemies.find(e => 
            e.health > 0 && 
            Math.abs(e.body.position.x - x) < 100 &&
            Math.abs(e.body.position.y - y) < 50
        );
        
        let bossAhead = g.boss && g.boss.health > 0 && Math.abs(g.boss.body.position.x - x) < 150;
        
        let projectileIncoming = g.projectiles && g.projectiles.find(proj => 
            proj.isActive && 
            proj.body.velocity.x < 0 && 
            Math.abs(proj.body.position.x - x) < 200
        );
        
        if (projectileIncoming) {
            // Block!
            g.input.keys['KeyC'] = true;
        } else {
            g.input.keys['KeyC'] = false;
        }
        
        if ((enemyAhead || bossAhead) && !projectileIncoming) {
            // Attack!
            g.input.keys['KeyX'] = true;
            await wait(50);
            g.input.keys['KeyX'] = false;
        }
        
        // Log progress every ~5 seconds
        if (Math.random() < 0.05) {
            console.log(`Bot Progress: Biome=${g.levels.currentBiome}, X=${Math.round(x)}, HP=${p.health}, EnemiesAlive=${g.enemies.length}`);
        }
        
        await wait(50);
    }
}

let checkReadyInterval = setInterval(() => {
    if (window.game && window.game.player && window.game.player.body) {
        clearInterval(checkReadyInterval);
        setTimeout(autoPlay, 1000);
    }
}, 100);
