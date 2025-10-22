function counter(){
  let c = 0;
  return ()=> ++c;
}
const inc = counter();
inc(); //1
inc(); //2
