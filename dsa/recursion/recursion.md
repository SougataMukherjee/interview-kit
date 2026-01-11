function msg(){
    console.log('hello')
    msg1()
}
function msg1(){
    console.log('hello')
    msg2()
}
function msg2(){
    console.log('hello')
}
msg()

### we can write with simplify way

function msg(n) {
  if (n === 0) return;
  console.log("hello");
  msg(n - 1); // recursive call
}

msg(3);
