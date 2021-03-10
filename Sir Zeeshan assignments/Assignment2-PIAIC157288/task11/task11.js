var enteredTime = (prompt("Please enter a time in 0000 24-hour format"));

if (enteredTime >= 0000 && enteredTime < 1200) {
  result = "Good Morning";
} else if (enteredTime >= 1200 && enteredTime < 1700) {
  result = "Good Afternoon";
} else if (enteredTime >= 1700 && enteredTime < 2100) {
  result = "Good Evening";
} else if (enteredTime >= 2100 && enteredTime < 2359) {
  result = "Good Night";
} 

document.write(
  "Your result is :" + enteredTime + "=" + result
);