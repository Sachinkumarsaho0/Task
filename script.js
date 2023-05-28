function submit() {
  let numberInput = document.getElementById("Input");
  let inputValue = parseInt(Input.value);
  let output = document.getElementById("output");
  output.innerHTML = "";

  if (inputValue <= 0) {
    Error("Enter a positive value");
  } else if (inputValue > 0) {
    Numbers(inputValue, 3);
  } else {
    Numbers(inputValue, 3);
  }
}
function Error(message) {
  let outputVal = document.getElementById("output");
  outputVal.innerHTML = '<p class="error-message">' + message + "</p>";
}

function Numbers(FirstNumber, count, type) {
  let outputVal = document.getElementById("output");
  let numbers = [];
  let increment = type === " " ? 2 : 2;
  for (let i = 0; i < count; i++) {
    numbers.push(FirstNumber + increment);
    increment += 2;
  }
  outputVal.innerHTML += numbers.join(",");
}
