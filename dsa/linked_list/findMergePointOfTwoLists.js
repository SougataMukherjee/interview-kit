// List A: 1 → 2 → 3
//                    ↘
//                      7 → 8
//                    ↗
// List B:      4 → 5

// Ans: 7

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findMergePoint(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB; 
    p2 = p2 ? p2.next : headA;
  }

  return p1 ? p1.data : null;
}
