function playGame() {
  const choices = ["rock", "paper", "scissors"];
  let playAgain = true;

  while (playAgain) {
    const userChoice = prompt("Enter rock, paper, or scissors:")
      .toLowerCase()
      .trim();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (userChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      result = "You win! 🎉";
    } else if (choices.includes(userChoice)) {
      result = "You lose! 😢";
    } else {
      result = "Invalid input!";
    }

    alert(
      `You chose: ${userChoice}\nComputer chose: ${computerChoice}\n\n${result}`
    );

    const again = prompt("Do you want to play again? (yes/no)")
      .toLowerCase()
      .trim();
    playAgain = again === "yes" || again === "y";
  }

  alert("Thanks for playing! 👋");
}
