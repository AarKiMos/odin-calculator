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
      return multiply(opA, opB);
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
  console.log(valueString);
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

updateSignDisplay("");
