/* var rotate1 =function (nums,k){
    var nums1=nums.slice(-(k+1)); 
    let nums2=[]
    for (let i=0; i<=k; i++)
    { nums2[i]=nums1[k-1-i]};
      //let nums3= nums2.concat(nums)
      //return nums3.splice(-k);
    };

    let nums3= nums2.concat(nums)
      return nums3.splice(-k);
      let nums=[1,2,6,23,66,99]; rotate1(nums, 3);
      console.log(rotate1(nums,3)) */

/* AA */


var rotate1 = function (nums, k) {
  var nums1 = nums.slice(-k);
  console.log(nums1);

  let nums2 = nums1.concat(nums);
  console.log(nums2);
  nums2.splice(-k);
  console.log(nums2.splice(-k));
  console.log(nums2);
  return nums2;
};

 nums = [1, 2, 6, 23, 66, 99];
console.log(rotate1(nums, 3)); 