// arr=[[1,2,3][5,6,8,9,10][11,12],[16]] 利用concat
var connectArr = function (arr) {
  let arr0 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    //不是i<arr.length-1
    arr0 = arr0.concat(arr[i]);
    //arr[i] =arr0;// 这个可有可无
  }
  return arr0;
};
arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
console.log(connectArr(arr));

//两个循环
var connectArr1 = function (arr1) {
  let arr01 = arr1[0];
  for (let i = 1; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      //这里是arr1数组内元素数组的length，
      arr01.push(arr1[i][j]);
    }
  }
  return arr01;
};
arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
console.log(connectArr1(arr));
