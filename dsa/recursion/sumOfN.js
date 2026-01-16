function sumOfN(n){
    if(n===1) return 1;
    return n+sumOfN(n-1)
}
console.log(sumOfN(5))//1+2+3+4+5