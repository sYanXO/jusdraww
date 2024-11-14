function resizeCanvas() {
    const canvas = document.getElementById('draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call this when the page loads
window.onload = resizeCanvas;
// Call this when the window is resized
window.onresize = resizeCanvas; 

let strokeSize = 10;  // Increased default size
const MIN_STROKE = 5;  // Increased minimum size
const MAX_STROKE = 50;  // Increased maximum size

function increaseSize() {
    if (strokeSize < MAX_STROKE) {
        strokeSize += 5;  // Increased step size
        document.getElementById('strokeSize').innerHTML = strokeSize;
    }
}

function decreaseSize() {
    if (strokeSize > MIN_STROKE) {
        strokeSize -= 5;  // Increased step size
        document.getElementById('strokeSize').innerHTML = strokeSize;
    }
}

function changeColor(color) {
    currentColor = color;
    ctx.strokeStyle = color;
    if (color === 'white') {  // For eraser
        ctx.lineWidth = strokeSize * 2;  // Make eraser 2x thicker
    } else {
        ctx.lineWidth = strokeSize;
    }
} 