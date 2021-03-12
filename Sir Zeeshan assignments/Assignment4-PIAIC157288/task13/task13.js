var epochTime = new Date(0);
console.log(epochTime);
var epochMilli = epochTime.getTime();
console.log(epochMilli);

var currenttime = new Date();
var currentMilli = currenttime.getTime();

var elapsedMillisecs = currentMilli - epochMilli
console.log(elapsedMillisecs)
var elapsedMinutes = elapsedMillisecs/(60*60)

console.log(elapsedMinutes)




