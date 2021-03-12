
var array = [0,5,6,7];
function mirror(arr){
    var length = arr.length;
    for (let i = length - 1; i >= 0; i--) {
        arr.push(arr[i]);   
    }
     return arr
}
console.log(mirror(array));

// var array = [0,5,6,7];
// var reverse =[];
// var newArray =[];

// function mirror(arr){
//     var newArray =[];
//     for(var i =0; i< arr.length; i++){
//      var n = (arr.slice(i,i+1)).toString();

//         newArray.push(n)

//     }

//      return newArray
// }

// console.log(mirror(array));