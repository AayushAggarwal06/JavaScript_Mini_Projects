// Quiz data
const quiz = [
  {
    question: "What is the capital of India?",
    option: ["a) Delhi", "b) Mumbai", "c)Kolkata"],
    answer: "a",
  },
  {
    question: "What is the sum of 10 + 20 + 20 ?",
    option: ["a) 100", "b) 50", "c) 70"],
    answer: "b",
  },
  {
    question: "Which is the longest river in the world?",
    option: ["a) The Ganga", "b) The Bhramputra", "c) The Nile"],
    answer: "c",
  },
  {
    question: "Who was the first man to step on the moon?",
    option: ["a) Aryabhata", "b) Neil Armstrong", "c) Mahesh Kumar"],
    answer: "b",
  },
  {
    question: "Which ocean is the largest in the world?",
    option: [
      "a) The Pacific Ocean",
      "b) The Atlantic Ocean",
      "c) The Indian Ocean",
    ],
    answer: "a",
  },
];

// Quiz shuffling
quiz.sort(() => Math.random() - 0.5);

let score = 0;

function startGame() {
  alert("Welcome to the Quiz App! Answer questions by typing a, b, or c.");

  for (let i = 0; i < quiz.length; i++) {
    let q = quiz[i];
    let userAns = prompt(
      `${q.question} \n ${q.option.join(
        "\n"
      )} \n\n Enter your answer (a, b or c):`
    );

    if (userAns === null) {
      alert("Quiz cancelled. See you next time!");
      break;
    }

    userAns = userAns.toLowerCase().trim();

    if (userAns === q.answer) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert(`Wrong! The correct answer is ${q.answer}.`);
    }
  }
  alert(`Quiz Over! Your final score is ${score} out of ${quiz.length}.`);
}
