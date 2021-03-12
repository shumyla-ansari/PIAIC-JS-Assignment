// add weeks in current date

function addWeek(w){


 var days = w*7;


 var d = new Date();
 (d.setDate(days))
 return console.log(d);




}

addWeek(3);
addWeek(10);