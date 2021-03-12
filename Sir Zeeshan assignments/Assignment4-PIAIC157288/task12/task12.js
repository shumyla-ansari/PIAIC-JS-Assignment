var currentdate = new Date();
console.log(currentdate);
var currentDay = currentdate.getDate();
console.log(currentDay)

if(currentDay >0 &&currentDay<= 15){
    console.log("First fifteen days of the month")
}
else if (currentDay >= 16 && currentDay < 31){
    console.log("Last fifteen days of the month")
}


