// Write a program to validate email address with following evaluation
// a. This string must contain @
// b. Ths string must contact chars
// c. The @ must have at least 1 char in front
// d. The string must contain .(dot) after @ and at least 1 char.

var emailToTest = prompt("enter email address");

//   for (var i =0; i<emailToTest.length; i++){
    var atSymbol = emailToTest.indexOf("@");
    console.log(atSymbol)
    if(atSymbol < 1) {
        alert("not email")
    };

    var dot = emailToTest.indexOf(".");
    if(dot <= atSymbol + 2){
        alert("not email")
    };

    // check that the dot is not at the end
    if (dot === emailToTest.length - 1) {
        alert("not email")
    };
   
//}