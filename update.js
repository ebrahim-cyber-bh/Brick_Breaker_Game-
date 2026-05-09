// Main update function with collision detection

function update(deltaTime) {
  if (paused || gameOver) return;
  
  // Normalize deltaTime to 60 FPS (1.0 = 60fps)
  const speed = deltaTime / (1000 / 60);
  
  // Update timer
  if (running) {
    time = Math.floor((Date.now() - startTime) / 1000);
    timeEl.textContent = 'Time: ' + Math.floor(time / 60) + ':' + (time % 60).toString().padStart(2, '0');
  }
  
  // Paddle movement
  if (keys.left && paddle.x > 0) paddle.x -= 19 * speed;
  if (keys.right && paddle.x < 850) paddle.x += 19 * speed;
  paddleEl.style.left = paddle.x + 'px';
  
  // Ball follows paddle if not launched
  if (ball.dx === 0 && ball.dy === 0) {
    ball.x = paddle.x + 75;
    ball.y = 605;
    ballEl.style.left = (ball.x - ball.radius) + 'px';
    ballEl.style.top = (ball.y - ball.radius) + 'px';
    return;
  }
  
  // Ball movement
  ball.x += ball.dx * speed;
  ball.y += ball.dy * speed;
  
  // Wall collisions
  if (ball.x - ball.radius < 0 || ball.x + ball.radius > 1000) {
    ball.dx = -ball.dx;
  }
  if (ball.y - ball.radius < 50) {
    ball.dy = -ball.dy;
  }
  
  // Paddle collision
  if (ball.y + ball.radius >= paddle.y && 
      ball.y < paddle.y + paddle.height && 
      ball.x > paddle.x && 
      ball.x < paddle.x + paddle.width) {
    const hitPos = (ball.x - paddle.x - 75) / 75;
    ball.dx = 17 * Math.sin(hitPos * 60 * Math.PI / 180);
    ball.dy = -17;
    ball.y = paddle.y - ball.radius;
  }
  
  // Bottom (lose life)
  if (ball.y > 750) {
    lives--;
    livesEl.textContent = 'Lives: ' + lives;
    
    if (lives <= 0) {
      gameOver = true;
      overlay.classList.remove('hidden');
      overlay.className = 'gameover';
      message.textContent = 'GAME OVER';
      document.getElementById('instructions').textContent = 'Press R to Restart';
      playSound('lose');
    } else {
      ball.x = paddle.x + 75;
      ball.y = 605;
      ball.dx = 0;
      ball.dy = 0;
    }
  }
  
  // Brick collisions
  for (let b of bricks) {
    if (!b.alive) continue;
    
    if (ball.x + ball.radius > b.x && 
        ball.x - ball.radius < b.x + b.width &&
        ball.y + ball.radius > b.y && 
        ball.y - ball.radius < b.y + b.height) {
      ball.dy = -ball.dy;
      b.alive = false;
      b.el.style.display = 'none';
      score += 10;
      scoreEl.textContent = 'Score: ' + score;
      playSound('brick');
    }
  }
  
  // Check victory
  if (bricks.every(b => !b.alive)) {
    gameOver = true;
    overlay.classList.remove('hidden');
    overlay.className = 'victory';
    message.textContent = 'VICTORY!';
    document.getElementById('instructions').textContent = 'Press R to Restart';
    playSound('win');
  }
  
  // Update ball position
  ballEl.style.left = (ball.x - ball.radius) + 'px';
  ballEl.style.top = (ball.y - ball.radius) + 'px';
}