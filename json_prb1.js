var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
    for(let i in obj){
        console.log(i,obj[i]);
    }
}