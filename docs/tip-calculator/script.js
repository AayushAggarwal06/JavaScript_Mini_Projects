function calculateTip() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    alert("Please enter valid numbers for bill and tip percentage!");
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;

  // Update the DOM
  document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}
