

//方法一： 此法可以验证一些案例，如nums=[99,99】k=2，
//输出的结果是false,但实际上应该是true
var containDuplicate = function (nums, k) {
  if (k >= nums.length || k === 0) return false;
  for (let i = 0; i < nums.length - k; i++) {
    /*    if (i+k+1>nums.length){
            return false;
        }else{ */
    let obj1 = new Object();
    let nums1 = nums.slice(i, i + k + 1); //not splice,splice 会导致原来的数组nums 改变
    for (let j = 0; j < nums.length; j++) {
      if (Object.values(obj1).includes("nums1[j]")) {
        return true;
      } else {
        obj1[j] = nums1[j];
      }
    }
  }
  return false;
};

/* 
这个函数的作用是判断给定的数组 nums 中，是否存在一个重复的元素，且这两个重复元素之间的距离不大于 k。

但是代码中有一个错误，就是 nums.splice(i, k+1) 这一行。这行代码会在每次循环中修改原始的数组 nums，
导致在后续的循环中，可能会漏掉一些元素。

例如，当 nums 是 [1,0,1,1]，而 k 是 1 时，第一次循环时，nums1 的值是 [1,0,1]，obj1 中的键值对是 
{0: 1, 1: 0, 2: 1}。在第二次循环时，由于 nums 已经被修改为 [0,1]，所以会漏掉最后一个元素 1。这样的话，
就会导致函数返回错误的结果 false，而不是正确的结果 true。

要修复这个问题，可以将 nums.splice(i, k+1) 替换为 nums.slice(i, i+k+1)，
这样就不会修改原始的数组了。修复后的代码如下：
*/
//方法二：
var containDouble =function(nums, k){
    let map1= new Map();
    for (let i=0; i<nums.length; i++){
        if(map1.has(nums[i])&&(i-map1.get(nums[i])<=k)){
            return true;
        }else{
            map1.set(nums[i],i);
        }
    };
    return false;
}

//方法三：
var containDouble3 =function(nums,k){
    let hTable = {};
    for (let i=0; i<nums.length; i++){
        if((nums[i]) in hTable){
            return true;
        }
        hTable[nums[i]]=1;
        
    };
    return false;
};

//方法四：
var containDouble4 = function (nums,k){
    let set1 = new Set();
    for (let i=0; i<nums.length; i++){
        if (set1.has(nums[1])){
            return true;
        };
        set1.add(nums[i]);
        if (set1.size()>k){
            set1.delete(nums[i-k]);
        }
    }
}

/* 
includes() 方法用于检查某个值是否在数组、字符串或 Set 中存在，
因此可以在数组、字符串或 Set 中使用。对于 Map 和 Hashtable 来说，
通常使用 has() 方法或 contains() 方法来检查是否存在某个键。
添加值：map-set, array-push/unshift; set-add; hashtable-put;
检查是否有特定的值：map-has， hashtable-contains/in; string/array/set --includes.
Hashtable 是一个构造函数，因此需要使用 new 关键字来创建实例。无法使用字面量创建哈希表。
但是，ES6 中引入了 Map 类型，可以使用字面量创建实例，例如：

javascript
Copy code
const myMap = new Map(); // 使用 new 关键字创建 Map 实例
const myMap2 = new Map([['key1', 'value1'], ['key2', 'value2']]); 
// 使用字面量创建 Map 实例，并初始化键值对
需要注意的是，Map 与 Hashtable 在实现上略有不同，例如 Map 的键可以是
任何数据类型，而 Hashtable 中的键必须是字符串或数值类型。
*/