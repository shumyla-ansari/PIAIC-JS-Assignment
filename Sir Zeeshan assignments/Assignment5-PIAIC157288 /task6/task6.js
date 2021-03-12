
var array = [0,5,6,7];
function mirror(arr){
    var length = arr.length;
    for (let i = length - 1; i >= 0; i--) {
        arr.push(arr[i]);   
    }
     return arr
}
console.log(mirror(array));

//------------------

var array = [0,5,6,7];
function mirror(arr){
    var newArray = arr.slice(0);
    console.log(newArray)
    newArray.reverse();
    return arr.concat(newArray)
}
console.log(mirror(array));


