// Game control functions

function startGame() {
  running = true;
  startTime = Date.now();
  overlay.classList.add('hidden');
  firstTime = false;
  
  const angle = (Math.random() * 60 - 30) * Math.PI / 180;
  ball.dx = 17 * Math.sin(angle);
  ball.dy = -17;
}

function togglePause() {
  paused = !paused;
  if (paused) {
    pauseTime = Date.now();
    overlay.classList.remove('hidden');
    overlay.className = 'paused';
    message.textContent = 'PAUSED';
    document.getElementById('instructions').textContent = 'Press ESC to Resume';
  } else {
    startTime += Date.now() - pauseTime;
    overlay.classList.add('hidden');
  }
}

function restart() {
  score = 0;
  lives = 3;
  time = 0;
  running = false;
  paused = false;
  gameOver = false;
  startTime = 0;
  
  paddle.x = 425;
  ball.x = 500;
  ball.y = 605;
  ball.dx = 0;
  ball.dy = 0;
  
  updateDisplay();
  createBricks();
  
  overlay.classList.add('hidden');
}

function updateDisplay() {
  scoreEl.textContent = 'Score: ' + score;
  livesEl.textContent = 'Lives: ' + lives;
  timeEl.textContent = 'Time: 0:00';
}