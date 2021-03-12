var str = "<p><strong><em>Only print this</em></strong></p>";

var newStr = str.replace(/<p><strong><em>/g, "");
var newStr1 = newStr.replace(/(<([^>]+)>)/gi, "");
console.log(newStr1);