const canvas = document.querySelector('#board');
const ctx = canvas.getContext('2d');
const strokeVal = document.querySelector('input[name="brushStroke"]');
const brushColor = document.querySelector('input[name="brushColor"]');
const clearBtn = document.querySelector('#clear');
const roundLine = document.querySelector('#round');
const squareLine = document.querySelector('#square');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function getStrokeVal() {
    ctx.lineWidth = this.value;
}

function getColor() {
    ctx.strokeStyle = this.value;
    console.log(this.value);
    // console.log(ctx);
}

function eraser() {
    ctx.strokeStyle = "#0000ffff"
}

function normal() {
    ctx.strokeStyle = "#151414"
}

function draw(e) {
    console.log(e);

    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

}

strokeVal.addEventListener('change', getStrokeVal);
brushColor.addEventListener('change', getColor);
clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
roundLine.addEventListener('click', () => ctx.lineCap = 'round');
squareLine.addEventListener('click', () => ctx.lineCap = 'square');


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    console.log('mousdown');
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});