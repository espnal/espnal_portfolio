// Get a reference to the HTML element where you want to render the animation
const container = document.getElementById('lottie-animation');

// Specify the path to your Lottie JSON animation file
const animationPath = 'code.json';

// Configure Lottie options
const animationOptions = {
  container: container,
  renderer: 'svg', // or 'canvas' for a different rendering method
  loop: true, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to play automatically
  path: animationPath,
};

// Load and play the animation
const anim = lottie.loadAnimation(animationOptions);
