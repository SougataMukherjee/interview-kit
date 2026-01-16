// 11111
// 1112
// 1211
// 1121
// 2111
// 122
// 212
// 221
function stair(n){
    if(n===1 || n===2) return n;
    let totalWays=stair(n-1)+stair(n-2)
    return totalWays
}
console.log(stair(5))//8