// Write a program that takes a positive integer from user & display the
// following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var num = prompt("enter positive integer");

document.write("Num of value : " + (num) + "<br>");
document.write("Round of value : " + Math.round(num) + "<br>");
document.write("floor of value : " + Math.floor(num) + "<br>");
document.write("ceil of value : " + Math.ceil(num) + "<br>");
