
var city = ["Karachi", "Lahore", "Islamabad", "Faisalabad"]
var o = ["th", "st", "nd", "rd"];

for (var i = 0; i < city.length; i++) {
    if(i+1+o[i+1] === NaN){
        break;
    }
    document.write(i+1+o[i+1] + " choice is " + city[i] + "<br>")


}