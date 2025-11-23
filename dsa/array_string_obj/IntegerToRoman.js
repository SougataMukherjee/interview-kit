function toRoman(n) {
  const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const symbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let res='';
  for(let i=0;n!=0;i++){
    // As long as n is greater than or equal to the Roman value
    while(n>=val[i]){
    // decrease n by the Roman chunk
      n-=val[i]
    // add the related symbol to result
      res+=symbol[i]
    }
  }
  return res
}

console.log(toRoman(9)); // IX
console.log(toRoman(12)); // XII
console.log(toRoman(101)); // CI