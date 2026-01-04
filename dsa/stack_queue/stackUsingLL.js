class Stack {
  constructor(){ this.top=null }
  push(x){ this.top={val:x,next:this.top} }
  pop(){ this.top=this.top?.next }
}