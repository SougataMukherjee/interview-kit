// 1<->2<->3<->4<->Null
// 4<->3<->2<->1<->Null

function reverse(llist) {
    // Write your code here
    
        if(llist == null || llist.next == null){
            return llist;
        }
         let last = null;
         let curr = llist;
        
        while(curr!=null){
            last = curr.prev;
            curr.prev = curr.next;
            curr.next = last;
            curr = curr.prev;
        }
        return last.prev;

}