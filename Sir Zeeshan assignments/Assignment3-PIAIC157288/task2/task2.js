var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

var total = 500;

var percentage = [];

for (var i = 0; i < scores.length; i++) {
    percentage[i] = scores[i] * 100 / total
};

console.log(percentage);

for (var i=0; i < students.length; i++){
    document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage is " + percentage[i]+ "%<br>")
}