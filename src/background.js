// background.js
let backgroundPosition = 0;

function updateBackground() {
  document.body.style.backgroundPosition = `${backgroundPosition}% 50%`;
  backgroundPosition = (backgroundPosition + 0.5) % 100;
  requestAnimationFrame(updateBackground);
}

updateBackground();
