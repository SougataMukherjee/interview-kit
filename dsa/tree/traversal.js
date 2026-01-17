// inorder
//      1
//       \
//        2
//         \
//          5
//         /  \
//        3    6
//         \
//          4  
// 1 2 3 4 5 6 

function inorder(r){ 
    if(!r) return; 
    inorder(r.left); 
    console.log(r.val); 
    inorder(r.right);
}

function preorder(r){ 
    if(!r) return; 
    console.log(r.val); 
    preorder(r.left); 
    preorder(r.right); 
}
// postorder
//      1
//       \
//        2
//         \
//          5
//         /  \
//        3    6
//         \
//          4
// 4 3 6 5 2 1 
function postorder(r){ 
    if(!r) return; 
    postorder(r.left); 
    postorder(r.right); 
    console.log(r.val); 
}