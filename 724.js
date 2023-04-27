/* var pivotIndex = function (nums) {
  //if(nums.length<2 ) return -1;
  if (nums.reduce((acc, curr)=>acc+curr) - nums[0] == 0 || nums == [0]) {
    return 0;
  }
  if (nums.length < 2) {
    return -1;
  }
  let sum = nums.reduce((acc, curr) => acc + curr);
  let rightSum = 0;
  for (let i = nums.length-1; i >=0; i--) {
    if (rightSum == sum - rightSum - nums[i]) {
      return i;
    }
    rightSum += nums[i];
  }
  return -1;
};
nums=[1,2,3,6,4,0,2];
pivotIndex(nums) */

/* var pivotNum = function(nums){
    let sum=nums.reduce((acc, curr, i, nums)=>acc += nums[i]);
    let rightSum=0, leftSum=0;
    for (let i=0; i<nums.length; i++){
        rightSum=sum-leftSum-nums[i];
        if (rightSum==leftSum) {return i}
        leftSum += nums[i]
    }return -1;
}
nums=[1,2,36,2,5,6,8,9]
pivotNum(nums); */

var pivotN = function (nums) {
  let sum = nums.reduce((acc, curr) => (acc += curr));
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left == (sum - nums[i]) / 2) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};
nums = [1, 2, 36, 2, 5, 6, 8, 9];
pivotN(nums);
