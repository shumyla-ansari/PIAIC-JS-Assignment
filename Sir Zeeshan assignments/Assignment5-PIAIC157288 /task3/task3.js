function palindrom(text) {
    var count = 0;

  if((text.length)%2 === 0) {
      count = text.length/2;
  } else {
      if (text.length === 1) {
          console.log("entry is a palindrome")
          return true;
      } else {
          count = (text.length -1)/2;
      }
  }
  for (var i =0; i < count; i++){
      if(text[i] != text.slice(-1-i)[0]){
        console.log("Entry is not a palindrome.");
        return false;
      }
  }
  
    
  console.log("The entry is a palindrome.");
  return true;
}
palindrom('madam');
palindrom('tibit');
palindrom('run');
palindrom('house');

// var tex = "house";
// console.log(tex.slice(-1-2))