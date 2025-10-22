function debounce(fn,delay){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>fn(...args),delay);
  };
}
const debouncedHi = debounce((arg)=>console.log(`Hi ${arg}`), 1000);
debouncedHi("Sam");
setTimeout(() => debouncedHi("Rik"), 1000);
