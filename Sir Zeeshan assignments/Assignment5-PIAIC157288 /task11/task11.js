// Write a JavaScript function that accept string and returns the count
// of vowel used within the string.

function isVowel(char) {
  var letter = char;
var isValid = false
    switch (letter) {
      case "a":
        console.log("vowel", letter);
        isValid = true;
        break;

        case "e":
          console.log("vowel", letter);
          isValid = true;
          break;

          case "i":
            console.log("vowel", letter);
            isValid = true;
            break;

            case "o":
              console.log("vowel", letter);
              isValid = true;
              break;

              case "u":
                console.log("vowel", letter);
                isValid = true;
                break;

      default:
        console.log("not a vowel", letter);
        isValid
        break;
    }

 
    return console.log(isValid)
  }

isVowel("a");
isVowel("e");
isVowel("i");
isVowel("o");
isVowel("u");
isVowel("t");
isVowel("v");
isVowel("m");