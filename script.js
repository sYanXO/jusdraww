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

let isEraser = false;

function setEraser() {
    isEraser = !isEraser;  // Toggle eraser state
    const eraserBtn = document.querySelector('.menubutton.eraser');
    
    if (isEraser) {
        eraserBtn.classList.add('active');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.lineWidth = strokeSize * 2;  // Make eraser thicker
    } else {
        eraserBtn.classList.remove('active');
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = strokeSize;
    }
}

function changeColor(color) {
    if (isEraser) {
        // Turn off eraser when selecting a color
        setEraser();
    }
    currentColor = color;
    ctx.strokeStyle = color;
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = strokeSize;
} 