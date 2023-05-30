var subarraySumK = function (nums, k) {
  let map1 = new Map();
  map1.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let n of nums) {
    sum += n;
    if (sum - k in map1) {
      count += map1.get[sum - k]; //but (), not []
    }
    if (!map1.has(sum)) {
      map1.set(sum, 1);
    }
    map1.set(sum, map1.get(sum) + 1);
  }
  return count;
};
/* 
在代码中，sum 表示当前遍历过的元素的累计和，而 k 是目标和。
当 (sum - k) 存在于 map1 中时，说明存在一个子数组，其和等于 k。
map1 的键是累计和，而值是该累计和出现的次数。因此，map1[sum-k] 表示以 (sum - k) 为累计和的子数组的个数。
当 (sum - k) 存在于 map1 中时，将对应的子数组个数 map1[sum-k] 加到 count 中，表示找到了符合要求的子数组。
*/
//method 2:
var subarraySumK111 = function (nums, k) {
  let map1 = new Map();
  map1.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let n of nums) {
    sum += n;
    if (map1.has(sum - k)) {
      count += map1.get(sum - k);
    }
    if (!map1.has(sum)) {
      map1.set(sum, 1);
    } else {
      map1.set(sum, map1.get(sum) + 1);
    }
  }
  return count;
};
let nums11 = [1, 2, 3];
let k11 = 3;
console.log(subarraySumK111(nums11, k11)); // Output: 2

let nums12 = [1];
let k12 = 0;
console.log(subarraySumK111(nums12, k12)); // Output: 0

let nums13 = [-1, -1, 1];
let k13 = 0;
console.log(subarraySumK111(nums13, k13)); // Output: 1

var subarraySum = function (nums, k) {
  if (nums == null || nums.length == 0) return 0;
  let count = 0;
  let map1 = {};
  map1[0] = 1;
  let sum = 0;
  for (let n of nums) {
    sum += n;
    if (sum - k in map1) {
      count += map1[sum - k];
    }
    if (!(sum in map1)) {
      map1[sum] = 1;
    } else {
      map1[sum] += 1;
    }
    /*  if((sum-k) in map1){
            count += map1[sum-k];
        }; */
  }
  return count;
};

/* 
if (map.has(sum)) map.set(sum, map.get(sum)+1); 的意思是，如果 Map 对象 map 中已经存在键 
sum，则将对应的值加 1，即递增计数器；如果不存在，则使用 map.set(sum, 1) 添加新的键值对，
初始值为 1。

if (!map.has(sum)) map.set(sum, 1); else map.set(sum, map.get(sum)+1); 的意思也是相同的。
它首先检查 Map 对象 map 中是否不存在键 sum，如果是，则使用 map.set(sum, 1) 添加新的键值对，
初始值为 1；否则，说明键已经存在，使用 map.get(sum)+1 获取对应的值并加 1，然后使用 
map.set(sum, ...) 更新该键对应的值。

因此，代码中的顺序是正确的：先检查 sum - k 是否在 map1 中存在，然后再更新 map1[sum] 的值。
这样可以确保我们统计的是子数组的个数，而不仅仅是计算和等于 k 的子数组的和。

*/
