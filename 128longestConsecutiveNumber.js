var longestCN = function(nums){
    if (nums.length ===0 ) return false;
    let count =0;
    let j=0;
    let maxCount =0;
    let numsSorted =nums.sort((a,b)=>a-b);
    for (let i=1; i<nums.length; i++){
        if (numsSorted[i]===numsSorted[j]+1){
            count++;
            j++;
            maxCount =Math.max(maxCount, count);
        }else{
            j++;
        }
    };
    return count+1;
}