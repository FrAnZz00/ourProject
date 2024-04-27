let currentQuestion = "Mana bentuk kotak?";
let correctAnswer = "tringle";
let userAnswer = "";

function checkAnswer(tringle) {
    userAnswer = tringle;
    document.querySelectorAll("tringle").forEach(element => {
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
    window.location.href = "http://127.0.0.1:5500/bentuk/lv3/bentuk3.html";
}

function resetGame() {
    userAnswer = "";
    document.querySelectorAll("tringle").forEach(element => {
        element.classList.remove("selected");
    });
}