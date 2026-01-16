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
function postorder(r){ 
    if(!r) return; 
    postorder(r.left); 
    postorder(r.right); 
    console.log(r.val); 
}