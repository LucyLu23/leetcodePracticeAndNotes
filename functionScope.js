var a = "apple";
console.log(a); // apple

var b = "banana"; //global
function fighting() {
  var b = "angel"; // local variable
}
console.log(b); // banana, scope, global variable can be applied in local function

var c = "pearl";
if (true) {
  var c = "blue"; // global
}
console.log(c); // blue, if statement can take the variable out, block
/* 
like if , for loop, while loop is not block function ; c, i, k, d, are global function variable 
class, function, variable are block function? local function? local scope
*/

for (var i = 0; i < 3; i++) {
  break;
}
console.log(i); // i global

k = 5;
while (k > 1) {
  k--;
  var d = 10;
}
console.log(k); // global
console.log(d); // global

var aa = "apple";
var bb = "boy";
function fighting() {
  var aa = "angel";
  console.log(aa);
  console.log(bb);
}
fighting(); // angel, boy , local and global ; function scope and order --fron inside to outside
console.log(aa); //apple , global

var aaa = "apple";
function fighting1() {
  console.log(aaa); // undefined
  var aaa = "angel"; // local scope
  console.log(aaa); //angel
}
fighting1(); //apple, angel

//=====

var aaaa = "apple";
function fighting2() {
  var aaaa; // declaration in advance,
  console.log(aaaa);
  aaaa = "angel";
  console.log(aaaa);
}

fighting();

// change the code:
var a1 = "apple";
function fighting3() {
  console.log(a1); // undefined
  var a1 = "angel";
  console.log(ss()); // angel
  function ss() {
    return a1;
  }
}
fighting3(); //

// declaration hoist

var a3 = "apple";
function fighting4() {
  function ss() {
    return a3; //function declared is priority than the variable.
  }
  var a3; //declaration is upfronted
  console.log(a3); // undefined; this codes are implementation order of the above one.
  a3 = "angel"; // variable is evaluated
  console.log(ss()); //angel;
}
fighting4();

var b1 = "boy";
console.log(b1); //boy
function fighting3() {
  console.log(a11); // undefined
  console.log(c1); // undefined
  if (a11 === "apple") {
    a11 = "Alice";
  } else {
    a11 = "Ada";
  }
  console.log(a11); //Ada
  var a11 = "Andy";
  middle(); //
  function middle() {
    console.log(c1++); //undefined + 1 ===>NaN
    var c1 = 100;
    console.log(++c1); //101
    small();
    function small() {
      console.log(a11);
    } //Andy
  }
  var c1 = (a11 = 88);
  function bottom() {
    console.log(this.b1); // this means global, boy;
    b1 = "baby"; // if not declared by const, let, var, then evaluation is global; IN function, not declaring a variable, then the variable is global
    console.log(b1); // global baby
  }
  bottom(); // boy; baby
}
fighting3();
console.log(b1); //baby
