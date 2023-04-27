function bibi(like, coin) {
  console.log("like: " + like);
  console.log("coin: " + coin);
  console.log("input Arguments: " + arguments.length);
}

bibi(110, 120, 6666); //no mistake, more arguments than the function

// map console.log (item, index, array), sometimes, missing array, or just
//just console.log, no argument at all; or fewer arguments , or more arguments

const arr = ["110", "120", "130"];
arr.map(function (item, index, array) {
  console.log("item: " + item);
  console.log("index: " + index);
  console.log("array :" + array);
});

const arr1 = ["12", "23", "66"];
arr.map(console.log);
// arr and arr1 have the same results; map function will print out three arguments;

arr.map(function (item, index, array) {
  console.log(item, index, array);
});

//parseInt(); //take the int out of string, like parseFloat()--take the decimal out of string

const num = parseInt("0xB");
console.log(num);
//parseInt(item---arguments, index-进制)---put in the string, then int will out
//the second argument -0 then 十进制； <36 || >36, then NaN; the second argument will be between 2--36
// 0-十进制； 1---NaN； 2---二进制； for example- parseInt("110", 2) ---6

const num0 = parseInt("110", 0); // 十进制：110
const num1 = parseInt("110", 1); //NaN
const num2 = parseInt("110", 2); // 二进制--6； 110 的二进制转化为十进制为6

["1", "2", "3"]
  .map(
    item,
    index,
    array
  )(console.log(item, index, array)) //???????????map()()????
  [
    // parseInt('1', 0) ---1;
    //parseInt('2',1)---NaN;
    //parseInt('3', 2) ---NaN; 二进制没有3，只有0和1
    // the final outcome: [1, NaN, NaN]
    //no matter what, map will come out the three argument's value, applying Arrey format.
    ("1", "2", "3")
  ].map(function (item, index, array) {
    return parseInt(item, index, array);
  });

parseInt("1", 0, ["1", "2", "3"]);
parseInt("2", 1, ["1", "2", "3"]);
parseInt("3", 2, ["1", "2", "3"]);

//parseInt will ignore the third argument, because the definition of parseInt just define two arguments;

parseInt("1", 0); //1, 十进制
parseInt("2", 1); //NaN
parseInt("3", 2); //NaN， 二进制has no other number, except for 0 and 1

//outcome is [1, NaN, Nan]
