// Keyboard input handlers
document.addEventListener('keydown', e => {
  if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
  if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
  
  if (e.key === ' ') {
    e.preventDefault();
    if (!gameOver && ball.dx === 0 && ball.dy === 0) {
      if (!running) {
        running = true;
        startTime = Date.now();
        overlay.classList.add('hidden');
      }
      const angle = (Math.random() * 60 - 30) * Math.PI / 180;
      ball.dx = 17 * Math.sin(angle);
      ball.dy = -17;
    }
  }
  
  if (e.key === 'Escape') {
    e.preventDefault();
    if (!gameOver) togglePause();
  }
  
  if (e.key === 'r' || e.key === 'R') {
    e.preventDefault();
    restart();
  }
});

document.addEventListener('keyup', e => {
  if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
  if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
});