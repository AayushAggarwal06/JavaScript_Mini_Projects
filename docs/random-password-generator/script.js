function startGenerate() {
  const length = parseInt(prompt("Enter the desired password length:"));

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+/?><.,:;'";

  const allChars = upper + lower + numbers + symbols;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  alert("Your random password is:\n" + password);
}
