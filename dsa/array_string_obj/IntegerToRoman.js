function toRoman(n) {
  const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const sym = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  return val.reduce((out, v, i) => {
    while (n >= v){
        out += sym[i];
        n -= v;
    }
    return out;
  }, "");
}

console.log(toRoman(9)); // IX
console.log(toRoman(12)); // XII
console.log(toRoman(101)); // CI