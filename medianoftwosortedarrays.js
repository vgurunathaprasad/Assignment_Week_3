function mergeArrays(ar1, ar2)
{
    var result = [];

    for(let el of ar1)
    {
        result.push(el);
    }

    for(let el of ar2)
    {
        result.push(el);
    }

    return result;
}

(function(ar1,ar2){
    res = mergeArrays(ar1.sort(),ar2);
    res.sort((a,b)=>a-b);
    if(res.length%2 == 0){
        return (res[res.length/2] + res[(res.length)-1])/2;
    }
    else return res[res.length/2];
})([1,2,4,5,6],[7,8,9,12,34,4])