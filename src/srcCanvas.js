const CanvasTextWrapper = require('canvas-text-wrapper').CanvasTextWrapper;
import fact from './getFact.js';

// create offscreen text canvas
const srcCanvas = document.createElement('canvas');
const srcWidth = 240;
const srcHeight = 100;

srcCanvas.width = srcWidth;
srcCanvas.height = srcHeight;

CanvasTextWrapper(srcCanvas, fact, {
  font: "bold 15px Arial, sans-serif",
  textAlign: "center",
  verticalAlign: "middle",
  sizeToFill: true,
});

export default srcCanvas;
