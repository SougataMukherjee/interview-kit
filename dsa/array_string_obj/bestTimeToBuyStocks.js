//Figure out the biggest profit you could make from one buy and one sell else return 0
//maxProfit = (buy with min price - sell with max price)
function maxProfit(prices){
    let globalProfit=0;
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            const currentProfit=prices[j]-prices[i];
            if(currentProfit>globalProfit){
                globalProfit=currentProfit;
            }
        }
    }
    return globalProfit
}
console.log(maxProfit([7,1,5,3,6,4]))//5