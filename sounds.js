// Sound effects
const sounds = {
  brick: new Audio('sounds/brick.mp3'),
  win: new Audio('sounds/win.mp3'),
  lose: new Audio('sounds/lose.mp3')
};

sounds.brick.volume = 0.1;
sounds.win.volume = 0.9;
sounds.lose.volume = 0.8;

// Helper function to play sound
function playSound(soundName) {
  if (sounds[soundName]) {
    sounds[soundName].currentTime = 0;
    sounds[soundName].play().catch(e => console.log('Audio play failed:', e));
  }
}