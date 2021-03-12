// Write a JavaScript function that accept string and returns the count
// of vowel used within the string.

function str(text) {
  var length = text.length;
  console.log(length);
  var count = 0;
  var j = 0;

  while (j < text.length) {
    var i = text[j];
    switch (i) {
      case "a":
        console.log("vowel", i);
        count++;
        console.log(count, "count");
        break;

      case "e":
        console.log("vowel", i);
        count++;
        console.log(count, "count");
        break;

      case "i":
        console.log("vowel", i);
        count++;
        console.log(count, "count");
        break;

      case "o":
        console.log("vowel", i);
        count++;
        console.log(count, "count");
        break;

      case "u":
        console.log("vowel", i);
        count++;
        console.log(count, "count");
        break;

      default:
        console.log("not a vowel", i);
        break;
    }

    j++;
  }

  return console.log(count);
}

str("i will not allow");
