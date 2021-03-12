var secretNum = 3;
var inputNum = parseInt(prompt("Please enter number between 1 to 10"));


if (inputNum === secretNum ) {
    document.write("Bingo..!! You won!!!")
}  else if (++inputNum === secretNum ) {
    document.write(" close enough!")
}  