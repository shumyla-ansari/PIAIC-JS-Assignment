var totalMarks = 500;
var course1 = parseInt(prompt("Please enter course 1 marks"));
var course2 = parseInt(prompt("Please enter course 2 marks"));
var course3 = parseInt(prompt("Please enter course 3 marks"));
var course4 = parseInt(prompt("Please enter course 4 marks"));
var course5 = parseInt(prompt("Please enter course 5 marks"));
var obtainedMarks = course1+ course2+ course3+ course4+ course5;

var percentage = obtainedMarks * 100/ totalMarks;
console.log(percentage)

switch(true) {
  case (percentage >= 90):
  alert("A+");
  break;
  case percentage >= 80:
  alert("A");
  break;
  case percentage >= 70:
  alert("B");
  break;
  case percentage >= 60:
  alert("C");
  break;
  case percentage >= 50:
  alert("D");
  break;
  case percentage >= 40:
  alert("F");
  break
   default:
   alert("Fail");

}
