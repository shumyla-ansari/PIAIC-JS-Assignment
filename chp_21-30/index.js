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

// for (var i =0; i<newText.length; i++){
//   var newChar = newText.slice(i, i+1);
//   console.log(newText.length)
//   console.log(newChar, i, "first")
//     var lastChar = newText.charAt(newText.length-1-i);
//     console.log(lastChar, i, "last")
//  var reverseText = newText.replace(lastChar, newChar)
//  if (i === newText.length/2){
//    break;

 //}
//}

//console.log( reverseText)


  //This
  //  0123