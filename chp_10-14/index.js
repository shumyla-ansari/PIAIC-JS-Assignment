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

//-------------assignment 2 chp 10-14 -----------------//

var course1 = parseInt(prompt("Please enter course 1 marks"));
var course2 = parseInt(prompt("Please enter course 2 marks"));
var course3 = parseInt(prompt("Please enter course 3 marks"));
var course4 = parseInt(prompt("Please enter course 4 marks"));
var course5 = parseInt(prompt("Please enter course 5 marks"));
var obtainedMarks = course1+ course2+ course3+ course4+ course5;
var totalMarks = 500;
var total = obtainedMarks * 100/ totalMarks


alert(
  "Your result is : " + total + "%"
);