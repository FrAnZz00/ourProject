let currentQuestion = "Mana bentuk kotak?";
let correctAnswer = "circle";
let userAnswer = "";

function checkAnswer(circle) {
    userAnswer = circle;
    document.querySelectorAll("circle").forEach(element => {
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
    window.location.href = "/bentuk/selamat1.html";
}

function resetGame() {
    userAnswer = "";
    document.querySelectorAll("circle").forEach(element => {
        element.classList.remove("selected");
    });
}