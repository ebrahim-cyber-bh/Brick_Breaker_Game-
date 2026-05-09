// Create bricks
function createBricks() {
  bricksContainer.innerHTML = '';
  bricks = [];
  
  const rows = 5;
  const cols = 10;
  const brickW = 60;
  const brickH = 22;
  const gap = 5;
  const totalWidth = cols * brickW + (cols - 1) * gap;
  const startX = (1000 - totalWidth) / 2;
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const brick = document.createElement('div');
      brick.className = `brick row-${r}`;
      const x = startX + c * (brickW + gap);
      const y = r * (brickH + gap) + 50;
      brick.style.left = x + 'px';
      brick.style.top = y + 'px';
      bricksContainer.appendChild(brick);
      
      bricks.push({
        el: brick,
        x: x,
        y: y,
        width: brickW,
        height: brickH,
        alive: true
      });
    }
  }
}