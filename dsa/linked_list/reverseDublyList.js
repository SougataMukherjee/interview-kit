// null <- [1] <-> [2] <-> [3] <-> [4] -> null
//          ↑
//         curr

// 4<->3<->2<->1<->Null
/*
For each node:
1. Swap prev and next
2. Move to next node (which is old prev)
3. Track last node to return new head
*/
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