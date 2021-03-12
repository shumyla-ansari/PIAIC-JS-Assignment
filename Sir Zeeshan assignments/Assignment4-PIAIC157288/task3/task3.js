// Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 8 characters long
// d. If the password does not meet the above requirements, prompt
// the user to enter a valid password. For character codes of a-z,
// A-Z & 0-9


var newPassword = prompt("Enter a password");
var isValid = false;

if (newPassword.length < 8 || Number(newPassword[0])) {
  isValid = false;
} else {
  for (let i = 0; i < newPassword.length; i++) {
    const char = newPassword[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }
  }

  if (isValid)
    console.log('Success')
  else
    console.log('Fail');




  // if (newPassword.length >= 8){

  // };

  // for (var i =0; i<newPassword.length; i++ ){
  //   {


  //       if (typeof(newPassword[i] === String)) {
  //         var n = Number(newPassword[i]) ;
  //         if (n !== newPassword[i]){

  //               alert("you entered correct password")
  //               break;
  //         }

  //               else{
  //                 alert("Invalid you cant have first number in password")

  //               }

  //     }
  //     else {
  //         alert("Invalid character password")
  //         break
  //         }


  //     }
  //     else {
  //         alert("Invalid password")
  //         break
  //         }
  // }