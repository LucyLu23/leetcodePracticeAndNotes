var reverseList = function(head){
    let p1=head;
    let p2=null;
    while(p1){
        const tem = p1.next;
        p1.next=p2;
        p2=p1;
        p1=tem;
    }return p2;
};

// two numbers add