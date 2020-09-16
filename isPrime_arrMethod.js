var ar = [1,2,3,4,5,6];

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

od_arr = ar.filter(x=>isPrime(x))
