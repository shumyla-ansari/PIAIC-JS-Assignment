var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date = new Date();
var day = date.getDay()
console.log(day)

function weekend(day) {

  var remainingdays = 6-day

  console.log(remainingdays)
  switch(day) {
    case 6:
      console.log("Today is Saturday");
    case 0:
      console.log("Today is Sunday") ;
      break;
    default:
      console.log("looking forward to weekend , just " + remainingdays + " more days left") 
  }

}

(weekend(day));