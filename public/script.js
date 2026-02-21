const display = document.getElementById("display");

function add(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const expression = display.value;

  fetch(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`)
    .then(res => res.text())
    .then(result => {
      display.value = result;
    })
    .catch(() => {
      display.value = "Error";
    });
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}