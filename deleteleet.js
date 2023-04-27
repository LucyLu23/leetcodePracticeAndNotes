var deleteNode =function ( node){
    node.val=node.next.val;
    node.next=node.next.next;
}

head=[2,23,16,66,69], node=16;
let newNode= deleteNode(note);
console.log(newNode);
console.log(head)

