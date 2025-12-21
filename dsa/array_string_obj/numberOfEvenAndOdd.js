//count number of even and odd digits in a number
let n=1234,ev=0,od=0;
while(n>0){
    let rem=n%10;
    if(rem%2==0){
        ev++
    }else{
        od++
    }
    n=Math.floor(n/10)
}
console.log(ev,od)

//sum of odd (1+3+5+7+...N) and even (2+4+6+8+...N)
function sumOddEven(n) {
  let even = 0, odd = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) even += i;
    else odd += i;
  }
  return { even, odd };
}