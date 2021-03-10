var userPassword= "hello123"
var enteredPassword = (prompt("Please enter your password"));


if(!enteredPassword) {
    alert("Please enter password");
};
if (enteredPassword) {
    if(enteredPassword === userPassword) {
        result = "Correct! The password you entered matches the original password";
      } else if (enteredPassword !== userPassword) {
          result = "Incorrect password"
      };

} 


document.write(
   result
);
