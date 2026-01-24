// list1= 1->2->3->Null
// list2= 1->2->3->4->Null

/*
1. If both heads are null → lists are equal
2. Traverse both lists together
3. Compare data at each node
4. If mismatch → return false
5. After loop, both must end together (null)

[1] → [2] → [3] → null
        ↑
      head1

[1] → [2] → [3] → [4] → null
        ↑
      head2

*/


function CompareLists(head1, head2) {

  if(head1 == null && head2 == null) return true;
    while(head1 != null && head2 != null){
        if(head1.data != head2.data) return false;
            head1 = head1.next;
            head2 = head2.next;
        }
        return head1 == head2;
}