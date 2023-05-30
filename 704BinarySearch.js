// method1:
var BinarySearch = function (nums, target) {
  let set1 = new Set();
  set1.add(target);
  for (let i = 0; i < nums.length; i++) {
    if (set1.has(nums[i])) return nums.indexOf(nums[i]);
  }
  return -1;
};

// methods2:

var BinarySearch2 = function (nums, target) {
  let set2 = new Set();
  let targetIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    set2.add(nums[i] === target ? i : -1);
    if (set2.has(i)) {
      targetIndex = i;
    }
  }
  return targetIndex;
};
/* 
在你的代码中，变量i只在循环中使用，循环结束后它就不存在了，因此在return语句中调用i是
不合法的。如果你想返回nums数组中目标元素的索引，你可以在循环中找到该索引，
将其存储到一个变量中，然后在循环结束后进行检查，看看是否找到了目标元素。
以下是修改后的代码：
这样做的好处是，如果找到了目标元素，可以立即退出循环，避免不必要的迭代。同时，
由于只有一个变量存储了目标元素的索引，可以直接返回该变量，不需要再将Set转换为数组，
并且不需要使用Array.findIndex()方法。

*/

//method 3

var BinarySearch2 = function (nums, target) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i] === target ? i : -1);
  }
  let index = Array.from(set).findIndex((val) => val !== -1);
  return index === -1 ? -1 : Array.from(set)[index];
};

// methods4

const search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};
