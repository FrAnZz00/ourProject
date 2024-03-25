document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let currentLetterIndex = 0;

    // Function to draw the current letter along the dotted line
    function drawLetter(letter) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(550, 50);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000";
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.font = "italic bold 40px Arial";
        ctx.fillText(letter, 50, 100);
    }

    // Initial drawing
    drawLetter(alphabet[currentLetterIndex]);

    // Listen for mouse movements to draw lines
    let isDrawing = false;
    canvas.addEventListener("mousedown", function(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.beginPath();
        ctx.moveTo(x, y);
    });
    canvas.addEventListener("mousemove", function(e) {
        if (isDrawing) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    });
    canvas.addEventListener("mouseup", function() {
        isDrawing = false;
    });

    // Listen for key press to change letters
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowRight") {
            currentLetterIndex = (currentLetterIndex + 1) % alphabet.length;
            drawLetter(alphabet[currentLetterIndex]);
        } else if (e.key === "ArrowLeft") {
            currentLetterIndex = (currentLetterIndex - 1 + alphabet.length) % alphabet.length;
            drawLetter(alphabet[currentLetterIndex]);
        }
    });
});
