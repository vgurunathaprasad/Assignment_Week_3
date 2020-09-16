var ar = [1,2,3,4,5,6];

function isPalindrome(a) {
    t = a.split("").reverse().join("");
    return a == t;
}

od_arr = ar.filter(x=>isPalindrome(x))
