//------------chp 18-19-20------------//

var totalCourses = [];

var course1 = prompt("course1, ");
var course2 = prompt("course2, ");
var course3 = prompt("course3, ");
var course4 = prompt("course4, ");
var course5 = prompt("course5, ");

totalCourses.push(course1, course2, course3, course4, course5)
alert(totalCourses);

var totalNewCourses = [];
var courseN1 = prompt("course1", course1);
var courseN2 = prompt("course2", course2);
var courseN3 = prompt("course3", course3);
var courseN4 = prompt("course4", course4);
var courseN5 = prompt("course5", course5);
totalNewCourses.push(courseN1, courseN2, courseN3, courseN4, courseN5)
for (var i = 0; i < totalCourses.length; i++ ){
 if (totalCourses[i] !== totalNewCourses[i]){
   totalCourses.splice(i, 1, totalNewCourses[i])
  } 
}

alert(totalCourses);

