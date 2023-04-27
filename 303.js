var sumArr =function(nums){
    this.sums=[];
    var sum=0;
    for(var i=0; i<nums.length; i++){
        sum += nums[1];
        this.sums.push(sum)
    }
}

sumArr.prototype.subArr=function(left, right){
    return this.sums[right]-this.sums[left]
}