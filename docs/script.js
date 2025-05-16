// Take fruit input
let fruit = prompt("Choose a fruit:\n 1. Apple\n 2. Banana\n 3. Orange");

let price = 0;
let fruitName = "";

// Setting the fruit's name and its price
if (fruit === "1") {
  fruitName = "Apple";
  price = 20;
} else if (fruit === "2") {
  fruitName = "Banana";
  price = 10;
} else if (fruit === "3") {
  fruitName = "Orange";
  price = 15;
} else {
  alert("Enter a valid input!!!");
}

// Calculation
if (price > 0) {
  let qty = prompt(`Enter the quantity of ${fruitName}:`);
  qty = parseInt(qty);

  if (isNaN(qty) || qty <= 0) {
    alert("Enter valid input...");
  } else {
    let total = qty * price;
    alert(`You selected ${qty} ${fruitName}(s).\nTotal Price : ${total}`);
  }
}
