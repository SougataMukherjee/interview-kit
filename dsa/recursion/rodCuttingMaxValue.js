function cutRodRecur(i, price) {
    // Base case
    if (i === 0) return 0;
    
    let ans = 0;
    for (let j = 1; j <= i; j++) {
        ans = Math.max(ans, price[j - 1] + cutRodRecur(i - j, price));
    }

    return ans;
}

const price = [1, 5, 8, 9, 10, 17, 17, 20];
console.log(cutRodRecur(price.length,price));// 22