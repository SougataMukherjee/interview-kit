// left        right
//  ↓           ↓
// (1) → (2) → (1) → null

// left              right
//  ↓                 ↓
// (1) → (2) → (2) → (1) → null

function isPalindrome(head) {
  if(head===null||head.next===null){
    return false
  }
  let arr=[];//by traverse element for store all element
  let curr=head;
  while(curr){
    arr.push(curr.val)
    curr=curr.next
  }
  let l=0,r=arr.length-1;
  while(l<r){
    if(arr[l]!==arr[r])return false;
    l++;
    r--;
  }
  return true
}
