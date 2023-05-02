/* 
多次callback 中分数组变成单个元素数组，从单个的大小排起 */
//方法一：
var sortArray = function(arr){
    return arr.sort((a,b)=>a-b);
}

//方法二：
var sortArray1 = function(nums){//此处是nums ,非arr1
    let stack1=[];
    for (let i=0; i<nums.length; i++){
        let maxN =Math.max(...nums);
        stack1.unshift(maxN);
        nums.splice(nums.indexOf(maxN),1);

    };
    return stack1;//此代码可以验证一些case,但没有通过submit
}

var sortA1 = function (nums) {
  let stack1 = [];
  for (let i = 0; i < nums.length + i; i++) {
    let maxN = Math.max(...nums);
    stack1.unshift(maxN);
    nums.splice(nums.indexOf(maxN), 1);
  }
  return stack1;
};
nums44 = [23, 1, 2, 6, 3, 56, 89, 4, 1, 26, 36];
console.log(sortA1(nums44));
VM360: 10(11)[(1, 1, 2, 3, 4, 6, 23, 26, 36, 56, 89)];

//方法三：这个方法不行，显示runtime error;可能要两个functions
var sortArray2 = function(arr2){
    if(arr2.length<=1||arr2==undefined||arr2==null) return arr2;
    if (arr2.length===2){
        return nums[0]>nums[1]? nums:nums.reverse();
    };
    let len = arr2.length;
    let midd = Math.floor(len/2);
    let leftArr= arr2.slice(0, midd);
    let rightArr=arr2.slice(midd);
    let i=0, j=0, k=0;
    let stack2=[];
    while (leftArr.length && rightArr.length){
        if (leftArr[i]<rightArr[j]){
            stack2[k++]=leftArr[i++];
        }else{
            stack2[k++]=rightArr[j++]
        }
    }
    while(leftArr.length){
        stack2[k++]=leftArr[i++];
    };
    while(rightArr.length){
        stack2[k++]=rightArr[j++]
    };
    return stack2;

}

//function 如果不用表达式形式表达的话，可以先引用再定义，但是如果是表达式的话一定要先定义再引用。

//方法四： 
var sortArray4 = function (arr4) {
    
  if (arr4.length <= 1 || arr4 == undefined || arr4 == null) return arr4;
  if (arr4.length === 2) {
    return arr4[0] > arr4[1] ? arr4: arr4.reverse();
  }
  let len = arr4.length;
  let midd = Math.floor(len / 2);
  let leftArr4= arr4.slice(0, midd);
  let rightArr4 = arr4.slice(midd);
 

  function merge4(leftArr4,rightArr4){
  let i = 0,
    j = 0,
    k = 0;
  let stack4= [];
  while (i<leftArr4.length && j<rightArr4.length) {
    if (leftArr4[i] < rightArr4[j]) {
      stack4[k++] = leftArr4[i++];
    } else {
      stack4[k++] = rightArr4[j++];
    }
  }
  while (leftArr4.length) {
    stack4[k++] = leftArr4[i++];
  }
  while (rightArr4.length) {
    stack4[k++] = rightArr4[j++];
  }
  return stack4;
};
return merge4(leftArr4, rightArr4);//这里没有callback main function
};
nums44 = [23, 1, 2, 6, 3, 56, 89, 4, 1, 26, 36];
console.log(sortArray4(nums44));

//方法五：
var sortA =function(nums){   
    let n=nums.length;
    for (let i=0; i<n-1; i++){
        min=i;
        for (let j=i+1; j<nums.length;j++){
            if (nums[j]<nums[min]){
                min=j;
            }
        };
        let temp=nums[i];
        nums[i]=nums[min];
        nums[min]=temp;

    };
    return nums;
};
nums44 = [23, 1, 2, 6, 3, 56, 89, 4, 1, 26, 36];
console.log(sortA(nums44));









/* !array 表示将 array 转换成布尔类型后取反。具体地，如果 array 为 undefined，null，false，0，空字符串 "" 或空数组 []，那么 !array 的值为 true，否则为 false。因此，如果 array 是空数组
，那么 !array 的值为 false，因为它不属于上述“空”值的任何一种情况。 



*/