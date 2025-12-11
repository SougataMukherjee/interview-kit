const mask=(str)=>
    str.slice(-4).padStart(str.length,'*')
console.log(mask('0123456789')) //******6789