// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

var counting = [];

for (var i =1; i<16; i++ ){
  counting.push(i)
}; 
console.log(counting)
var c= counting.join(", ");
document.write("Counting : " + c + "<br><br>")

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var countingReverse = [];

for (var i =10; i>0; i-- ){
  countingReverse.push(i)
}; 
console.log(countingReverse)
var reverse= countingReverse.join(", ");
document.write("Reverse Counting : " + reverse +  "<br><br>")

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

var evenCount = []

for (var i =0; i<=20; i++ ){
  evenCount.push(i)
  i++
}; 
console.log(evenCount)
var even= evenCount.join(", ");
document.write("EVen : " + even +  "<br><br>")

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
var oddCount = []

for (var i =1; i<=20; i++ ){
  oddCount.push(i)
  i++
}; 
console.log(oddCount)
var odd= oddCount.join(", ");
document.write("Odd : " + odd +  "<br><br>")

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var series = []

for (var i =2; i<=20; i++ ){
  series.push(i+"k")
  i++
}; 
console.log(series)
var series= series.join(", ");
document.write("series : " + series +  "<br><br>")