var insert = function (intervals, newInterval) {
  let len = intervals.length;
  for (let i = 0; i < len; i++) {
    if (
      (newInterval[0] > intervals[i][0] && newInterval[0] < intervals[i][1]) ||
      (newInterval[0] < intervals[i][0] && newInterval[1] > intervals[i][1]) ||
      (newInterval[1] > intervals[i][0] && newInterval[1] < intervals[i][1])
    ) {
      intervals.splice(i, 1);
    }
  }
  return intervals;
};
intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
newInterval = [4, 8];
console.log(insert(intervals, newInterval));

/* 
  
在JavaScript中，使用 [...array1, ...array2] 的语法可以将两个数组 array1 和 array2 连接成一个新的数组。
其中，... 表示展开运算符，可以将一个可迭代对象（如数组）展开成一个逗号分隔的值序列。

例如，如果 array1 = [1, 2]，array2 = [3, 4]，那么 [...array1, ...array2] 将返回一个新的数组 
[1, 2, 3, 4]，即连接了两个数组。

同样，[newInterval, ...intervals] 和 [...intervals, newInterval] 分别是将数组 intervals
 和 newInterval 连接成一个新的数组，其中 newInterval 在不同的位置。在第一个语法中，
 新数组的第一个元素是 newInterval，在第二个语法中，新数组的最后一个元素是 newInterval。
  
  
  
  */
