// cutRodRecur(4)
//  ├─ j=1 → price[0]=1  + cutRodRecur(3)
//  │          ├─ j=1 → 1 + cutRodRecur(2)
//  │          │          ├─ j=1 → 1 + cutRodRecur(1)
//  │          │          │          ├─ j=1 → 1 + cutRodRecur(0) = 1
//  │          │          │          └─ max = 1
//  │          │          ├─ j=2 → 5 + cutRodRecur(0) = 5
//  │          │          └─ max = 5
//  │          ├─ j=2 → 5 + cutRodRecur(1) = 6
//  │          ├─ j=3 → 8 + cutRodRecur(0) = 8
//  │          └─ max = 8
//  │      → Total = 1 + 8 = 9
//  │
//  ├─ j=2 → price[1]=5  + cutRodRecur(2)
//  │          ├─ j=1 → 1 + cutRodRecur(1) = 2
//  │          ├─ j=2 → 5 + cutRodRecur(0) = 5
//  │          └─ max = 5
//  │      → Total = 5 + 5 = 10
//  │
//  ├─ j=3 → price[2]=8  + cutRodRecur(1)
//  │          ├─ j=1 → 1 + cutRodRecur(0) = 1
//  │          └─ max = 1
//  │      → Total = 8 + 1 = 9
//  │
//  ├─ j=4 → price[3]=9 + cutRodRecur(0)
//  │      → Total = 9
//  │

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