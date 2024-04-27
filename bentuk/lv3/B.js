let currentQuestion = "Mana bentuk kotak?";
let correctAnswer = "square";
let userAnswer = "";

function checkAnswer(square) {
    userAnswer = square;
    document.querySelectorAll("square").forEach(element => {
        element.classList.remove("selected");
    });
    document.getElementById(shape).classList.add("selected");
}

function nextQuestion() {
    if (userAnswer === correctAnswer) {
        alert("Selamat! Jawaban kamu benar. Lanjutkan ke level selanjutnya!");
        redirectToOtherWebsite();
        resetGame();
    } else {
        alert("jawaban salah Coba lagi.");
    }
}

function redirectToOtherWebsite() {
    // Ganti URL berikut dengan URL website yang ingin Anda arahkan
    window.location.href = "http://127.0.0.1:5500/bentuk/lv3/bentuk2.html";
}

function resetGame() {
    userAnswer = "";
    document.querySelectorAll("square").forEach(element => {
        element.classList.remove("selected");
    });
}