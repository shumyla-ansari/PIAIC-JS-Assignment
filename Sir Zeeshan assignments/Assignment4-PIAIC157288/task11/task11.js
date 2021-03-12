var num1 = prompt("please enter num 1");
var num2 = num1.split("");
console.log(num2);
var array =[];

for (var i = 0; i<num2.length; i++){
    array.push(Number(num2[i]));
}
console.log(array)

var newArr = array.reduce((a,b)=> a+b
)

var mean = newArr/(array.length)
console.log(mean);



