//------------chp 21-30------------//

var decimalNumber = prompt("Enter a decimal number");
decimalNumber = Math.ceil(decimalNumber);
var text = "This is dummy text";
var newText = text.slice(0, decimalNumber);
console.log(newText);

var reverseString = '';

for (i=newText.length; i>0; i--)
{

   reverseString += newText[i-1];
  console.log(reverseString)
}
alert(reverseString)


//-------------assignment 2-------//
var newInput; 
var input = prompt("Enter a random string sentence");
var words = input.toLowerCase().split(" ");
console.log(words)
for (var i =0; i<words.length; i++){
words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
var  newwords = words.join(" ");
}

alert(newwords)
