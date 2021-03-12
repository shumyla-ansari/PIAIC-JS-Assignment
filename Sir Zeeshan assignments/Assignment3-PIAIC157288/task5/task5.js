var duplicatecity = ["Karachi", "Lahore", "Islamabad", "Quetta", "Islamabad", "Islamabad", "Islamabad", "Peshawar", "Peshawar", "Peshawar","Islamabad", "Islamabad"];
var uniqueArray = [];

for (var i = 0; i < duplicatecity.length; i++) {

 
    if(uniqueArray.indexOf(duplicatecity[i]) === -1 ) {
  
        uniqueArray.push(duplicatecity[i]);
    }


}


    document.write(uniqueArray)