//----------chp 15-16-17-----------//

var totalCourses = [];

var course1 = prompt("course1, ");
var course2 = prompt("course2, ");
var course3 = prompt("course3, ");
var course4 = prompt("course4, ");
var course5 = prompt("course5, ");

totalCourses.push(course1, course2, course3, course4, course5)
alert(totalCourses);

//let totalNewCourses = [];
var courseN1 = prompt("course1", course1);
var courseN2 = prompt("course2", course2);
var courseN3 = prompt("course3", course3);
var courseN4 = prompt("course4", course4);
var courseN5 = prompt("course5", course5);
//totalCourses.push(courseN1, courseN2, courseN3, courseN4, courseN5)
if (course1 !== courseN1){
  totalCourses.splice(0, 1, courseN1)
} else if 
(course2 !== courseN2){
  totalCourses.splice(1, 1, courseN2)
} else if 
(course3 !== courseN3){
  totalCourses.splice(2, 1, courseN3)
} else if 
(course4 !== courseN4){
  totalCourses.splice(3, 1, courseN4)
} else if 
(course5 !== courseN5){
  totalCourses.splice(4, 1, courseN5)
} 

alert(totalCourses);

