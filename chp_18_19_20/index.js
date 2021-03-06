var totalCourses = [];

var course1 = prompt("course1, ");
var course2 = prompt("course2, ");
var course3 = prompt("course3, ");
var course4 = prompt("course4, ");
var course5 = prompt("course5, ");

totalCourses.push(course1, course2, course3, course4, course5)
alert(totalCourses);

let totalNewCourses = [];
var course1 = prompt("course1", course1);
var course2 = prompt("course2", course2);
var course3 = prompt("course3", course3);
var course4 = prompt("course4", course4);
var course5 = prompt("course5", course5);
totalNewCourses.push(course1, course2, course3, course4, course5)


for (var i =0; i < totalNewCourses.length; i++){
  if (totalCourses[i] !== totalNewCourses[i]){
    totalNewCourses.splice(courses[i], 1, course[i])
  } 
}


alert(totalNewCourses);

