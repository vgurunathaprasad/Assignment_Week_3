(function(arr =[]){
    or = [];
    for(i of arr) { if(i%2!=0) or.push(i); }
    return or;
})([1,2,3,4,5,6,7])