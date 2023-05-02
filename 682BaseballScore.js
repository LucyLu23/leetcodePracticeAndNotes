/* 
typeof array[i] === 'number' 
1. 不可 typeOf
2. 不可 typeof (array[i])
3. 不可 typeof array[i]===number;
if(typeof ops[i] === 'number')和if(Number.isInteger(ops[i]))的区别在于前者检查变量类型是否为number，后者则检查变量是否为整数。

具体来说，typeof操作符返回一个表示变量类型的字符串，可以检查变量是否为number类型，但是不能确定该变量的值是否为整数。而Number.isInteger()方法可以检查变量的值是否为整数，但不能判断变量类型是否为number。

*/
var baseballScore = function (ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      stack.pop();
      continue;
    } else if (ops[i] === "D") {
      stack.push(2 * stack[stack.length - 1]);
      continue;
    } else if (ops[i] === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
      continue;
    } else {
      if (Number.isInteger(Number(ops[i]))) {
        stack.push(Number(ops[i]));
      }
    }
  }
  return stack.reduce((a, b) => a + b, 0);
};
ops = ["5", "2", "C", "D", "+"];
console.log(baseballScore(ops));

//以下有什么错误了吗？
let arr101 = [5, 10, 15];
let sum = 0;
for (let i = 0; i < arr101.length; i++) {
  sum += arr[i]; //不是=+
}

arr.reduce((a, b) => a + b, 0);

/* 1.不可typeOf; 不可typeof (array[i]);不可typeof array[i]==number; 
2.可以typeof array[i]==="number"; 
3.可以Number(array[i]) 或parseInt(array[i]);
4.continue 可有可无；
5.else if 可以全换成if；
6.stack[stack.lengtth-1],游历ops[i]看它以什么方式push, or pop 入新的stack数列内，而不是stack.push(ops[i+1])或stack.pop(ops[i]);
7,. 数字+undefined=NaN; ops=[1,2,3],那么ops[4]==undefined;
8.数组相加：stack.reduce((a,b)=>a+b,0)
9. sum+= arr[i], 而不是sum =+arr[i]
10. 注意问题：数组名称保持一致，不要一会arr， 一会又是stack.

11.  在这个代码中，sum =+ arr[i] 实际上是一个赋值表达式，它包含了一个等号和一个加号，但它不是一个有效的 JavaScript 运算符。
因此，JavaScript 解释器会将其解释为两个独立的运算符：赋值运算符 = 和一元正号运算符 +。

在第一次循环中，sum 的初始值为 0，arr[i] 的值为 5。因此，表达式 sum =+ arr[i] 等价于 sum = +5，即将数字 5 转换为正数并赋值给 sum。
因此，sum 的值变成了 5。

在第二次循环中，sum 的值为 5，arr[i] 的值为 10。因此，表达式 sum =+ arr[i] 等价于 sum = +10，即将数字 10 转换为正数并赋值给 sum。
因此，sum 的值变成了 10。

在第三次循环中，sum 的值为 10，arr[i] 的值为 15。因此，表达式 sum =+ arr[i] 等价于 sum = +15，即将数字 15 转换为正数并赋值给 sum。
因此，sum 的值最终变成了 15。

因此，这个代码片段输出的结果是 15，这恰好是数组 arr101 的最后一个元素的值。但是这个结果并不是预期的数组 arr101 中所有元素的和，
因为 =+ 不是有效的 JavaScript 运算符。正确的写法应该是使用 += 运算符，即 sum += arr[i]。
 */
var baseballScore11 = function(ops){
    let stack=[];
    for(let i=0; i<ops.length; i++){
        switch(ops[i]){
            case 'D':{
                stack.push(stack[stack.length-1]*2);
                break;

            }
            case "+":{
                stack.push(stack[stack.length-1]+stack[stack.length-2]);
                break;

            }
            case 'C':{
                stack.pop();
                break;

            }
            default: {
                stack.push(parseInt(ops[i]))

            }
        }
    };
    return stack.reduce((a,b)=>a+b,0)
}



