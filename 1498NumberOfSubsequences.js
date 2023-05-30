// 方法一
var numSubseq = function (nums, target){
    nums.sort((a,b)=>a-b);
    if(nums[0]>target) return 0;
    let count =0;
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length+1; j++){
            let nums1=nums.slice(i,j+1);
            let sum =nums[i]+nums[j] ||nums1[0];
            if(sum<=target){
                count++;
            }
        }
    };return count;
}//这个方法自己写的，不行

//method2
var numSubseq2 = function (nums, target){
  let n = nums.length;
  let mod = 1000000007; //let  mod = 1e9+7;const mod = 10 ** 9 + 7;
  nums.sort((a, b) => a - b);

  let power = [];
  power[0] = 1;
  for (let i = 1; i < n; ++i) {
    power[i] = (power[i - 1] * 2) % mod;
  }
  let ans = 0;
  let left = 0, right = n - 1;

  while (left <= right){
    if(nums[left]+nums[right]<=target){
        ans += power[right-left];
        ans %= mod;
        left++;
    }else{
        right--;
    }
  };
  return ans;
};
nums1 = [2, 3, 3, 4, 6, 7];
target = 12;
console.log(numSubseq2(nums1, target));

// method3
var numSubseq3 = function (nums, target){
    const mod =1000000007, arr=[];
    let num=1;

    for (let i=0; i<nums.length; i++){
        arr.push(num);
        num=num*2%mod;

    };
    nums.sort((a,b)=>a-b);
    let count =0, j=nums.length-1;
    for (let i=0; i<nums.length && nums[i]*2<=target; i++){
        while (j && nums[j] + nums[i] > target)
          //while 后没有；分号
          /* 存在一个分号;，导致循环体为空，而后面的j--语句则不在循环体内。因此，
          j的值没有被正确更新，导致在计算arr[j-i]时出现了错误，最终导致输出结果为NaN
           */
          j--;
        count =(count+arr[j-i])%mod;
    }
    return count;
};nums3 = [2, 3, 3, 4, 6, 7];
target = 12;
console.log(numSubseq3(nums3, target));

//method 3
var numSubseq4 = function (nums, target){
    let pow =[];
    pow.push(1);

    nums.sort((a,b)=>a-b);
    const mod = le9+7;

    for (let i=1; i=nums.length; i++){
        pow.push((pow[pow.length-1]+2)%mod);

    }
    let i=0, j=nums.length-1, res =0;
    while (i<=j){
        if(nums[i]+nums[j]>target){
            j--;
        }else{
            res = (res + pow[j-i++])%mod;
        }
    };
    return res;
};

nums4 = [2, 3, 3, 4, 6, 7]
target = 12;
console.log(numSubseq4(nums4, target));



/* 
j - i++ 表示 j - i，并且在计算完成后，将 i 的值增加 1。具体来说，这行代码的含义是将
 pow[j - i] 的值加到 res 中，并且对 res 进行取模操作。

这段代码可以用以下等价的方式重写：

javascript
Copy code
res = (res + pow[j - i]) % mod;
i = i + 1;
这里，j - i 是用于访问 pow 数组的索引偏移量，然后将其值加到 res 中。最后，通过对 res 执行取模操作，以避免溢出。

需要注意的是，i++ 是一个后缀自增操作，这意味着 i 的值会在计算完成后增加 1。所以在这行代码执行后，i 的值会递增

*/

 /* 
 当处理较大的数值计算时，特别是在涉及乘法、加法、指数等操作时，结果可能会变得非常大
 。如果不进行取模运算，可能会导致数值溢出或超出计算机可以表示的范围。

通过取模运算，可以将计算结果限制在一个合理的范围内。通常选择一个质数作为模数，例如常见的 
1e9+7（或 1000000007）作为模数，是因为质数有良好的数学性质，可以确保取模后的结果分布均匀
且不易出现冲突。

对于大的质数模数，取模运算的作用包括：

控制结果的大小：取模运算可以确保结果在 0 到 mod-1 的范围内，避免结果过大。

防止数值溢出：通过对较大的数值进行取模运算，可以避免计算机数值溢出。

维持数学等价性：在某些数学运算和算法中，取模运算可以保持结果的数学等价性，确保得到与原始数值等价
的结果。

综上所述，对于这么大的质数取模的作用是限制计算结果的范围，避免数值溢出，并保持数学等价性。
这样可以确保计算结果的正确性和合理性。


在这段代码中，pow.push(1); 的目的是将初始值 1 添加到数组 pow 中。

pow 数组用于存储幂次的值，其中每个元素表示 2 的幂次。通过将初始值 1 添加到 pow 数组中，
我们确保第一个元素是 2 的零次幂，即 2^0 = 1。

接下来，const mod = 1e9+7; 用于定义一个常量 mod，它的值为 1e9+7。这里的 1e9 表示
科学计数法中的 10 的九次方，也就是十亿，+7 表示在此基础上加上 7。因此，mod 的值是 1000000007。
 */