// Game loop
function gameLoop(currentTime) {
  if (!lastFrameTime) lastFrameTime = currentTime;
  const deltaTime = currentTime - lastFrameTime;
  lastFrameTime = currentTime;

  update(deltaTime);
  requestAnimationFrame(gameLoop);
}

// Initialize game
createBricks();
updateDisplay();

// Show instructions only on first load
if (firstTime) {
  overlay.classList.remove('hidden');
  message.textContent = '';
  document.getElementById('instructions').textContent = 'SPACE = Start | A/D or Arrows = Move | ESC = Pause';
}

// Start the game loop
gameLoop();