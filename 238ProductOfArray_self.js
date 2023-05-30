//此方法超时：自己do
var productionNoSelf = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let nums1 = nums[i]; //nums.splice(i,1);
    nums.splice(i, 1);
    let multiplication = 1;
    for (let j = 0; j < nums.length; j++) {
      multiplication *= nums[j];
    }
    ans.push(multiplication);
    nums.splice(i, 0, nums1);
  }
  return ans;
};
nums = [1, 2, 3, 4, 5, 6];
console.log(productionNoSelf(nums));

//方法二： 左乘积*右乘积

var productNoSelf2 = function (nums) {
  let arr = new Array(nums.length).fill(1);
  let left = [];
  for (let i = 0; i < nums.length; i++) {
    //left[0]=1;
    left[i] = i === 0 ? 1 : (left[i] = left[i - 1] * nums[i - 1]);
  } //left[i] = i === 0 ? 1 : left[i - 1] * nums[i - 1]; 两种写法都可以
  let right = [];
  for (let j = nums.length - 1; j >= 0; j--) {
    /*  right[0]=1;
        right[j]=right[j-1]*nums[j-1];
        arr[j]=left[j]*right[j] */
    right[j] = j === nums.length - 1 ? 1 : right[j + 1] * nums[j + 1];
    arr[j] = left[j] * right[j];
  }
  return arr;
};
nums = [1, 2, 3, 4, 5, 6];
console.log(productNoSelf2(nums));
/* 

这段代码是在一个循环中对数组 left 进行赋值操作。根据 i 的值，如果 i 等于 0，
那么 left[i] 被赋值为 1，否则 left[i] 被赋值为 left[i-1] * nums[i-1]。


left=[1,1,2,6,24,120];
right=[720,360,120,30,6,1];
ans=left*right =[720,360,240,180,144,120]
*/

/* 
let arr=[1,2,3]; console.log(arr.splice(0,0,6)); console.log(arr);
 console.log(arr.splice(1,0, 9));console.log(arr); 
VM738:1 []
VM738:1 (4) [6, 1, 2, 3]
VM738:1 []
VM738:1 (5) [6, 9, 1, 2, 3]
第二个splice调用中，第一个参数是1，表示从数组的第1个位置开始修改。第二个参数是0，表示不删除任何元素。第三个参数是9，表示在第1个位置插入数字9，所以这一步操作后数组变成了[6,9,1,2,3]。

需要注意的是，splice方法会修改原数组，返回被删除的元素组成的数组，如果没有删除元素，则返回一个空数组。

相比之下，slice是另一种数组方法，它用于提取数组中的一段元素，不会修改原数组，而是返回一个新的数组。
*/
/* 

当需要将 Map 对象中的键值对转换为数组时，可以使用以下两种方式：

使用 Array.from(map) 方法将 Map 对象转换为数组形式，其中每个元素是 [key, value] 形式的数组：
javascript
Copy code
const myMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

const arr = Array.from(myMap);
console.log(arr); // [ ['a', 1], ['b', 2], ['c', 3] ]
使用 for...of 循环遍历 Map 对象，然后将每个键值对转换为数组：
javascript
Copy code
const myMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

const arr = [];
for (const [key, value] of myMap) {
  arr.push([key, value]);
}
console.log(arr); // [ ['a', 1], ['b', 2], ['c', 3] ]
这两种方式本质上是相同的，都是将 Map 对象中的键值对转换为数组形式。但是使用 
for...of 循环可以更灵活地处理每个键值对，例如可以在循环过程中根据特定条件筛选或转换键值对。

另外，使用 Map.entries() 方法也可以将 Map 对象中的键值对转换为 [key, value] 形式的数组：

javascript
Copy code
const myMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

const arr = [];
for (const [key, value] of myMap.entries()) {
  arr.push([key, value]);
}
console.log(arr); // [ ['a', 1], ['b', 2], ['c', 3] ]
这种方式与使用 for...of 循环遍历 Map 对象的方式是等效的，只是使用了 Map.entries()
 方法来获取键值对的迭代器对象。在使用 for...of 循环遍历 Map 对象时，如果不显式调用 entries() 方法，
 那么默认就是遍历键值对的迭代器对象，因此可以直接写为 for (const [key, value] of myMap)。

*/
