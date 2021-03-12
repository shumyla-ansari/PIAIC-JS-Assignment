var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome , what do you want?")

for (var i = 0; i < A.length; i++){
  if (userInput === A[i]){
    alert(A[i] + " is available in bakery")
    break;
  } else if (userInput !== A[i]){
    alert(userInput + " is not available in bakery")
    break;
  }
}