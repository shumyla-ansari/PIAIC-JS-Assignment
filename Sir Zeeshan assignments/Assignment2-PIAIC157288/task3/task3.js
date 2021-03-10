var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//-----------------
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
console.log(b, "after running \"b\" condition")
document.write("Value of b is : "+ b +  " after \"b\" condition hence (82 !== 83)<br>")


//---------------------
var c = 12;
if (c++ === 13) {
    console.log("condition 1 is true", c)

    alert("condition 1 is true");
}
console.log(c, "after 1st condition")
document.write("Value of c is : "+ c +  " after 1st condition<br>")

if (c === 13) {
    console.log("condition 2 is true", c)
    alert("condition 2 is true");
}
console.log("Value of c is : "+ c + "after 2nd condition")
document.write("Value of c is : "+ c +  " after 2nd condition<br>")

if (++ c < 14) {
    console.log("condition 3 is true", c)
    alert("condition 3 is true");
}
console.log(c, "after 3rd condition")
document.write("Value of c is : "+ c +  " after 3rd condition<br>")
if (c === 14) {
    console.log("condition 4 is true", c)
    alert("condition 4 is true");
}
console.log(c, "after 4th condition")
document.write("Value of c is : "+ c +  " after 4th condition")

//-------------------

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//--------------------------
if (true){

    alert("True");
    }
    if (false){
    alert("False");
    }

//----------------------
    
if("car" < "cat"){
    
    alert("car is smaller than cat");
    }
