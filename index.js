import canvasToImage from 'canvas-to-image';
import srcCanvas from './src/srcCanvas.js';
import image from './src/max-me.jpg';

// Create image and draw text on it
const destCanvas = document.createElement('canvas');
destCanvas.width = 577;
destCanvas.height = 432;

const destContext = destCanvas.getContext('2d');

const maxImage = new Image();
maxImage.onload = () => {
  destContext.drawImage(maxImage, 0, 0);
  destContext.rotate(-6 * Math.PI / 180);
  destContext.drawImage(srcCanvas, 225, 300, 240, 100);
  canvasToImage(destCanvas, {
    name: 'max-me',
  });
}
maxImage.src = image;
