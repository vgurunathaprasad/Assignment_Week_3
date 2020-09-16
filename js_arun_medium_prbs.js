const { sum } = require("lodash");
const { v1 } = require("uuid");

function addFive(a) {
    return (a+5);
}

function getOpposite(a){
    if(isNaN(a)) return a;
    if(!!(a%1)) return a;
    return (a*-1);
}

function toSeconds(mins){
    return mins*60;
}

function toInteger(strn){
    return Number(strn);
}

function nextNumber(i) {
    return (i+1);
}

function getFirstElement(arr){
    return arr[0];
}

function hoursToSeconds(h){
    return (h*60*60);
}

function perimeterOfRectangle(n1,n2) {
    return (2+(n1+n2));
}

function lessThanHundred(n1,n2){
    var sum = n1+n2;
    if(sum < 100) return true;
    else return false;
}

function remainder(n1,n2){
    return n1%n2;
}

function countAnimalsLegs(n1,n2,n3) {
    return ((n1*2)+(n2*4)+(n3*4))
}

function frames(sec,fps){
    return (fps*60)*sec;
}

function divisableByFive(a){
    if(a%5==0) return true;
    return false;
}

function isEven(a){
    if(isNaN(a)) return -1;
    if(a%2==0) return true;
    return false;
}

function areBothOdd(n1,n2){
    if(n1%2==0) { if(n2%2==0) return true; }
    return false;
}

function getFullName(fn="",ln=""){
    return (fn+ " "+ln);
}

function getLenghthOfWord(a){
    return a.length;
}

function isSameLength(w1,w2){
    if(w1.length == w2.length) return true;
    return false;
}

function getDistance(x1,y1,x2,y2){
    v1 = x2-x1;
    v2 = y2-y1;

    v1 = v1*v1;
    v2 = v2*v2;

    d = v1+v2;
    return Math.sqrt(d);
}

function getNthElement(arr,n){
    return arr[n];
}

function getLastElement(arr){
    n = arr.length -1;
    return arr[n];
}

hasOwnProperty

function getPropery(obj,key){
    if(obj.hasOwnProperty(key)) return obj[key];
    return "N/A";
}

function addProperty(obj,key,val){
    obj[key] = val;
}

function  deleteProperty(obj,key){
    if(obj.hasOwnProperty(key)) delete obj[key];
}

function countPositivesSumNegatives(arr){
    s =0;
    c =0;
    for(let i of arr){
        if(i<0) s+=i;
        if(i>0) c+=1;
    }

    return [c,s];
}

function getPositives(arr){
    pa = []
    for(let i of arr){
        if(i>0) pa.push(i);
    }

    return pa;
}


function getPowerOfTwo(n){
    arr = [];
    for(i=0;i<=n;i++){
        pa.push(Math.pow(2,i));
    }

    return pa;
}

function findMax(ar){
    return Math.max(ar);
}

function isPrime(a){
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

function getPrimes(nPrimes, startAt)
{
    pl = [];
    c =0;
    for(i=startAt;c<nPrimes;i++){
        if(isPrime(i)) {
            pl.push(i);
            c+=1;
        }
    }
 
}


// Returns true if a number is prime
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

function reverseString(str){
    return str.split("").reverse().join("");
}

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

function sumCSV(s)
{
    l = s.split(",").map(x=>Number(x));

    sum = 0;
    for(let i of l) sum+=i;

    return sum;
}

