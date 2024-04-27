const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let path = [];

// Load gambar PNG segitiga sebagai latar belakang
const bulatImage = new Image();
bulatImage.src = '/assets/Tbulat.png';

// Tentukan ukuran segitiga sesuai dengan canvas
bulatImage.width = canvas.width;
bulatImage.height = canvas.height;

bulatImage.onload = function () {
    context.drawImage(bulatImage, 0, 0, canvas.width, canvas.height);
};

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    path = [];
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    fillCircleWithBlue();
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        draw(event);
    }
});

function draw(event) {
    const point = {
        x: event.offsetX,
        y: event.offsetY
    };
    path.push(point);
    context.fillStyle = 'black';
    context.fillRect(point.x, point.y, 5, 5);
}

function fillCircleWithBlue() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bulatImage, 0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
        context.lineTo(path[i].x, path[i].y);
    }
    context.closePath();

    context.fillStyle = 'blue';
    context.fill();

    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('nextButton').addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5500/bentuk/lv1/Gbentuk3.html'; // Ganti dengan URL tujuan Anda
    });
}

function changeToCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bulatImage, 0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(100, 300);
    context.lineTo(250, 300);
    context.lineTo(175, 100);
    context.closePath();

    context.fillStyle = 'blue';
    context.fill();
}
