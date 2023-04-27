//var stack1=[];
// js is single-direction, no ajax. first come first out. ajax import. 
/* //eg1 calculate the requested times. inputs= [[],[1],[2],[100],[3001],[3002]],
 output: [null, 1, 2, 3]
1. JS: heap, stack; webAPIs, event loop, callback queue onClick ,Onload 
 webAPIs- DOM document, ajax -XMLHttpRequest, setTimeout; event loop, 
 dequeue, onqueue/ webAPIs is outside task wait the main task
 2. js has no queue, but applying array to do that. function like : push,
 pop, shit , ufshift

 3. node, next to connect, list, don't store all data together at the same time
 stack,queue--add or substract a element then need to move the next or the neeighter element

 node applying next to add or substract; JS has no lianbiao, applying object to do that


 */

/*  var RecentCounter = function(){
    this.q=[];
 }

 RecentCounter.prototype.ping=function(t){
    this.q.push(t);
    while(this.q[0]<t-3000){
        this.q.shift();
    }
    return this.q.length;
 }
 */

 const  a = {val : 'a'};
 const b = {val: 'b'};
 const c = {val: 'c'};
 const d = {val: 'd'};

 a.next=b;
 b.next=c;
 c.next=d;
 //while, or for, or map
 let p=a;
 while (p){
    console.log(p.val);
    p=p.next;
 }

 // insert value or variabl

 const e = {val: 'e'};

 c.next=e;
 e.next=d;

 //delete

 c.next=d;
 