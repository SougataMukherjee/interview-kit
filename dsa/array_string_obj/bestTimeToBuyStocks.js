//Figure out the biggest profit you could make from one buy and one sell else return 0
//maxProfit = (buy with min price - sell with max price)
// [7(day 1 price),1,5,3,6,4 (day 5 price)]

function maxProfit(prices){
    let profit=0;
    let min=prices[0];
    let max=0;
    for(let i of prices){
        min=Math.min(i,min);
        profit=i-min;
        max=Math.max(profit,max)
    }
    return max
}
console.log(maxProfit([7,1,5,3,6,4]));//1-6 = 5