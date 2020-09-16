function isPrime(n)
{
    flg = true;

    if(a==1 || a==2) return flg;

    for(i=2;i<n;i++){
        if(a%i==0) { 
            flg=false;
            break;
        }
    }

    return flg;
}

(function(arr=[]){ for(i of arr){ console.log(isPrime(i)); } })([23,45,67,87,90])