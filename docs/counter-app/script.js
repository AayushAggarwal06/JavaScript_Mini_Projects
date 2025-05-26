let count = 0;

const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  counterDisplay.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
