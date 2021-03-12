var enteredString = (prompt("Please enter a string letter"));

if (enteredString === "a") {
  result = "true";
} else if (enteredString === "e") {
  result = "true";
} else if (enteredString === "i") {
  result = "true";
} else if (enteredString === "o") {
  result = "true";
} else if (enteredString === "u") {
  result = "true";
}
else {
    result = "False"
}

document.write(
  "Your result is :" + enteredString + "=" + result
);