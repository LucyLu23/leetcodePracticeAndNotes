var nextGreaterElement = function(nums1, nums2){
    let ans=[];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
          if (nums1[i] == nums2[j] && nums1[i] < nums2[j + 1]) {
            ans.push(nums2[j + 1]);
          }
          if (nums1[i] == nums2[j] && (nums1[i] < nums2[j + 1] || !nums2[j+1])) {
            ans.push(-1);
          }
        }
        
    }return ans;
}