function add(opA, opB) {
  return opA + opB;
}

function subtract(opA, opB) {
  return opA - opB;
}

function multiply(opA, opB) {
  return opA * opB;
}

function divide(opA, opB) {
  return opA / opB;
}

function operate(opA, opB, operator) {
  switch (operator) {
    case "+":
      return add(opA, opB);
    case "-":
      return subtract(opA, opB);
    case "*":
      return multiply(opA, opB);
    case "/":
      return divide(opA, opB);
    default:
      return null;
  }
}

function updateDisplay(value) {
  screen = document.getElementById("value-display");
  if (typeof value !== "number") {
    screen.innerText = "dISp. Error";
    return "ERROR";
  }

  let valueString;

  let digitString = value.toString().replace(/\./g, "");
  if (digitString.length > 10) {
    valueString = value.toExponential(2);
  } else {
    valueString = value.toString();
  }
  screen.innerText = valueString;
}

updateDisplay(0);

function updateSignDisplay(sign) {
  const signDisplay = document.getElementById("sign-display");
  switch (sign) {
    case "+":
      signDisplay.innerText = "+";
      break;
    case "-":
      signDisplay.innerText = "\u2212";
      break;
    case "*":
      signDisplay.innerText = "\u00d7";
      break;
    case "/":
      signDisplay.innerText = "\u00f7";
      break;
    default:
      signDisplay.innerText = "";
  }
}

updateSignDisplay(null);

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = button.dataset.value;

    if (buttonValue == "clear") {
      handleClear();
    } else if (["+", "-", "/", "*", "="].includes(buttonValue)) {
      handleOperator(buttonValue);
    } else if (buttonValue == ".") {
      handleDecimal();
    } else {
      handleDigit(buttonValue);
    }

    return;
  });
});

let isDecimal = false;
let operandA = 0;
let operandB = 0;
let operatorX = null;
let isFirstOperand = true;
let isResult = false;

let inputBuffer = "";

// inputBuffer.concat()

function handleClear() {
  isDecimal = false;
  operandA = 0;
  operandB = 0;
  operatorX = null;
  isFirstOperand = true;
  inputBuffer = "";
  isResult = flase;

  updateDisplay(0);
  updateSignDisplay(null);
}

function handleDigit(digit) {
  if (operatorX === null && isResult) handleClear();

  isResult = false;

  if (
    inputBuffer.length < 10 ||
    (inputBuffer.length === 10 && inputBuffer.includes("."))
  ) {
    inputBuffer += digit.toString();
  }

  updateDisplay(+inputBuffer);
}

function handleDecimal() {
  if (inputBuffer.length < 10 && !inputBuffer.includes(".")) {
    inputBuffer += ".";
  }

  updateDisplay(+inputBuffer);
}

function handleOperator(operator) {
  if (operator === "=") {
    if (operatorX === null || isResult) {
      return;
    } else {
      operandB = +inputBuffer;
      let result = operate(operandA, operandB, operatorX);
      isResult = true;
      operandA = +result;
      operandB = 0;
      operatorX = null;
      isDecimal = false;
      inputBuffer = "";

      updateDisplay(result);
      updateSignDisplay();
    }
  } else {
    if (isResult) {
      operatorX = operator;
      updateSignDisplay(operator);
    } else if (isFirstOperand) {
      operatorX = operator;
      operandA = +inputBuffer;
      inputBuffer = "";
      isFirstOperand = false;
      isDecimal = false;

      updateSignDisplay(operator);
      updateDisplay(0);
    } else {
      operandB = +inputBuffer;

      let result = operate(operandA, operandB, operatorX);
      isResult = true;
      operandA = +result;
      operandB = 0;
      operatorX = operator;
      isDecimal = false;
      inputBuffer = "";

      updateDisplay(result);
      updateSignDisplay(operator);
    }
  }
}
