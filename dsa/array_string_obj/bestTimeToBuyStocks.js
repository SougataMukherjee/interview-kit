//Figure out the biggest profit you could make from one buy and one sell else return 0
//maxProfit = (buy with min price - sell with max price)
// [7(day 1 price),1,5,3,6,4 (day 5 price)]
/*
price   minPrice   profit   maxProfit
------------------------------------
7       7          0        0
1       1          0        0
5       1          4        4
3       1          2        4
6       1          5        5
4       1          3        5
*/


function maxProfit(prices){
    let profit=0;
    let min=prices[0];
    let max=0;
    for(let i of prices){
        min=Math.min(i,min);
        console.log(i,'-',min);// 7-7, 1-1, 5-1, 3-1, (6-1), 4-1, 5
        profit=i-min;
        max=Math.max(profit,max)
    }
    return max
}
console.log(maxProfit([7,1,5,3,6,4]));//1-6 = 5