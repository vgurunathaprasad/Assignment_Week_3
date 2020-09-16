(function(arr) { pa = []; 
    for(i=0;i<arr.length;i++){
    t = arr[i].split("").reverse().join("");
    if(a[i] == t) pa.push(a[i]);
}
return pa;
})(["amma","rama","appa","hari"])