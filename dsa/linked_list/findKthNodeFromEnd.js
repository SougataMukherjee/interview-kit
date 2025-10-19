function nthFromEnd(head, n) {
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