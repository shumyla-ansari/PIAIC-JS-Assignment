//---------a

var colours = ["green", "blue", "red", "yellow"];

var userStartColor = prompt("Please enter colour of your choice to be added in beginning");

colours.unshift(userStartColor);

document.write("Colour added in begining : " + colours+" <br>");

// ---------b

var userEndColor = prompt("Please enter colour of your choice to be added at end");

colours.push(userEndColor);
document.write("Colour added in end : " + colours + " <br>");

//-----------c

var colours = ["green", "blue", "red", "yellow"];
colours.unshift("purple, black");
document.write("Colours added in begining : " + colours+" <br>");

//-----------d

var colours = ["green", "blue", "red", "yellow"];
colours.shift();
document.write("Colour deleted in begining : " + colours+" <br>");

//-----------e

var colours = ["green", "blue", "red", "yellow"];
colours.pop();
document.write("Colour deleted in end : " + colours+" <br>");

//---------f

var colours = ["green", "blue", "red", "yellow"];

var userRandomColor = prompt("Please enter colour of your choice to be added");
var userPositionColor = parseInt(prompt("Please enter position/index of your choice to be added"));

colours.splice(userPositionColor, 0, userRandomColor);

document.write("Colour added in at "+ userPositionColor + " index : " + colours+" <br>");

//---------g

var colours = ["green", "blue", "red", "yellow"];

var numDeleteColor = parseInt(prompt("Please enter colour how many colours to be deleted"));
var delPositionColor = parseInt(prompt("Please enter position/index of your choice to be deleted"));

colours.splice(delPositionColor, numDeleteColor);

document.write("Total " + numDeleteColor + " Colours deleted in at "+ delPositionColor + " index : " + colours+" <br>");