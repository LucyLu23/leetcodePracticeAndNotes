// == value equal , type transition,  === not type transition,  ===means value and type all the sam
// == value, not type, type can be transferred.

//true: 6==6; 6===6; 6=="6"(type transfer) ; true ==1; false ==0; ""==0; '   '==0; null=undefined;
//true: transition if one is number, the other is string, then string is transited into number
//true:

//false: 6==="6" ; true ===1; false ===0;  (===no type transition);  null==0; undefined == "";
//false : NaN ==NaN;  NaN==false; NaN===false; "false"(not transfer) ==false(transfer to 0);
//

var a = {};
var b = {};
var c = a;

a == b; //false
a === b; //false
a == c; //true
a === c; //true  stack栈 has a,b,c; heap堆 has {}
