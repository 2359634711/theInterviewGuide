/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function reConstructBinaryTree(pre, vin)
{
    var result =null;
    if(pre.length>1){
        var root = pre[0];
        var vinRootIndex = vin.indexOf(root);
        var vinLeft = vin.slice(0,vinRootIndex);
        var vinRight = vin.slice(vinRootIndex+1,vin.length);
        pre.shift();
        var preLeft = pre.slice(0,vinLeft.length);
        var preRight = pre.slice(vinLeft.length,pre.length);
        result={
            val:root,
            left:reConstructBinaryTree(preLeft,vinLeft),
            right:reConstructBinaryTree(preRight,vinRight)
        }
      
    }else if(pre.length ===1){
        result= {
            val :pre[0],
            left:null,
            right:null
        }
    }
    return result;
    
}
