//print all prime numbers between 1 to 100
/*
Dry Run:

i=1: j loop 2..1 → doesn't run → i!==j → skip
i=2: j=2 → 2%2==0 → break → i===j → print 2
i=3: j=2 → 3%2!=0 → j=3 → 3%3==0 → break → i===j → print 3
i=4: j=2 → 4%2==0 → break → i!==j → skip
i=5: j=2 → 5%2!=0, j=3 → 5%3!=0, j=4 → 5%4!=0, j=5 → 5%5==0 → break → i===j → print 5
i=6: j=2 → 6%2==0 → break → skip
i=7: j=2 → 7%2!=0, j=3 → 7%3!=0, j=4..7 → j=7 → 7%7==0 → break → i===j → print 7
i=8..10: break before j=i → skip
...
Output: 2,3,5,7,11,13,17,19,... up to 97
*/
for(let i=1;i<=100;i++){
    let j;
    for(j=2;j<=i;j++){
        if(i%j==0){
            break;
        }
    }
    if(i===j){
        console.log(i)
    }
}