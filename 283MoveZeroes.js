var movezero = function (nums) {
  let nums1 = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums1[i] === 0 && nums1[i + 1] !== 0) {
      let nums2 = nums1.splice(0, i + 1);
      return nums2.concat(nums1);
    }
  }
};

//method2

var movezero2 = function (nums) {
  let low = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      low++;
    } else {
      [nums[i - low], nums[i]] = [nums[i], nums[i - low]];
    }
  }
  return nums; //这是奇怪，忘记这个但在leetcode 上提交是可以的额。
};
nums = [0, 23, 6, 0, 12, 0];
console.log(movezero2(nums));
