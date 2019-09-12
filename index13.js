/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    let arr = [];
    while (pHead) {
        arr.push(pHead)
        pHead = pHead.next;
    }
    arr.reverse()
    for (var i = 0; i < arr.length; i++) {
        arr[i].next = arr[i + 1]
    }
    return arr[0]
}

