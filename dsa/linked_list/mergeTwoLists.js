// head1
//   |
//   v
//  [1] -> [3] -> [5] -> null

//  head1
//   |
//   v
//  [1] -> [3] -> [5] -> null

//  Final List:
//  head
//  |
//  v
// [1] -> [2] -> [3] -> [3] -> [5] -> [6] -> null

function mergeTwoLists(head1, head2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (head1!==null && head2!==null) {
    if (head1.val > head2.val) {
      cur.next = head2;
      head2 = head2.next; //move pointer forward
    } else {
      cur.next = head1;
      head1 = head1.next; //move pointer forward
    }
    cur = cur.next;
  }

  cur.next = head1 || head2;
  return dummy.next;
};