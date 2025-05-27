document.getElementById("calculate").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    result.textContent = "Please enter valid positive numbers.";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const roundedBmi = bmi.toFixed(1);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.textContent = `Your BMI is ${roundedBmi} (${category})`;
});
