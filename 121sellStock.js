//方法一是正确的

var sellStock = function (prices) {
  if (prices.length <= 1 || prices === null||prices===undefined) return 0;
  let minbuy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {//暂时发现i=0 也可以额。
    minbuy = Math.min(minbuy, prices[i]); // 每次minbuy，profit 都进行比较运算，取得符合条件的新值
    profit = Math.max(profit, prices[i] - minbuy);
  }
  return profit; //不要在循环内return ,要不代码只运行一次就结束了，因为return有终止代码运行；
  //如果不是return,是其他比如console.log, 或者alert 则会每次循环都console alert 一次。
};
/* for循环内的代码可以这样写
 if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
*/

//方法二也是正确的
var maxProfit = function (prices) {
  if (prices == null || prices.length <= 1) return 0;
  let minBuy = prices[0];
  let profit = 0;
  let buyIndex = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minBuy) {
      minBuy = prices[i];
      buyIndex = i;
    } else if (i > buyIndex) {
      profit = Math.max(profit, prices[i] - minBuy);
    }
  }
  return profit;
};

let prices = [7, 1, 5, 3, 2, 6];
console.log(maxProfit(prices));
//方法三，我自己的方法：还没修正
var maxProfit = function (prices) {
  if (prices.length <= 1 || prices === null||prices===undefined) return 0;
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let minus1 = prices[j] - prices[i];
     /*  if (minus1 <= 0) {
        minus1 = 0;
      } */
      if (stack.length === 0) {
        stack.push(minus1);
      } else {
        stack.pop(); //问题出在这里，如果stack[o]==minus1一个元素，pop了，就没有了，在下面的代码中，你还push(Math.max(minus1,stack[0]))
        // 那么就是math.max(minus1,undefined)===>NaN.
        let lastStack = stack.pop();
        //stack.push(Math.max(minus1, stack[0]));
        stack.push(Math.max(minus1, lastStack));
        /* 或者先把大者从stack头部放入stack,然后再在stack尾部pop了原来的stack[0]
        stack.unshift(Math.max(minus1, stack[0]);
        stack.pop();
        */
      }
    }
  }
  return stack[0];
};
let prices1222 = [9, 12, 3, 6, 9, 16, 5, 8];
console.log(maxProfit(prices1222));
//这两个代码都是用来求股票的最大利润的，但是它们的实现方法不同。你写的代码是先判断了栈是否为空，
//然后再根据情况入栈或出栈，最后返回栈顶元素。但是这个实现方式有一些问题，当数组中的元素全是负数
//或者全是递减的时候，栈中不会有正数，此时会返回NaN。而第一个代码是使用了一个变量 minVal
//来保存栈中的最小值，以保证最终结果的正确性。第一个代码使用了Math.min函数来判断最小值，
//但是这个函数有一个问题，就是如果其中有一个参数是NaN，那么返回值就是NaN。因此，
//第一个代码在实现的时候还需要特殊处理栈中只有一个元素的情况，以避免出现NaN的情况。两个代码都有一些问题，需要进行改进。
/* 
以上的分析是来自chatGPT,乱讲一通， */
// 修改的方法三：

var maxProfit123 = function(prices){
    if (prices.length<=1 || prices ===null||prices===undefined) return 0;
    let stack=[];
    for (let i=0; i<prices.length;i++){
        for (let j=i+1; j<prices.length; j++){
            let minus1=prices[j]-prices[i];
            //if (minus1<=0){minus1=0};
            if( stack.length===0 ){
                stack.push(minus1)
            }else{
                //stack.pop();
                stack.unshift(Math.max(minus1,stack[0])); 
                stack.pop();
            }
        }
    }
    return stack[0]; //.length > 0 ? stack[0] : 0;
};

let prices122=[9,12,3,6,9,16,5,8];
console.log(maxProfit123(prices122)); // 13
//VM347:20 13


//方法四，is chatGPT ,结果也是又问题；
let maxProfit1111 = function (prices) {
  if (prices.length <= 0 || prices === null) return 0;
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let minus1 = prices[j] - prices[i];
      if (stack.length === 0) {
        stack.push(minus1);
      } else {
        let minVal = stack.length === 1 ? stack[0] : Math.min(minus1, stack[0]);
        stack.pop();
        stack.push(minVal);
      }
    }
  }
  return stack[0];
};
let prices1111 = [9, 12, 3, 6, 9, 16, 5, 8];
console.log(maxProfit111(prices111)); // 13
//VM120:19 3, 结果是3，而非13

//方法五：from ChatGPT，还是错误，两个结果都是0
let maxProfit = function (prices) {
  if (prices.length <= 0 || prices === null || prices == undefined) return 0;
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let minus1 = prices[j] - prices[i];
      if (stack.length === 0 && minus1 >= 0) {
        stack.push(minus1);
      } else {
        stack.pop();
        stack.push(Math.max(minus1, stack[0], 0));
      }
    }
  }
  return isNaN(stack[0]) ? 0 : stack[0];
};

console.log(maxProfit([9, 12, 3, 6, 9, 16, 5, 8])); // output: 13
console.log(maxProfit([5, 4, 3, 2, 1])); // output: 0
/* 
if (stack.length === 0 && minus1 >= 0) {
    stack.push(minus1)
} else {
    stack.pop();
    stack.push(Math.max(minus1, stack[0], 0));
}
如果 stack 数组为空，且当前的价格变化 minus1 是负数，那么 stack.push(minus1) 语句不会被执行，
这样 stack 数组就不会被更新。如果所有的价格变化都是负数，那么 stack 数组将保持为空。
在最后返回 stack[0] 时，由于 stack 数组为空，stack[0] 的值为 undefined，
而当使用 Math.max() 函数和 undefined 进行比较时，会返回 NaN。这就是为什么会出现 NaN 的情况。

为了解决这个问题，你可以在函数的最后添加一个判断语句，如果 stack[0] 的值为 undefined，
则返回 0。这样就可以避免出现 NaN 的情况。例如：

arduino
Copy code
return stack[0] === undefined ? 0 : stack[0];
*/
//方法六：结果是13，正确
var maxProfit111 = function (prices) {
  if (prices.length <= 0 || prices === null) return 0;
  let stack = [0];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let minus1 = prices[j] - prices[i];
      if (minus1 > 0) {
        stack.push(minus1);
      }
    }
  }
  return Math.max(...stack);
};
let prices111 = [9, 12, 3, 6, 9, 16, 5, 8];
console.log(maxProfit111(prices111));
// 13,这个代码是正确的

//方法七： 此方法输出的解释是NaN,也是代码有问题

var maxProfit = function (prices) {
  if (prices.length <= 0 || prices == null) return 0;
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let minus1 = prices[j] - prices[i];
      if (minus1 <= 0) {
        minus1 = 0;
      }
      if (stack.length === 0) {
        stack.push(minus1);
      } else {
        stack.pop();
        stack.push(Math.max(minus1, stack[0]));
      }
    }
  }
  return stack.length > 0 ? stack[0] : 0;
};

let prices1 = [9, 12, 3, 6, 9, 16, 5, 8];
console.log(maxProfit(prices1)); // 13

/* 
array=[]创建了一个空数组，而array=null将数组变量设置为null，表示没有指向任何对象。这两种情况是有区别的。

如果将array=[]转换为布尔值，它将被视为true，因为它是一个非空数组。如果将其转换为数字，
它将被视为0，因为它是一个空数组。

如果将array=null转换为布尔值，它将被视为false，因为它不指向任何对象。如果将其转换为数字，
它将被视为0，因为它是一个空对象。

因此，array=[]和array=null在布尔值上有不同的结果，但在数字上它们是相同的。如果您要检查一个数组是否为空，
建议使用array.length === 0，而不是将其设置为null。
在arr==[]的情况下，arr和[]是两个不同的对象，它们的内存地址不同，因此它们是不相等的。因此，
该比较的结果是false，而不是undefined。

在array=null的情况下，将其转换为布尔值时，它将被视为false，因为null表示空或不存在的值。
如果将其转换为数字，则会将其视为0，因为它是一个空对象。在JavaScript中，将数组转换为布尔值时，
非空数组被视为真值（true），而空数组被视为假值（false）。
因此，Boolean([])返回true，Boolean(null)返回false。将数组转换为数字时，空数组会被视为0
，而null会被视为NaN。因此，Number([])返回0，而Number(null)返回0。

请注意，推荐使用===操作符进行比较，因为它将检查值和类型是否相等。例如，x === 3
将仅在变量x的值等于3并且类型为数字时返回true。
在 JavaScript 中，if 或 while 语句中的条件表达式需要计算出一个布尔值。因此，
如果在这些语句中使用赋值语句，例如 if (let i = 0)，这将导致语法错误。正确的方式应该是在条件语句中
使用一个表达式，例如 if (i === 0)。

而在 for 语句中，赋值语句通常用于初始化循环计数器。for 语句的语法如下：

css
Copy code
for (initialization; condition; update) {
  // code to be executed
}
在 JavaScript 中，if 或 while 语句的条件表达式需要计算出一个布尔值，用于决定是否执行相应的代码块。
因此，条件表达式应该是一个能够返回布尔值的表达式。而赋值语句，例如 let i = 0，
不是一个能够返回布尔值的表达式，它只是一个语句，用于将一个值赋给变量。

因此，当你尝试在 if 或 while 语句的条件中使用一个赋值语句时，JavaScript 引擎无法将它计算为一个布尔值，
因为赋值语句本身不会返回任何值。这会导致语法错误，因为 if 或 while 语句的条件需要一个能够返回布尔值的
表达式。

如果你需要在 if 或 while 语句中使用一个变量，你应该先将变量声明和赋值分开，并将变量赋值给
一个布尔值表达式，例如 let i = 0; if (i === 0)。这样就能够在条件中使用一个能够返回布尔值的表达式，
从而避免语法错误。


*/
