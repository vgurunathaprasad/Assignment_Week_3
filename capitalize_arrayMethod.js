function capitalize(a){
    a=a.charAt(0).toUpperCase() + a.slice(1); 
}

arr = ["rama","krishna","govinda","madhava","narayana"];

x = arr.map(x=>capitalize(x));
console.log(x);