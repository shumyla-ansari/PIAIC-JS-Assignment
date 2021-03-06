var firstName = prompt("Enter your name");
var dateOfBirth = prompt("Enter your date of birth");
var monthOfBirth= prompt("Enter your month");
var yearOfBirth = prompt("Enter your year of birth");
console.log(dateOfBirth);
console.log(monthOfBirth);
console.log(yearOfBirth);

var currentDate = new Date();
console.log(currentDate);

var currentHours = currentDate.getHours();
console.log(currentHours)
if (currentHours >= 12 && currentHours < 18 ){
  var greeting = "Good Afternoon"
} else if ( currentHours > 00 && currentHours < 12){
  var greeting = "Good Morning"
} else if ( currentHours > 18 && currentHours < 24){
  var greeting = "Good Evening"
}

console.log("Hello " + firstName + " " + greeting);
 var yourBirthday = new Date( "\"" + monthOfBirth+ ", "+ dateOfBirth+ " "+ yearOfBirth + "\"");
 //var localTime = yourBirthday.toLocaleDateString('en-GB', { timeZone: 'UTC' });
 console.log("your date of birth: "+ yourBirthday);

 var birthday = yourBirthday.getFullYear();
 var currentYear = currentDate.getFullYear();
 var totalYears = currentYear - birthday
 console.log(totalYears)
