const mask=(str)=>
    str.slice(-4).padStart(str.length,'*')
console.log(mask('0123456789')) //******6789

const mask=(str)=>{
    const [name, domain] = str.split("@");
    return name.slice(0,3)+"*".repeat(name.length-1)+"@gmail.com"
}
console.log(mask('sougata@gmail.com')) //sou******@gmail.com