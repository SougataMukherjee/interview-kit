// list1= 1->2->3->Null
// list2= 1->2->3->4->Null

function CompareLists(head1, head2) {

if(head1 == null && head2 == null) return true;
        
        while(head1 != null && head2 != null){
            if(head1.data != head2.data) return false;
             
             head1 = head1.next;
             head2 = head2.next;
        }
        return head1 == head2;
}