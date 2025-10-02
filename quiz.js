// Selezioniamo il pulsante una sola volta, fuori dalla funzione
const submitButton = document.getElementById("submit-answer");

// Aggiungiamo l'ascoltatore di eventi che "chiama" la nostra funzione al click
submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
  // Dichiariamo la risposta corretta
  const correctAnswer = "4";

  // Recuperiamo l'elemento radio selezionato dall'utente
  const userSelection = document.querySelector('input[name="quiz"]:checked');

  // Selezioniamo l'elemento dove mostreremo il risultato
  const feedback = document.getElementById('feedback');
  
  // Controlliamo se l'utente ha effettivamente selezionato qualcosa
  if (userSelection) {
    const userAnswer = userSelection.value;

    // Confrontiamo la risposta dell'utente con quella corretta
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Corretto! Ben fatto.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  } else {
    // Se l'utente non ha selezionato nulla, glielo diciamo
    feedback.textContent = "Please select an answer.";
  }
}
