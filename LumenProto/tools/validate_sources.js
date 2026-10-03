const SRC_DIR = path.join(__dirname, '..', 'web', 'src');

const playerSrc = fs.readFileSync(path.join(SRC_DIR, 'entities', 'Player.js'), 'utf-8');
const gameSrc = fs.readFileSync(path.join(SRC_DIR, 'game', 'Game.js'), 'utf-8');
const uiSrc = fs.readFileSync(path.join(SRC_DIR, 'systems', 'UIAndDialogue.js'), 'utf-8');
const levelSrc = fs.readFileSync(path.join(SRC_DIR, 'levels', 'LevelManager.js'), 'utf-8');
