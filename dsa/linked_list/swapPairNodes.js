// Initial State:

// prev      first      second
//   ↓          ↓           ↓
// [ ] ──→ (1) ──→ (2) ──→ (3) ──→ (4) ──→ null

//Next State:

// prev      first      second
//   ↓          ↓           ↓
// [ ] ──→ (1) <── (2)  (3) ──→ (4) ──→ null
//         |_____________|

function swapPairs(head) {
  if (head===null || head.next===null) return head;
  let dummy=new Node(0);
  dummy.next=head;
  let prev=dummy;
  while(prev.next&&prev.next.next){
    let first=prev.next;
    let second=first.next;
    first.next=second.next; // 1st point to 3rd
    second.next=first; //2nd point to 1st
    prev.next=second; //prev node point to 2nd
    prev=first; //increase the prev
  }

  return dummy.next;
}