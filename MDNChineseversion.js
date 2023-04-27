/* 
语法。注释， 声明，变量作用域； 变量提升， 数据结构和类型； 字面量；
控制流和错误处理：if--else, switch, try/catch/throw; error 对象
循环与迭代：for, while, do..while, break/continue, for...in , for..of;
函数： 定义函数； 调用函数； 函数作用域； 闭包； arguments 对象与参数； 箭头函数；
表达式和运算符： 赋值， 比较， 算术运算符； 位运算； 逻辑运算符； 条件三元运算符
数字与日期： Number字面量； number对象； Math 对象； date 对象；
文本格式化： 字符串字面量； 字符串对象； 模板字面量； 国际化； 正则表达式
索引集合：数组， 类型数组；
带键集合： map, WeakMap, Set, Weakset;
处理对象： 对象和属性， 创建对象； 定义方法， getter 和setter;
对象模型的细节： 基于原型的面向对象编程； 创建对象层次结构； 继承；
Promises： 约定； 链式调用； 错误传递； 组合， 时序；
迭代器和生成器： 迭代器， 生成器； 可迭代对象；
元编程： proxy， handlers, traps, 撤消Proxy; Reflect;
javascript 模块： 导出模块， 导入模块， 默认导出，重命名模块； 合并模块； 动态加载模块；




*/

/* 
javascipt ，跨平台，面向对象的脚本语言，使得网页可互动； 高级服务端node.js。 built-in API- Li\
library-Array, Date, Math. core sentences-operator, controls, conditionals, declaration
var, let, const. 
clients side - js 通过提供对象，控制browser and DOM to expand the core language; 拓展代码允许应用程序将
元素房子某个HTML表单中， 并支持响应用户事件， onmouseover, submitt, nav, 鼠标点击， 表单提交，页面导航；
server side - 通过提供有关在服务器上运行JS 的对象来可扩展语言核心； 服务端版本直接支持应用和数据库通信， 提供营养不同条约间的信息连续性， 或在
服务器上执行文件操作；
browser-JS 改变网页DOM； server, NODE.js 中JS可以对browser 编写的代码发出的客户端请求做出响应。


JavaScript -DOM， 面向对象， 不区分对象类型； 通过原型机制继承， 任何对象的属性和方法均可被动态添加； 
变量类型不用提前声明，为动态类型； 不可直接自动写入硬盘；

java - 基于类系统， 分为类和实例； 通过类层级的定义实现继承， 不同动态增加对象和类的属性或方法
变量类型必须提前声明； 可以直接自动写入硬盘。

javascript standard wei ECMAScript, 

console 工作方式和eval 相同， 返回最后输入的表达式， : console.log(eval('3+5'))
*/
(function () {
  "use strict";
  function greetMe(yourName) {
    alert("Hello" + yourName);
  }
  greetMe("World");
})(); // alert "Hello World"

/* 
语法和数据类型：变量声明， 数据类型， 字面量； JS 借用大量Java语法； 区分大小写； 
JS， 指令称为语句statement， semi-comma， ;进行分割；一般要写，如果statement只有一句的可以不写，但
为了防止错误，最好写。
如果一条语句独占一行的话，那么分号可以省略。一行多个语句，那么语句需要以分号分开。减少BUG可能性。 
js 源码左-右被扫描换成一系列token ,控制字符， 行终止符， 注释，空白字符组成的输入元素。空白字符--空格， 制表符，换行符。 
table, tr, th, td, br, space

声明方式：var, -声明提前， 一个变量一个初始化值， 没有块作用， 全局变量和值，可声明可赋值 少用，会BUG；
let- 不主动声明提前，但可手动提前； 块作用；区域作用，多用；不多次声明，但可赋新值；
const- 声明一个块作用，只读常量，不从新声明和赋值；

variable: 数字，字母，下划线，$, 不以数字开头； 大小写区分；
解构赋值 将对象字面量的属性绑定到变量； let {bar } =foo, 创建变量bar, 将foo对象中属性名
与之相同的属性的值赋予给bar.

var， let 会产生undefined , 但const 不会产生undedined 的值； 不赋值不声明， const 都会产生错误

*/

var a;
console.log(a); //undefined

console.log(b); //underfined
var b;

console.log(c); //未捕获的引用错误；

let x;
console.log(x); //undefined;

console.log(y); //未捕获的引用错误；let 不会自动声明提升；
let y;

/* const aa;
console.log(aa);//未捕获的引用错误；

console.log(aaa);// 未捕获的引用错误；
const aaa;  */

const aaaa = 23;
console.log(aaaa); //23

/* apply undefined to check the variable is evaluated or not;
undefined 在布尔类型中是false, 
 */
var input;
if (input === "undefined") {
  doThis();
} else {
  doThat();
}

var myArray = [];
if (!myArray[0]) myFunction(); // if 中有空statements, myFunction()属于else, 只是省略了； if后是true, 而 给出的是undefined,是法拉瑟， 故执行myFunction statement

// 数值类型环境中undefined 值为NaN；
var a1;
a1 + 2; //NaN: infinity , undefined, NaN ,都容易产生NaNcy；

//null， 在数值类型环境中为0；Boolean 为false;
var n = null;
console.log(n * 10); // 0

/* 变量的作用域
global -var , var 在if 语句中声明，则在if 语句外面都可以获得，因为var 为全局变量，而不是只在ifyuju zhong 
local- const, let
*/

if (true) {
  var x11 = 5;
  console.log(x11); //5
}
console.log(x11); //5 , var 声明为全局，非只在if 语句中；

//ES6, let 声明会变化

if (true) {
  let x12 = 6;
}
console.log(x12); //ReferenceError: x12 没有被声明。

console.log(x13 === undefined); //true, var 声明提升
var x13 = 9;

var myVar = "my value";
(function () {
  console.log(myVar); //undefined, local scope, var 声明提升，同时callback 函数
  var myVar = "local value";
})();

var x14;
console.log(x14); //undefined,与前面一样
x14 = 22;

var x15 = 99;

(function () {
  var x15;
  console.log(x15); //undefined ,function 函数块作用；函数外面无法调用该函数
  x15 = 26;
})();

/* 
function a(){}（函数声明）返回undefined（不会执行），仅仅是函数声明（声明提前）
var res = function a(){}() （函数表达式），立即执行该函数，必须使用一个变量接收返回值，否则报错
(function a(){})() （函数表达式）,立即执行该函数，不必须使用变量接收；外面无法执行该函数
(function a(){}) （命名函数表达式）会返回这个函数（不会执行），但是在括号外面无法调用该函数，

 */

//函数声明，或变量声明可以提升， 而函数表达式不会被提升==用等号赋值给新变量为函数表达式
foo(); //函数声明提升
function foo() {
  console.log("bar");
}

baz(); //类型错误，baz不是函数，而是函数表达式
var baz = function () {
  console.log("baz2");
};

/* 
全局变量，全局对象是window， 可以window.prompt, window.alert? 
constants-常量， 命名和变量一样； 不可从新赋值不可从新声明同名常量名；具体Value 便可以采用array, he Obejct 区改变
*/
const PI = 3.14; //省略const 关键字，则该标识符将被视为变量； 所以常量const 不可省略

//造成错误，在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量
function f() {}
const f = 5;

//以下也造成错误，在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量
/* function f() {
    const g1=5;
    var g1;
} */

//对象属性或array 中的值可以改变，不受const保护，以下的语句不会产生错误
const myOject = { key: "value" };
myOject.key = "otherValue";
console.log(myOject); // {key: "otherValue"}
console.log(myOject.key); // otherValue

const myArray1 = ["HTML", "CSS"];
myArray1.push("Javascript");
console.log(myArray1); // ['HTML', 'CSS', 'Javascript'];

//数据结构和类型
/*
Number -整数或小数 ： 42， 3.14159
String-字符串， 'Howdy';
Boolean - true /false
undefined- 和null 一样是特此的关键字； underfined 表示变量未赋值；
null- 一个表明null值的特殊关键字， js区分大小写； null , 与Null, NULL 或其他变体完全不同；
BigInt - 任何精度的整数， 可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
Symbol- 一种实例，是唯一且不可改变的数据类型。 
*/
/* 
引用类型：
Object 
array? 
function 函数?

变量的类型和value 都可以改变， JS是动态类型， 不会出错

*/
var answer = 99;
answer = "you are great"; // JS dynomic , no mistakes;

//数字和字符串 + ， 相加，数字会变为字符串并和原加的字符串连接
answer = "the answer is " + 99; // "the answer is 99";

// 在涉及其他运算符， 减号‘-’, JS 不会把数字变为字符串
"37" - 7; //30
"37" + 6; //376

/* 字符串转换为数字, 将string 内存表示一个数字转化为相应的数据， parseInt(), parseFloat()
parseInt -返回整数， 所以使用它会失去小数部分， 最好加上上那个进制（radix）, 这个参数指定使用哪一种进制
注意： 只有字符串中的第一个数字会被返回。

注意： 开头和结尾的空格是允许的。

注意：如果字符串的第一个字符不能被转换为数字，那么 parseInt() 会返回 NaN。

注意：在字符串以"0"为开始时旧的浏览器默认使用八进制基数。ECMAScript 5，默认的是十进制的基数
 

*/

var myString = "99.66myscorceis89.66";
console.log(parseInt(myString, 0)); //99
//string - -number: 加法运算符 //'12'+'12' = '12122'; //(+"1.2") + (+'1.2') =2.4
var plusNum = "12";
var plusNum2 = "11";
console.log(plusNum + plusNum2); //1211
console.log(+plusNum + +plusNum2); //23
console.log(+plusNum + +plusNum2); //23, 使用一元加法运算符， 可以括号给“+字符串”

/* 
字面量 literals, 由语法表达式定义的常量constants,或通过由一定字词组成的语词表达式定义的常量 
js中，字面量是脚本中按字母意思给出的固定值，而不是变量。 常量，固定，在程序脚本中运行不可更改， 
比如false, 3.1415, thisIsStringOfHelloWorld, invokedFunction, 
字面量-数字字面量，布尔字面量， 数字字面量； 对象字面量，RegExp 字面量； 字符串字面量 array, Boolean, Numberic , Jobect, RegExp, String literals


*/

var fish = [, "lion", , "angel", ,]; //fish[0]is undefined; fish[1] is 'lion', fish[2] is undefined, fish[3] is 'angel'; fish.length=5;
//在数组后加,则是忽略， 若在元素之间加，则是此元素value 为undefined, 同时算是一个元素，算数组长度；最后的，不算。

/* 
Boolean literals-逻辑字面量，  true 和false; false- 0, -0, null, false, NaN, undefined '空字符串'
空数组[] 和字符串'false'为true;

 */

/* 
数字字面量：多种基数的整数字面量和以10为基数的浮点数字面量， 要求数字字面量必须是五符号的， -123.4
这样代码片段是没有问题额， 会被解释为一元操作符， -应用于数字字面量123.4
在字符串为数字的前面添加+，为一元加法运算符，可以把数字字符串转化为数字，相加；
十进制整数字面量由一串数字序列组成，且没有前缀 0。
八进制的整数以 0（或 0O、0o）开头，只能包括数字 0-7。
十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。
二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。
严格模式下，八进制整数字面量必须以 0o 或 0O 开头，而不能以 0 开头。
0, 117 and -345 (十进制，基数为 10)
015, 0001 and -0o77 (八进制，基数为 8)
0x1123, 0x00111 and -0xF1A7 (十六进制，基数为 16 或"hex")
0b11, 0b0011 and -0b11 (二进制，基数为 2)

*/

/* 
浮点数字面量： 十进制整数，可以带正负号 +，-； 小数点.， 小数点后的数字也是十进制， 指数部分
指数部分 以‘e’‘E’ 开头； 
[(+|-)][digits][.digits][(e|E)[(+|-)]digits]
+1.23666e+10

*/

3.14 -
  0.2345789 - // -0.23456789
  3.12e12; // -3.12*10^12
0.1e-23; // 0.1*10^(-23)=10^(-24)=1e-24

//对象字面量Object; key-value, [],.找值，

var sales = "Toyota";
function CarTypes(name) {
  return name === "Honda" ? name : "sorry, we don't sell " + name + ".";
}
var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyata

var car1 = {
  manyCars: { a: "Saad", b: "jeep" },
  7: "Mazda",
}; //key 可以使用字符串，字母，数字,对象属性名字可以任意字符串，包括空串； 不合法的属性名称变为字符串

console.log(car1.manyCars.b); // jeep
console.log(car1[7]); //Mazda， 属性名称特殊- 访问属性值，通过类数组标记[]访问和赋值。

var unUsual = {
  "": "An empty string",
  "!": "bang!",
};
//console.log(unUsual.""); //unexpected string
console.log(unUsual[""]); //An empty string
//console.log(unUsual.!); // unexpected token !
console.log(unUsual["!"]); //bang! choose . or [], can not choose.[] both.

/* 
增强的对象字面量（Enhanced Object literals）
ES5 对象字面值开展支持在创建设置原型，简写了foo:foo 形式的属性赋值，方法定义， 支持父方法调用， 以及
表达式动态计算属性名。使得对象字面值和类声明紧密联系， 让基于对象的设计收益
*/

var obj1 = {
  //__proto__
  __proto__: theProtoObj,
  //Shorthand for "handler: handler"
  handler,
  //methods
  toString() {
    //Super calls
    return "d " + super.toString();
  },
  //Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};

/* 
RegExp 字面值， 一个正则表达式是字符被斜线，forward slash 围成的表达式。
*/
var re = /ab+c/;

//字符串字面量

`\`` === "`"; //true
console.log("string text line 1\n" + "string text line 2");
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
//上面两种方法一样： '\n' +'' =`  换行 `
//字符串： '', "", ``， ``通常比较特殊，接${} 变量，或换行； ""--比较正式，比如json de duix shux
//值就固定用""而不用 单引号、

var a5 = 5;
var b5 = 6;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + "."); //\n 是字符串的换行
console.log(`Fifteen is ${a + b} and 
not ${2 * a + b}. `);
// "Fifteen is 15 and
// not 20. "

/* 嵌套模板:
在模板中， 只需在模板内的占位符${ } 内使用它们，就可以轻松使用内部反引用， 例如，如果条件啊是真的，那么返回这个模板化的文字

 */
var classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";

const classes = ` header $ { isLargeScreen() ? '' : (item.isCollapsed ? 'icon-expander) : 'icon-collaspeer)}`;

const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;

/* 
带标签的模板字符串--标签使得你可以用函数解析模板字符串，标签函数的第一个参数包含一个字符串值的数组；其他的
参数与表达式相关；函数可以返回处理好的字符串或不同的东西，用于该标签的函数的名称可以被命名为任何名字。

*/

let person = "mike";
let age = 28;
function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // 'That '
  let str1 = strings[1]; // ' is a '
  let str2 = strings[2]; // '.'

  let ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "younster";
  }
  //return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${person} is a ${age}.`;
console.log(output); // That mike is a youngster.

// 标签函数并不一定需要返回一个字符，返回一个method

function template(strings, ...keys) {
  return function (...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function (key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

var t1Closure = template` ${0}${1}${0}!`;
t1Closure("Y", "A"); //'YAY!'
var t2Closure = template` ${0} S{'foo'}!`;
t2Closure("Hello", { foo: "World" }); //"Hellow World"

/* 
原始字符串：特殊属性raw, 通过它来访问模板字符串的元素字符串，不经过特殊字符的替换。
使用string.raw() 方法创建原始字符串和使用默认模板函数和字符串连接创建是一样的
*/

function tag(strings) {
  console.log(strings.raw[0]);
}
tag`string text line 1 \n string text line 2`;
// logs " string text line 1 \n string text line 2",
// including the two characters '\' and 'n'
let str = String.raw`Hi\n${2 + 3}!`; //"Hi\\n51"--(答案)，
str.length; //6
str.split("").join(","); // "H,i,\\, n, 5, !"

/* 
Unicode 字符以"\u"开头，例如\u00A9
Unicode 码位用"\u{}"表示，例如\u{2F804}
十六进制以"\x"开头，例如\xA9
八进制以"\"和数字开头，例如\251
*/

// basic literal string creation
`In JavaScript '\n' is a line-feed. ` //Multiline strings
`In JavaScript this is
not legal.`;

// String interpolation
var name = "Bob",
  time = "today";
`Hello S{name}, how are you ${time}？`;

// construct an HTTP request prefix is used to interpret the replacement and construction
POST`http://foo.org/bar?a=${a}&b=${b}
content-Type: application/json 
X-Credentials: ${credentials}
{
    "foo": ${foo},
    "bar": ${bar}}`(myOnReadyStateChangeHandler);

// 作为一般字符串的扩展， 可以在字符串中使用特殊字符，
("one line \n another line");

// \0, \b, \f, \n, \r, \t, \v, \", \', \\, \XXX,\xXX, \uXXXX, \u*{XXXXXX}
//Null字节，退格符，换页符，换行符； 回车符，Tab制表符， 垂直制表符， 双引号，单引号，反斜杠字符， 最多三位八进制， 从和FF两位十六进制， Unicode 字符；

var quote = 'He read " The Cremation of Sam McGee " by R.W. Service.';
//He read  "the cremation of sam McGee" by R.W. Service

var str12 =
  "this string \
is broken \
across multiple\
lines.";
console.log(str12); // this string is broken across
//multiplelines.

var poem =
  "Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.";
console.log(poem);
/* Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.
 */

/* 流程控制和错误处理
语句块-{ statement1; 
statement2; 
statement3;}

语句块通常用于流程控制， if ,for , while 
while(x < 10){ x++; }
{ x++;  }---语句块


*/

var x22 = 1;
{
  var x22 = 2;
}
console.log(x22); //2
/* 
2--> var, 无块作用
1--> let, Java, C 语言
*/
/* 
if,
if, else if
if, else if, else if, ..else 
不建议在if （赋值语句）；若要，则 if（（x=y））
false - false, undefined, o, "", null, NaN, 
不要混淆原始的布尔值true 和false, 与boolean 对象的真和假：
var b =  new Boolean (false);
if(b) ---> 视为真
if(b == true) ---> 视为假



*/
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "enter exactly three characters" +
        document.form1.threeChar.value +
        " is not valid"
    );
    return false;
  }
}

//switch 语句-程序求表达式的值，并尝试区匹配表达式的值到一个case 标签；如是，则执行该语句
/* 
switch (expression){
    case label_1:
        statements1;
        [break;]
    case label-2:
        statements2;
        [break;]
        ...
    default:
        statements-def
        [break;]
}
先找与expression匹配的ｃａｓｅ　语句，将控制权转移到该子句，　执行相关的语句；　如没有匹配的ｃａｓｅ
后的ｌａｂｅｌ，　则执行ｄｅｆａｕｌｔ；　ｂｒｅａｋ－－＞跳出整个ｓｗｉｔｃｈ　语句；　如果ｂｒｅａｋ＼
ｂｒｅａｋ忽略，则会执行switch语句的下一条语句。
*/
switch (fruittype) {
  case "Oranges":
    document.write("1dollar");
    break;
  case "apples":
    document.write("2dollar");
    break;
  case "Bananas":
  case "grapes":
    document.write("3dollar");
    break;
  default:
    document.write("sorry");
}

/* 
异常处理语句：ｔｈｒｏｗ语句；　ｔｒｙ．．．ｃａｔｃｈ语句－－》用ｔｈｒｏｗ抛出异常，
ｔｒｙ－ｃａｔｃｈ　捕获处理
throw expression;
throw "Error2"; //string type
throw 42; //Number type
throw true; // Boolean type
throw {toString: function() { return "I'm an object!"}}
抛出异常时候声明一个对象，可在ｃａｔｃｈ　块中查询到对象的属性。
*/
//create an object type UserExpression

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
//Make the exception convert to a pretty string when used as
//a string (eg by the error console)

UserException.prototype.toString = function () {
  return this.name + ':"' + this.message + '"';
};

//create an instance of the object type and throw it
throw new UserException("Value too high");

//try...catch 抛出异常ｔｈｒｏｗ，　ｔｒｙ（one or more statements）－ｃａｔｃｈ(one or more statements)就捕获；

/* //try catch statements; 标记一块待尝试的语句，　并规定一个以上的响应一个异常的抛出，　如果throw　ｅｏｒｒｅｒ　，
ｔｒｙ　ｃａｔｃｈ　就会捕获的；
ｔｒｙ－－ｏｎｅ　多代码块；　0　ｏｒ　1　ｃａｔｃｈ　代码块。　在ｔｒｙ　代码块中抛出异常，　ｔｒｙ　ｂｕ　


*/
function getMonthName(mo) {
  mo = mo - 1; //adjust month number for array index
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo."; // throw keyword is used here
  }
}

try {
  //statements to try
  monthName = getMonthName(myMonth); //function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); //pass exception object to error handler --> your own function
}

/* 
catch block处理ｔｒｙ中可能出现的异常,捕捉指定标识符ｃａｔｃｈＩＤ来存放抛出 */
/* catch (catchId){
    statements
} */
/* 
捕捉指定的标识符来存放抛出语句指定的值，throw, catch 只存在catch的存续期间里，当catch块执行完成，标识符不再用。
finally 包含在try 和catch 块完成后， finally 无论有异常都执行，throw 异常， 没处理异常
finally块都执行；你可以用finally 块来使得你的脚本在异常发生优雅地退出； 举个例子，你可能需要
在绑定的脚本中释放资源；接下来的例子用文件处理语句打开一个文件，服务端的javascript 允许你进入文件，如果在文件中打开时抛出一个异常；
finally 块会在脚本错误之前关闭文件。
try-throw-catch-finally


*/
try {
  throw "myException"; // generates an exception
} catch (e) {
  //statements to handle any exceptions
  logMyErrors(e); //pass exception object to error handler
}

openMyfile();
try {
  writeMyfile(theData); //This may throw a error
} catch (e) {
  handleError(e); //if we got a error we handle it
} finally {
  closeMyfile(); //always close the resource
}

function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; //this return statement is suspended untill finally block has completed
    console.log(2); //not reachable
  } finally {
    console.log(3);
    return false; //overwrites the previous "return"
    console.log(4); //not reachable
  }
  //"return false " is exercuted now
  console.log(5); // not reachable
}

f(); //console 0, 1, 3 ; returns false

//用finally 块覆盖返回值也适用在catch 块内抛出或重新抛出的异常：
function f11() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus');
    throw e; // this throw statement is suspended until finally block has completed
  } finally {
    return false; //overwrite the previous "throw"
  }
  //'return false' is executed now
}

try {
  f11();
} catch (e) {
  // this is never reached because the throw inside the catch is overwritten by the return in finally
  console.log('caught outer "bogus" ');
}

//OUTPUT caught inner "bogus"

/* 
使用Error对象-更具错误类型，name error--提供了常规的错误类-如DOMException or Error,
 message error-提供一条从错误对象转化成字符串的简明信息。
 catch 块分不出是个人所为的异常，还是系统异常，使用Error 构造函数
*/
function doSthErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("the Message");
  } else {
    doSthToGetJavascriptError();
  }
}

try {
  doSthErrorProne();
} catch (e) {
  console.log(e.name); //logs 'Error'
  console.log(e.message); //logs 'the message ' or a javascript Error message
}

//iterate and recursion
/* for, do while, while, label, break, continue; for in; for of
for ([initialExpression--声明赋值只用一次]; [condition--true执行，false终止循环的条件];[incrementExpression-步长变化]) statemet


*/

var step;
for (step = 0; step < 5; step++) {
  console.log("walking east one step");
}

var i10 = 0;
do {
  i += 2;
  console.log(i);
} while (i < 6);

var n = 0;
var x10 = 0;
while (n < 3) {
  n++;
  x10 += n;
}

//infinite iterate
while (true) {
  console.log("nihao");
}

//label 提供在程序其他位置引用它的标识符。加break, or continue; label: statement

markLoop: while (theMark == true) {
  doSomething();
}

var num01 = 0;
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break; //此时跳出J循环，就是i-5, j 从5-9的循环
    } //但i 循环继续，i- 6-9; j-1-9
    num01++;
  }
}
alert(num01); //95

var num02 = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outPoint; //在5，5，跳出所有的循环，执行outpoint 后外面的程序。
    }
    num02++;
  }
}

alert(num02); // 55,break with label > break without lable 95 = continue with label 95 = continue without 99 label

var num03 = 0;
outPoint1: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outPoint1;
    }
    num03++;
  }
}
alert(num03);

/* 
break ,switch, 连接到label 去终止程序执行
break - label 终止label标识的程序；没有label终止当前的循环j=5; break without label == continue with label

*/

var num03 = 0;
for (var i = 0; i < 10; i++) {
  outPoint1: for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outPoint1;
    }
    num03++;
  }
}
alert(num03); //95 label 在第一个循环内第二个循环外，结果break label = break =95; continue label =continue without label =99

var num04 = 0;
for (var i = 0; i < 10; i++) {
  outPoint3: for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outPoint3;
    }
    num04++;
  }
}
console.log(num04); //99

for (let i = 0; i < a.length; i++) {
  if ((a[i] = theValue)) {
    break; //循环数组里的元素，直到找到一个等于theValue 的值；
  }
}

//终止一个label
var x1 = 0;
var z1 = 0;
labelCancelLoops: while (true) {
  console.log("outside loop: " + x1);
  x1 += 1;
  z1 = 1;
  while (true) {
    console.log("inside loops :" + z1);
    z1 += 1;
    if (z1 === 10 && x1 === 10) {
      break labelCancelLoops;
    } else if (z1 === 10) {
      break;
    }
  }
}
/* 
var x1 = 0;
var z1 ;
labelCancelLoops: while (true) {
  console.log("outside loop: " + x1);
  x1 += 1;
  z1 = 1;
  while (true) {
    console.log("inside loops :" + z1);
    z1 += 1;
    if (z1 === 10 && x1 === 10) {
      break labelCancelLoops;
    } else if (z1 === 10) {
      break;
    }
  }
} */

/* var x1 = 0;
//var z1 = 0;
labelCancelLoops: while (true) {
  console.log("outside loop: " + x1);
  x1 += 1;
  var z1 = 1;
  while (true) {
    console.log("inside loops :" + z1);
    z1 += 1;
    if (z1 === 10 && x1 === 10) {
      break labelCancelLoops;
    } else if (z1 === 10) {
      break;
    }
  }
} */

/* var x1 = 0;
//var z1 = 0;
labelCancelLoops: while (true) {
  console.log("outside loop: " + x1);
  x1 += 1;
  let z1 = 1;  //not var but let
  while (true) {
    console.log("inside loops :" + z1);
    z1 += 1;
    if (z1 === 10 && x1 === 10) {
      break labelCancelLoops;
    } else if (z1 === 10) {
      break;
    }
  }
}
 */

/* 
continue statements -  可以用来继续执行，跳过当前循环的剩余部分进入下一循环，
一个while,do while, for ,label 语句， continue label 有时==break without label
*/

var i111 = 0;
var n111 = 0;
while (i111 < 5) {
  i111++;
  if (i111 == 3) {
    continue;
  }
  n111 += i111;
  console.log(n111);
}

/* 
一个标签checkiandj, 包括checkj: 遇到continue, 程序会结束当前checkj 迭代开始下一轮的迭代； 
每次遇到continue 语句，checkj 语句会一直重复执行，直到checkj 语句的条件为false。 返回false后，将会执行
当返回false 后，将会执行checkiandJ 的剩余语句， checkiandj 会一直执行，直到checkiandJ 的条件为fasle

checkj-- checkiandj--- the codes outside of checkiandj


*/
var i = 0;
var j = 10;
checkiandj: while (i < 4) {
  console.log(i); //0, 1 ，2，3
  i += 1; //1,2，3，4
  checkj: while (j > 4) {
    console.log(j); //10， 9，8， 7
    j -= 1; //9, 8，7，6
    if (j % 2 == 0) {
      continue checkj;
    }
    console.log(j + " 是奇数。 "); //9奇数，7数，
  }
}
/* 
for ... in 语句--循环一个指定的变量来循环一个对象所有可枚举的属性。为每一个不同的属性执行指定的语句。
for (variable in objec){
  statements
}
for in--列出index；
for of--列出value
*/

function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + "= " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}

car.make = Ford;
car.model = Mustang;

/* 
数组- 使用 for in 来迭代数组array, 返回数字索引，和自定义的属性名字； 用带有数字索引的传统的for 
循环来迭代一个数组比较好。如想改变数组对象，比如添加属性或方法，for..in 语句迭代的是自定义的属性，不是数组的元素
for in--属性和index, key; for ..of 和forEach()--引出value, 
for of- 可以迭代对象- array, Map, Set, arguments, for(variable of object){statement}


*/
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // 0, 1,2 foo
}

for (let i of arr) {
  console.log(i); // 3, 5, 7, for...of --> 输出没有“hello"
}

/* 
function name, arguments lists, comma seperate; {}
function square(number){
  return number * number;
}
*/
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x22, y22;
x22 = mycar.make; //Honda
myFunc(mycar);
y = mycar.make; // y value---Toyata, make 属性被修改了
/* 
原始参数比如一个具体的数字，被作为value 传递给函数；value 被传递给函数， 如果被调用函数改变了这个参数的值，这样的改变捕获影响到全局或调用函数的。
函数本身就有的： 属性值优先于，被调用的，在function中使用对象argument,使用被调用函数的属性值; 
如果传递对象自定义为参数，函数会改变对象的属性，改变对函数的外面是可见的
函数---内有属性值，会改变作为参数的对象数组的属性，函数的属性值不变
对象---做为参数传递给函数，参数原有的属性值会改变

*/
/* 
函数表达式 =，”=“是标志，函数声明，函数表达式，可有名，可有参数； 
*/

const square = function (number) {
  return number + number;
};
var x011 = square(4); // 16

//也可提供函数名，用于函数内代指其本身，或在调式器堆中识别该函数：

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(3)); // factorial(3);

/* let fac1;
const factorial1 = function fac1(n){return n<2 ? 1 : n*fac(n-1)};
console.log(fac1(3)); // factorial(3);===> fac1 is not function  */

/* 
const factorial = function fac(n){return n<2 ? 1 : n*fac(n-1)};
console.log(fac(3)); // fac is not defined; 
 */

function map(f, a) {
  let result = []; //创建一个数组
  let i; //声明一个值，用来循环；
  for (i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

function map(f11, a11) {
  let result11 = [];
  let i1;
  for (i1 = 0; i1 != a11.length; i1++) result11[i1] = f11(a11[i1]);
  return result11;
}

const f11 = function (x) {
  return x * x * x;
};
let numbers = [0, 2, 1, 6, 4, 23];
let cube = map(f11, numbers);
console.log(cube);

//JS 可以根据条件来定义一个函数，比如下面的代码，when =0，才定义function; 类似与eval
var myFunct;
if (num == 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}

//当函数是对象的属性时候，称之为方法；

//函数调用： function();函数要调用才执行；函数一定要处于调用他们的域中， 但是函数声明可以调前， 比
// 变量的提前更前；必须统一scope, 不管先后，若在后，则声明提前，函数声明提前====****不使用于函数的表达式 优先于变量的声明提前
console.log(square(6));
function square(n) {
  return n * n;
}

//声明提前： 函数》变量，同一scope，非表达式”=“； 先调用后定义；

// the below codes are expression, not applying initialization in advance
console.log(square); //square is hoisted with an initial value undefined.
console.log(square(6)); //uncaught TypeError: square is not a function
const square = function (n) {
  return n * n;
};

//函数的参数：number, string, object, boolean;可递归，可循环，函数属性值的默认绑定（函数的属性值》参数的属性值）
//函数构造默认绑定； 强制绑定APPLY，
// eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
/* 
console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false

*/

function factorial1(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial1(n - 1);
  }
} // 函数的递归动态调用函数，或参数是变化的，指定对象

/* 函数的作用域--函数内的变量外面不可访问；函数可以访问其范围内的任何变量和函数；
定义在全局函数可以访问所有定义在全局范围的变量；子函数可访问父函数定义的所有变量和父函数有权访问的任何其他变量。
*/

function multiply() {
  return num101 * num102;
}
multiply();

function getScore() {
  var num111 = 2;
  var num112 = 3;
  function add() {
    return name + " scored " + (num111 + num112);
  }
  return add();
}
getScore();

/* 
作用域和函数堆栈
递归-三方法--函数名； arguments.callee;, 作用域下的一个指向该函数的变量名
*/

var fii = function baar() {
  console.log("good");
};

baar(); //在web 控制台查到第一第二两个都不行; Uncaught ReferenceError: baar is not defined
arguments.callee(); //VM2460:6 Uncaught ReferenceError: arguments is not defined

fii(); //good

function loop(x) {
  if (x > 9) return;
  loop(x + 1);
  console.log(x + 1);
}

loop(0); //10,9,8,7,6,5,4,3,2,1

function walkTree(node) {
  if (node == null) return;
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
} //有些算法不能用简单迭代来实现，比如获取结构中所有的节点，使用递归现实容易；此for迭代
//跟loop 相比，这里每个递归调用都产生更多的递归。

function foo(i) {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);

//nested function : 函数嵌套函数；nested函数对其容器即外部函数是私有的。nested函数形参一个闭包，
// 闭包有自己独立的环境和变量表达式； nested 函数可以继承访问容器外壁嵌套的函数参数和变量；
// 内部函数包括外部函数的作用域。nested 函数-可访问父函数，父不访问子，子为闭包；
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

a = addSquares(2, 3); // return 13
b = addSquares(3, 4); //25

/* 
nested 函数形成闭包，调用外部函数，并为外部函数和内部函数指定参数
*/

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

fn_inside = outside(3); //可以这样想，给一个函数，使它的值加3；
result = fn_inside(5);

result1 = outside(3)(5); // return 8

/* 
保持变量，inside被返回时候x是怎么被暴力的；对外部函数的调用实际上是从新创建一遍这个闭包；、
只有当返回的inside 没有被再引用，内存才会被释放。
多层嵌套，递归包含所有包含它作用域，作用域链；

*/
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(6);
}
A(23); //3+6+23=32

/* 
命名冲突，闭包中有两个同名的参数或变量，冲突；更近的作用域有更高的优先权；作用链，链的第一个
元素就是最里面的作用域，最后一个元素就是最外层的作用域。


*/

function outside1() {
  var x0 = 5;
  function inside1() {
    var x0 = 6;
    return x0 * 2;
  }
  return inside1;
}

outside()(10); //20, not10

/* 外部函数不能访问内部函数，内部函数安全； 内部可以访问外部；内部生命周期》外部的， 外部的变量
执行时间比较长； 当内部的以某种方式被外部函数作用域访问时候，一个闭包就尝试了了。

 */

var pet = function (name) {
  var getName = function () {
    return name;
  };
  return getName;
};
myPet = pet("Vivie");
mypet();

//返回一个包含可以操作外部函数的内部变量方法的对象：

var createPet = function () {
  var sex;
  return {
    setName: function (newName) {
      name = newName;
    },
    getName: function () {
      return name;
    },
    getSex: function () {
      return sex;
    },
    setSex: function (newSex) {
      if (
        typeof newSex == "string" &&
        (newSex.toLowerCase() == "male" ||
          newSex.toLocaleLowerCase() == "female")
      ) {
        sex = newSex;
      }
    },
  };
};
var pet = createPet(Vivie);
pet.getName(); //Vivie
pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); //male
pet.getName(); // Oliver

//内部函数安全，不被外部的访问；可以无名称， 无变量，自己可以访问外部函数； 闭包；如内部函数
//有与外部函数相同的名字的变量，则内部函数访问不了外部的同名函数，靠近原则。

var getCode = (function(){
  var secureCode ="0[2]eadfasdfa"; 
  return function (){
    return secureCode;
  };
})();

getCode(); //return the secret code

/* 
使用arguments 对象， arguments[i]; arguments.length, 可处理比声明更多的参数来调用函数；
不知道参数的具体数有用；
*/

function myConcat(seperator){
  var resultConcat =""; //初始化字符串，保存字符串
  var i;
  for ( i=1; i< arguments.length; i++){
    resultConcat += arguments[i] + seperator;
  }
  return resultConcat;
}

console.log(myConcat("nihao", ","))
console.log(myConcat(";", "red", "blue", "orange"));
console.log( myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));

/* 
函数参数：剩余参数，默认参数-其默认值是undefiend；
可以写代码防止变量的值是undefined

 */
function multiply1 (a,b){
  b = (typeof b !== 'undefined') ? b:1;
  return a*b;
}
multiply1(6);


//默认参数，就不用写代码检测了； 在函数头简单地把1设定为b的默认值：
function multiply(a, b=1){
  return a*b;
}

multiply(23);

/* 
剩余参数，不确定数量的参数表示为数组， 剩余参数从第二个到最好参数， 每一个数与第一个参数相城的

 */

function multiply2(multiplier, ...theArgs) {
  return theArgs.map(x=>multiplier * x);
}
var arr = multiply2(2,6,23,66);
console.log(arr);

/* 
箭头函数--箭头函数表达式相比函数表达式具有较短的语法并以词法的方式绑定this.
箭头函数无名， 匿名的， 简洁和this。

*/

var aa1 =['abcdefeadfasdfa', 'beautifulgirls','haodajiahao']
var aa2=aa1.map(function(s){return s.length})
console.log(aa2);
var aa3 = aa1.map(s=>s.length);
console.log(aa3);
/* var aa6= aa1[0].map(function(s1){return s1.toUpperCase()});
console.log(aa6); ==> wrong, aa1[0].map is  not a function, uncaught TypeError*/


/* 
this 的词法--在箭头函数之前，每一个新函数都重新定义自己的this 值， 在构造函数中是一个新的对象
， 在严格模式下是未定义，在作为对象方法调用的函数中执行这个函数
 */

function person1(){
  //构造函数person1(), 将‘this定义为自身
  this.age =0;

  setInterval (function growUp(){
    //在非严格模式下，growUp()函数将this定义为全局对象；
    // 者与person1（) 定义的this 不同；
    //所以下面的语句不会起到预期的效果。
    this.age++;
  }, 1000);
}

var pp = new person1(); 

//在EcmaScript3/5, 通过把this的值赋值给一个变量可以修复这个问题

function person111(){
  var self =this; //把this赋值给self
  self.age =0;
  setInterval(function growUp(){
    //以下语句可以实现预期的功能
    self.age++;
  }, 1000)
}
/* 
创建约束函数也可使得this 值正确传递给growUp()函数
箭头函数捕捉上下文的this值，
 */

function person11(){
  this.age=0;

  setInterval(()=>{
    this.age++;
  },1000)
}

var P1 = new person11();
console.log(P1);

/* 
预定义函数-顶级内建函数
eval()--对字符串按js代码字符求值
uneval()--创建一个object 的源代码字符串表示
isFinite()--判断传入的值是否是有限的数值， 如需，其参数首先被转化给一个数值
isNaN()--- 判断一个值是否是NaN, 方式Number.isNaN, 或是typeof 来判断数值 类型
parseInt()---函数解释字符串参数返回一个整数
parseFloat()--返回浮点数
decodeURI()---对先前经过encodeURI函数或其他类似方法编码过的字符串进行解码；

ncodeURIComponent()
encodeURIComponent() 方法通过用以一个，两个，三个或四个转义序列表示字符的 UTF-8 编码替换统一
资源标识符（URI）的每个字符来进行编码（每个字符对应四个转义序列，这四个序列组了两个”替代“字符）。

escape() 已弃用
已废弃的 escape() 方法计算生成一个新的字符串，其中的某些字符已被替换为十六进制转义序列。
使用 encodeURI或者encodeURIComponent替代本方法。

unescape() 已弃用
已废弃的 unescape() 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。
上述的转义序列就像escape里介绍的一样。因为 unescape 已经废弃，建议使用decodeURI()或者
decodeURIComponent 替代本方法。


*/






















































