var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
 newObject = {};
 newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}