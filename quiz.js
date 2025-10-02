// Seleziona il pulsante "Invia risposta"
const submitButton = document.getElementById("submit-answer");

// Aggiunge un listener di eventi per il click, che chiama la funzione checkAnswer
submitButton.addEventListener('click', checkAnswer);

// Funzione per controllare la risposta
function checkAnswer() {
  // Dichiara la risposta corretta come stringa
  const correctAnswer = "4";

  // Seleziona l'opzione che l'utente ha scelto
  const userSelection = document.querySelector('input[name="quiz"]:checked');
  
  // Seleziona l'elemento dove mostrare il feedback
  const feedback = document.getElementById('feedback');

  // Controlla se l'utente ha selezionato una risposta
  if (userSelection) {
    const userAnswer = userSelection.value;

    // Confronta la risposta dell'utente con quella corretta
    if (userAnswer === correctAnswer) {
      // Se è corretta, mostra questo messaggio
      feedback.textContent = "Correct! Well done.";
    } else {
      // Se è sbagliata, mostra quest'altro
      feedback.textContent = "That's incorrect. Try again!";
    }
  } else {
    // Se non ha selezionato nulla, avvisa l'utente
    feedback.textContent = "Please select an answer.";
  }
}
