//method 1
var reverseS = function (s) {
  return s.reverse();
};
s1 = ["h", "l", "l", "e", "o"];
console.log(reverseS(s1));

//method 2
var reverseS = function (s) {
  let len = s.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(s[len - 1 - i]);
  }
  return arr;
};
s1 = ["h", "l", "l", "e", "o"];
console.log(reverseS(s1));

//method 3
var reverseS = function (s) {
  let len = s.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.unshift(s[i]);
  }
  return arr;
};
s1 = ["h", "l", "l", "e", "o"];
console.log(reverseS(s1));

//method4
var reverseS = function (s) {
  let len = s.length;
  let arr = [];
  for (let i = len - 1 - i; i <= 0; i--) {
    arr.push(s[i]);
  }
  return arr;
};
s1 = ["h", "l", "l", "e", "o"];
console.log(reverseS(s1));
/*  this method has error:  150:4 Uncaught ReferenceError: Cannot access 'i' before initialization
    at reverseS (<anonymous>:4:22)
    at <anonymous>:10:13
r */

//modification method4
var reverseS = function (s) {
  let len = s.length;
  let arr = [];
  let i; // let i or let i=0 都是输出空数组
  for (i = len - 1 - i; i <= 0; i--) {
    arr.push(s[i]);
  }
  return arr;
};
s1 = ["h", "l", "l", "e", "o"];
console.log(reverseS(s1));
/* 
在for loop 前initiation i 了，但是结果是空数组[]？
*/

//method 4 modifying again
var reverseS = function (s) {
  //let i = s.length-1;
  let arr = [];
  // let i or let i=0 都是输出空数组
  for (i = s.length - 1; i >= 0; i--) {
    arr.push(s[i]);
  }
  return arr;
};
s1 = ["h", "l", "l", "e", "o"];
console.log(reverseS(s1));
/* 
在for loop 前initiation i 了，但是结果是空数组[]？
*/
/* 
真是天天学习了，当i设定为最后的元素时，let i =s.length-1; 而非
i=s.length-1-i; i>=0, 而非i<=0;
保持清醒啊，同志。
*/

//method 5

var reverseS = function (s) {
  let len = s.length;
  //let arr = [];

  for (i = s.length - 1; i >= Math.floor(len / 2); i--) {
    //i 的取值范围要注意
    let temp = s[i];
    s[i] = s[len - 1 - i]; //这里写从i-1-len
    s[len - 1 - i] = temp; //not s[i+1-len]=s[i]
  }
  return s;
};
s1 = ["h", "l", "l", "e", "o"];
console.log(reverseS(s1));

var reverseString = function (s) {
  let len = s.length;
  //let arr=[
  for (let i = 0; i < Math.floor(len / 2); i++) {
    //从左到右，则是i<Math.floor(len/2);从右到左就是i>=Math.floor(len/2)
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
    //arr.unshift(s[i]);
  }
  return s;
};

/* 
这两段代码的作用是一样的，都是将字符串 s 中的字符颠倒顺序。只是它们的实现方式略有不同。

第一个循环 for (let i = 0; i < Math.floor(s.length / 2); i++) 从字符串的开头开始，每次交换位置的元素下标分别为 i 和 len - 1 - i，其中 len 是字符串的长度。由于字符串中的字符是对称的，只需要交换前一半和后一半的字符位置即可得到颠倒顺序的字符串。因此，循环的终止条件是 i < Math.floor(s.length / 2)，也就是只需要循环前一半的字符。

第二个循环 for (i = s.length - 1; i >= Math.floor(s.length/2); i--) 从字符串的末尾开始，每次交换位置的元素下标同样为 i 和 len - 1 - i。由于交换的是相对位置，所以需要从末尾开始，将最后一个字符与第一个字符交换，将倒数第二个字符与第二个字符交换，以此类推，直到到达中间位置。因此，循环的终止条件是 i >= Math.floor(s.length/2)，也就是循环到字符串中间的位置，交换位置的过程就完成了。

两个循环的终止条件不同，但是它们都实现了同样的功能。第一个循环从头开始遍历前一半字符，而第二个循环从尾部开始遍历到中间位置。选择哪种实现方式取决于具体的场景和代码的需求。

*/
