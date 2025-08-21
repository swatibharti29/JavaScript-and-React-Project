const result = document.getElementById("display");
let currentInput = ""; 
function updateDisplay() {
  result.textContent = currentInput || "\u00A0"; //blankspace
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  currentInput += op;
  updateDisplay();
}

function appendDot() {
  currentInput += ".";
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch {
    currentInput = "";
    result.textContent = "Error";
  }
}
