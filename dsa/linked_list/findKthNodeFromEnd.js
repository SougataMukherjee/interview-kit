// head
//  ↓
// (1) ──→ (2) ──→ (3) ──→ (4) ──→ (5) ──→ null
//                          ↑        ↑
//                         k=2      k=1
function nthFromEnd(head, n) {
  if(head.next === null){
    return null;
  }
  let first = head, slow = head;
  for (let i = 0; i < n; i++){ 
	first = first.next;
	}
    //move both pointer until first reach end
  while (first!==null) {
    first = first.next;
    slow = second.next;
  }
  return slow.val;
}