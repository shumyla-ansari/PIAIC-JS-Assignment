var A = [24, 53, 78, 91, 12];
var largest = 0;
for (var i =0; i <A.length ; i++) {
  if(A[i] > largest){
    var largest= A[i];
  }

}
console.log("using for: ", largest)

//-------- using Array.reduce function



var max = A.reduce(function(a,b){
  return Math.max(a,b)
})
console.log(max)

//---- using Math.max

console.log(Math.max(...A))
console.log(Math.max.apply(null, A)); 