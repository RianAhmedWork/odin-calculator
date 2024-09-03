let firstNum = null;
let secondNum = null;
let operator = null;
let counter = 0;

function operate(a, b, c) {
  if (a === "+") {
    return add(b, c);
  } else if (a === "-") {
    return subtract(b, c);
  } else if (a === "*") {
    return multiply(b, c);
  } else {
    return divide(b, c);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (screen.textContent.length < 12) {
      if (screen.textContent === "0") {
        if (button.id === "one") {
          screen.textContent = "1";
        } else if (button.id === "two") {
          screen.textContent = "2";
        } else if (button.id === "three") {
          screen.textContent = "3";
        } else if (button.id === "four") {
          screen.textContent = "4";
        } else if (button.id === "five") {
          screen.textContent = "5";
        } else if (button.id === "six") {
          screen.textContent = "6";
        } else if (button.id === "seven") {
          screen.textContent = "7";
        } else if (button.id === "eight") {
          screen.textContent = "8";
        } else if (button.id === "nine") {
          screen.textContent = "9";
        } else if (button.id === "zero") {
          screen.textContent = "0";
        }
      } else if (counter > 0) {
        if (button.id === "one") {
          screen.textContent = "1";
          counter = 0;
        } else if (button.id === "two") {
          screen.textContent = "2";
          counter = 0;
        } else if (button.id === "three") {
          screen.textContent = "3";
          counter = 0;
        } else if (button.id === "four") {
          screen.textContent = "4";
          counter = 0;
        } else if (button.id === "five") {
          screen.textContent = "5";
          counter = 0;
        } else if (button.id === "six") {
          screen.textContent = "6";
          counter = 0;
        } else if (button.id === "seven") {
          screen.textContent = "7";
          counter = 0;
        } else if (button.id === "eight") {
          screen.textContent = "8";
          counter = 0;
        } else if (button.id === "nine") {
          screen.textContent = "9";
          counter = 0;
        } else if (button.id === "zero") {
          screen.textContent = "0";
          counter = 0;
        }
      } else if (screen.textContent !== "0") {
        if (button.id === "one") {
          screen.textContent += "1";
        } else if (button.id === "two") {
          screen.textContent += "2";
        } else if (button.id === "three") {
          screen.textContent += "3";
        } else if (button.id === "four") {
          screen.textContent += "4";
        } else if (button.id === "five") {
          screen.textContent += "5";
        } else if (button.id === "six") {
          screen.textContent += "6";
        } else if (button.id === "seven") {
          screen.textContent += "7";
        } else if (button.id === "eight") {
          screen.textContent += "8";
        } else if (button.id === "nine") {
          screen.textContent += "9";
        } else if (button.id === "zero") {
          screen.textContent += "0";
        }
      }
    }

    if (button.id === "ac") {
      screen.textContent = "0";
    }
    if (button.id === "add") {
      if (firstNum !== null) {
        secondNum = parseFloat(screen.textContent);
        let result = operate(operator, firstNum, secondNum);
        if (Number.isInteger(result)) {
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        } else {
          result.toFixed(3);
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        }
        operator, firstNum, (secondNum = null);
      }
      firstNum = parseFloat(screen.textContent);
      operator = "+";
      counter = 1;
    }
    if (button.id === "subtract") {
      if (firstNum !== null) {
        secondNum = parseFloat(screen.textContent);
        let result = operate(operator, firstNum, secondNum);
        if (Number.isInteger(result)) {
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        } else {
          result.toFixed(3);
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        }
        operator, firstNum, (secondNum = null);
      }
      firstNum = parseFloat(screen.textContent);
      operator = "-";
      counter = 1;
    }
    if (button.id === "multiply") {
      if (firstNum !== null) {
        secondNum = parseFloat(screen.textContent);
        let result = operate(operator, firstNum, secondNum);
        if (Number.isInteger(result)) {
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        } else {
          result.toFixed(3);
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        }
        operator, firstNum, (secondNum = null);
      }
      firstNum = parseFloat(screen.textContent);
      operator = "*";
      counter = 1;
    }
    if (button.id === "division") {
      if (firstNum !== null) {
        secondNum = parseFloat(screen.textContent);
        let result = operate(operator, firstNum, secondNum);
        if (Number.isInteger(result)) {
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        } else {
          result.toFixed(3);
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        }
        operator, firstNum, (secondNum = null);
      }
      firstNum = parseFloat(screen.textContent);
      operator = "/";
      counter = 1;
    }
    if (button.id === "equals") {
      if (firstNum !== null) {
        secondNum = parseFloat(screen.textContent);
        let result = operate(operator, firstNum, secondNum);
        if (Number.isInteger(result)) {
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        } else {
          result.toFixed(3);
          if (String(result).length > 12) {
            screen.textContent = String(result).slice(0, 11);
          } else {
            screen.textContent = result;
          }
        }
        operator = null;
        firstNum = null;
        secondNum = null;
      }
    }
    if (button.id === "sign") {
      screen.textContent = parseFloat(screen.textContent) * -1;
    }
    if (button.id === "percent") {
      screen.textContent = parseFloat(screen.textContent) / 100;
    }
  });
});
