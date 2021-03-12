var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log(currentHour);
console.log("current date: ", currentDate)


var newHour = currentHour+1;
console.log(newHour);

currentDate.setHours(newHour);
console.log("current date: ", currentDate)




