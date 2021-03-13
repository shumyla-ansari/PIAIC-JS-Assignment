// Write a function that take birth date and returns Age in years, months
// and days

function birthdate(date){

    var currentDate = Date.now();
    var birthDate = Date.parse(date);
    console.log(birthDate)
    console.log(currentDate)

    var millisecdifference = currentDate - birthDate;
    var days = millisecdifference/(1000*60*60*24)
    console.log(days);
    var months = days/30.5;
    console.log(months);
    var years = months/12;
    var newYear = Math.floor(years);
    console.log(years);
    console.log(newYear, "35");
    var newDays = newYear*365;
    console.log(newDays, "newDays");

    var remainingDays = days - newDays;
    console.log(remainingDays, "remainingdays");

    var newremainingMonth = remainingDays/30.5;
    console.log(newremainingMonth, "remaing month")

   newMonthsDiff = years -newYear;
   console.log(newMonthsDiff) ;

   var newMonth = newMonthsDiff*12;
   console.log(newMonth)
    //var currentMonth = currentDate.getMonth();
//     console.log(millisecdifference);
//     var askedDate = new Date(date);
//    // var askedMonth = askedDate.getMonth();
//     var totalMonth =  askedDate.getMonth() - currentDate.getMonth() ;
//     var totalYear = currentDate.getFullYear() -askedDate.getFullYear();
//     var totalday = currentDate.getDate() -askedDate.getDate();
    
//     console.log(totalMonth)
//     console.log(totalYear)
//     console.log(totalday)
//     console.log(askedDate);

    //console.log("you are " + totalYear + ", " + totalMonth + " months " + totalday + " days old!")

}

birthdate("Nov 16, 1985")