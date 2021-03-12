// Convert number in words. Example
// Input
// 23
// 123

// Output
// Twenty Three
// One Hundred and Twenty Three


var singles = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var tens = ['', "onety", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninty"];

var oneties = ['ten', "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var input = prompt('Enter a number');

var wordNumber = ''

var firstChar = input[input.length - 1]
wordNumber = singles[Number(firstChar)];

if (input.length >= 2) {
    var secondDigit = Number(input[input.length - 2]);
    if (secondDigit === 1) {
        wordNumber = oneties[secondDigit] + ' ' + wordNumber;
    } else {
        wordNumber = tens[secondDigit] + ' ' + wordNumber;
    }
}

if (input.length === 3) {
    var thirdChar = input[input.length - 3];
    wordNumber = singles[Number(thirdChar)] + ' hundred and ' + wordNumber
}

console.log(wordNumber)








// i cant hear you, voice is breaking