var totalMarks = 300;
var course1 = parseInt(prompt("Please enter course 1 marks"));
var course2 = parseInt(prompt("Please enter course 2 marks"));
var course3 = parseInt(prompt("Please enter course 3 marks"));

var obtainedMarks = course1+ course2+ course3;

var percentage = obtainedMarks * 100/ totalMarks;

if (percentage >= 80 ) {
    document.write("Total Marks: " + totalMarks + "<br> Marks obtained: " + obtainedMarks + 
    "<br> Percentage: " + percentage + "%<br> Grade A-one <br> Remarks: Excellent")
}  else if (percentage >= 70 ) {
    document.write("Total Marks: " + totalMarks + "<br> Marks obtained: " + obtainedMarks + 
    "<br> Percentage: " + percentage + "%<br> Grade A <br> Remarks: Good")
}  else if (percentage >= 60 ) {
    document.write("Total Marks: " + totalMarks + "<br> Marks obtained: " + obtainedMarks + 
    "<br> Percentage: " + percentage + "%<br> Grade B <br> Remarks: You need to improve")
 } else if (percentage < 60 ) {
        document.write("Total Marks: " + totalMarks + "<br> Marks obtained: " + obtainedMarks + 
        "<br> Percentage: " + percentage + "%<br> Fail <br> Remarks: Sorry")
 };