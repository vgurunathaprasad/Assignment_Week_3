const { of } = require("core-js/fn/array");

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i of arr){
     newObject[i[0]] = i[1];
 }
 return newObject;
}