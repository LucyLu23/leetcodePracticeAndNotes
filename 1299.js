var rightMax=function(nums){
    if (nums.length==1) return -1;
    let max=nums[nums.length-1];
    for (let i=nums.length-2; i>=0; i--){
        let temp=nums[i];
        
        if(temp>max){
            max=temp;
        
        }
        nums[i]=max

    };
    nums[nums.length-1]=-1;
    return nums;
};
rightMax([23,25,1,26,66,2,34,56,66,1,2,3,4]);