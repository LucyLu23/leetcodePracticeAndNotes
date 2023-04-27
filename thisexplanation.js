/* 
this can simplify the codes: 
binding this rule: this.type, this.size....
*/

var car = {
  type: "truck",
  size: "big",
  description: function () {
    console.log(
      "This car is  " + car.type + ". And the SIze is " + car.size + "."
    );
  },
};

car.description();

//default binding, window scope this
function girl() {
  console.log(this);
}

girl(); // window global scope

// girl method, girl.detail(), object method,
/* this.name - name - 'xiaohong'
 this.height - height - 160;
 this.weight - weight -180
 default binding
  */

var girl = {
  name: "xiaohong",
  height: 160,
  weight: 180,
  detail: function () {
    console.log("name:" + this.name);
    console.log("height: " + this.height + "cm");
    console.log("weight" + this.weight + "kg");
  },
};

girl.detail();
/* 
forcing binding:
apply, and call forcing binding , 
 */

var girlName = {
  name: "xiaohong",
  sayName: function () {
    console.log("myGirlFriendIs" + this.name);
  },
};
var girl1 = {
  name: "xiaobai",
};
var girl2 = {
  name: "xiaoning",
};
girlName.sayName.call(girl1);
girlName.sayName.call(girl2);
girlName.sayName.apply(girl1);
girlName.sayName.apply(girl2); // forcing binding, not let others know the girlfriend xiaohong

/* 
constructor binding 
xiaohong forgives the chanan and get married him
 */
function Lover(name) {
  this.name = name;
  this.sayName = function () {
    console.log("my wife is" + this.name);
  };
}
var name = "xiaobai";
var xiaohong = new Lover("xiaohong");
xiaohong.sayName(); // my wife is xiaohong, just like marriage, constructor bidding

//instances for this three kinds of binding, default, forcing, and constructor binding

function a() {
  function b() {
    console.log(this);
    function c() {
      "use strict";
      console.log(this);
    }
    c();
  }
  b();
}
a(); // Window, undefined     -----default binding, no variable, window ==this

var name = "xiaobai";
function special() {
  console.log("name: " + this.name);
}
var girl = {
  name: "xiaohong",
  detail: function () {
    console.log("name: " + this.name);
  },
  woman: {
    name: "xiaowang",
    detail: function () {
      console.log("name: " + this.name);
    },
  },
  special: special,
};

girl.detail(); //xiaohone; girl object method, this means method that object call
girl.woman.detail(); // xiaowang; call detail method  is xiaowang
girl.special(); // xiaohong; girl call method-special, so this name means xiaohong; method is declared in global scope does not matter.

var name = "xiaohong";
function a() {
  var name = "xiaobai";
  console.log(this.name);
}
function d(i) {
  return i();
}
var b = {
  name: "xiaowang",
  detail: function () {
    console.log(this.name);
  },
  bibi: function () {
    return function () {
      console.log(this.name);
    };
  },
};
var c = b.detail;
b.a = a;
var e = b.bibi();
a(); //xiaohong, a-global, then xiaohong; default binding;
c(); //xiaohong, c-global
b.a(); //xiaowang; b-local , xiaowang;
d(b.detail); //xiaohong;
e(); // xiaohong; close function, bibao, BIBAO,
