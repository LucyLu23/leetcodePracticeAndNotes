var removeDuplicate = function (nums) {
  let map = {};
  let nums1 = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]++];
    } else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] >= 2) {
      nums1.push(nums[i], nums[i]);
    } else {
      nums1.push(nums[i]);
    }
  }
  return nums1;
};
nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicate(nums));

//modified code

var removeDuplicate1 = function (nums) {
  let map = {};
  let nums1 = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let values = Object.values(map);
  let keys = Object.keys(map);
  for (let j = 0; j < values.length; j++) {
    if (values[j] >= 2) {
      nums1.push(Number(keys[j]), Number(keys[j]));
    } else {
      nums1.push(Number(keys[j]));
    }
  }
  return nums1;
};
nums1 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicate1(nums1)); //真心不明白，在leetcode上提交，输出结果居然是空数组，在browser
//输出是正确的[0，0，1，1，2，3，3]
//method 3

var removeDuplicate3 = function (nums) {
  let map = {};
  let nums3 = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] <= 2) {
      //(map[nums[i]<=2])
      nums3.push(nums[i]);
    }
  }
  return nums3;
};
nums33 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicate3(nums33));
