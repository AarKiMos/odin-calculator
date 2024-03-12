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

