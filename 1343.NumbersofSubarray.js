//方法一：有问题Time Limit Exceeded

var numberSubstring = function (arr, k, threshold) {
  let len = arr.length;
  let sum1 = k * threshold;
  let count = 0;
  for (let i = 0; i < len - k+1; i++) {
    let arr1 = arr.slice(i, i + k );
    let sum2 = arr1.reduce((a, b) => a + b, 0);
    if (sum2 >= sum1) {
      count += 1;
    }
  }
  return count;
};
arr1 = [2, 2, 2, 2, 5, 5, 5, 8];
let result = numberSubstring(arr1, 3, 4);
console.log(result);

//方法二：index =0-2 另外处理
var numberSubstring2 = function (arr, k, threshold) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length ; i++) {
    sum += arr[i];
    if (i - k >= 0) {
      sum -= arr[i - k];
      if (sum / k >= threshold) {
        count++;
      }
    }
    if ((i ===k - 1 && sum / k >= threshold)) {
      count++; //单独处理i=0-2 的情况， 因为前面处理i>=k 的情况，包括0-2，
      // 最前面k个元素之和的情况
    }
  };return count;
};
arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3], k = 3, threshold = 5;
console.log(numberSubstring2(arr,3, 5));

//方法三： 没有另外处理i=k-1 的情况
var numberSubstring3= function (arr3, k3, thres3){
    let count3=0;
    let sum3=0;
    for (let i=0; i<arr3.length; i++){
        sum3 += arr3[i];
        if(i-(k3-1)>=0){
            if(sum3/k3>=thres3){count3++};
            sum3 -= arr3[i-(k3-1)];
        }
    };
    return count3;

};
arr3 = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3], k3= 3, thres3 = 5;
console.log(numberSubstring3(arr3, 3, 5));
