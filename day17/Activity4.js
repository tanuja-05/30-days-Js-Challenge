//Task 7
class TreeNode {
     constructor(val){
        this.val = val;
        this.left=null;
        this.right=null;
     }
}

let inOrderTraversal = (root) => {
   if(root === null){
      return;
   }
   inOrderTraversal(root.left);
   console.log(root.val);
   inOrderTraversal(root.right);
   
}
let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(7);
console.log("InOrder Traversal :");
inOrderTraversal(root);
