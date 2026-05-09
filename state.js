// Game state variables
let score = 0;
let lives = 3;
let time = 0;
let running = false;
let paused = false;
let gameOver = false;
let startTime = 0;
let pauseTime = 0;
let firstTime = true;
let lastFrameTime = 0;

// Game objects
let paddle = { x: 425, y: 630, width: 150, height: 15 };
let ball = { x: 500, y: 605, dx: 0, dy: 0, radius: 6 };
let bricks = [];

// Input keys
let keys = { left: false, right: false };