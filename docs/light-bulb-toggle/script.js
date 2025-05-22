const bulb = document.getElementById("bulb");
const btn = document.getElementById("toggleBtn");

let isOn = false;

btn.addEventListener("click", function () {
  if (isOn) {
    bulb.src = "images/pic_bulboff.gif";
    btn.textContent = "Turn ON";
    isOn = false;
  } else {
    bulb.src = "images/pic_bulbon.gif";
    btn.textContent = "Turn OFF";
    isOn = true;
  }
});
