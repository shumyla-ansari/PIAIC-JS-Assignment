function titleCase(input) {
  var words = input.toLowerCase().split(" ");

  for (var i =0; i<words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);

    var  newwords = words.join(" ");
  }

  return newwords;
}

console.log(titleCase("I'm a little tea pot"));


//----------Factorialize
function factorialize(num) {
  var total = 1
  for (var i = 1; i <= num; i++) {
    total *= i
  }
  return total;
}

console.log(factorialize(5));