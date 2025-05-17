function startGame() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let guess = null;
  let attempts = 0;

  alert("I have picked a number between 1 and 100. Try to guess it!");

  while (guess !== targetNumber) {
    let input = prompt("Enter your guess (1-100):");

    if (input === null) {
      alert("Game cancelled. Thanks for playing!");
      return;
    }

    guess = Number(input);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100.");
    } else if (guess > targetNumber) {
      alert("Too high! Try again.");
    } else if (guess < targetNumber) {
      alert("Too low! Try again.");
    } else {
      alert(`🎉 Correct! You guessed the number in ${attempts} attempts.`);
    }
  }
}
