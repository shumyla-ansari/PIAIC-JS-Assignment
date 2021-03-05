var firstNumber = parseInt(prompt("Please enter first number"));
var secondNumber = parseInt(prompt("Please enter second number"));
var operator = prompt(
  'Please enter operator of ypur choice, "+", "-", "*", "/" or "%".'
);

if (operator === "+") {
  result = firstNumber + secondNumber;
} else if (operator === "-") {
  result = firstNumber - secondNumber;
} else if (operator === "/") {
  result = firstNumber / secondNumber;
} else if (operator === "%") {
  result = firstNumber % secondNumber;
} else if (operator === "*") {
  result = firstNumber * secondNumber;
}

alert(
  "Your result is :" + firstNumber + operator + secondNumber + "=" + result
);
