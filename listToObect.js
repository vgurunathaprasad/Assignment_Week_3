var obj = {name: "ISRO", age: 35, role: "Scientist"};

function convertListToObject(obj) {
    l  = [];

    for(let i in obj){
        l.push([i,obj.i]);
    }

    return l;
}