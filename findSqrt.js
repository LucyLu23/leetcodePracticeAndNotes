var mySqrt = function(x){
    if(x==0) return 0;
    let left=1;
    let right =x;
    while (left<right){
        let mid = left + Math.floor((right-left)/2);
        if(mid*mid<x){
            left=mid+1
        }else if(mid*mid >x){
            right=mid-1
        }else{
            return mid;
        }
    }
    return left-1;
}
console.log(mySqrt(8))
