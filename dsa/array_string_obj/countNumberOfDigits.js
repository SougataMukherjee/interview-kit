//count number of digits
function countDigit(n){
    let temp,count=0
    temp=n;
    while(temp>0){
        temp=Math.floor(temp/10)
        count++
    }
    return count
}
console.log(countDigit(2335))