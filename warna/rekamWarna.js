function playAudio(audioSrc) {
    var audio = new Audio(audioSrc);
    audio.play();
  }
  
  const recordButton = document.getElementById("record-button");
  const micIcon = document.getElementById("mic-icon");
  
  let recognizing = false;
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'id-ID';
  
  recordButton.addEventListener("click", () => {
  if (!recognizing) {
    recognition.start();
    recognizing = true;
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-stop-circle");
    timeout = setTimeout(() => {
      recognition.stop();
    }, 5000); // Menghentikan rekaman setelah 5 detik tanpa suara
  } else {
    recognition.stop();
    recognizing = false;
    micIcon.classList.remove("fa-stop-circle");
    micIcon.classList.add("fa-microphone");
    clearTimeout(timeout);
  }
  });
  
  recognition.onresult = function(event) {
  let interimTranscript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      resultTextarea.placeholder = transcript; // Mengubah placeholder dengan hasil akhir
      clearTimeout(timeout); // Reset timeout jika ada hasil akhir
    } else {
      interimTranscript += transcript;
    }
  }
  if (interimTranscript !== '') {
    resultTextarea.placeholder = interimTranscript; // Mengubah placeholder dengan hasil sementara
  }
  };
  
  recognition.onend = function() {
  recognizing = false;
  micIcon.classList.remove("fa-stop-circle");
  micIcon.classList.add("fa-microphone");
  };
  