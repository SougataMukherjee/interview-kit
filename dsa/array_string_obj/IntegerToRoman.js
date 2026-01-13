/*
Step 1:
Try largest Roman ≤ 58 → 50 (L)
58 / 50 = 1 time
Append → "L"
Remainder = 58 % 50 = 8

Step 2:
Try largest Roman ≤ 8 → 5 (V)
8 / 5 = 1 time
Append → "V"
Remainder = 8 % 5 = 3

Step 3:
Try largest Roman ≤ 3 → 1 (I)
3 / 1 = 3 times
Append → "III"
Remainder = 3 % 1 = 0

STOP (number exhausted)

Final Roman = "L" + "V" + "III"
            = "LVIII"
*/

function toRoman(n) {
  const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const symbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let res='';
  for(let i=0;i<val.length;i++){
   if(n===0)break;
   let times=Math.floor(n/val[i])
   while(times--){
       res+=symbol[i]
   }
   n=n%val[i]
  }
  return res
}


console.log(toRoman(12)); // XII
console.log(toRoman(58)); // LVIII