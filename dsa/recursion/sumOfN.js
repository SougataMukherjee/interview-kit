function sumOfN(n){
    if(n<0 || !Number.isInteger(n))return false
    if (n === 0) return 0;
    if(n===1) return 1;
    return n+sumOfN(n-1)
}
console.log(sumOfN(5))//1+2+3+4+5