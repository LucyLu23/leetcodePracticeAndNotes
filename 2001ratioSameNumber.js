// method 1
var interchangeableRe = function (retangles) {
  let count = 0;
  let set1 = new Set(); //此法只使用只有一种比例的情况，或其他都是不同；没有两种比例有相同的数组元素
  for (let [x, y] of rectangles) {
    let ratio = x / y;
    set1.add(ratio);
  }
  let n = set1.size;
  let len = retangles.length;
  let m = len - n;
  let sum = 0;
  for (let i = 0; i <= m; i++) {
    sum += i;
  }
  return sum; //如果多个不同比例有多个数组元素，此法不适用；
};

//method2
var interchangeableRe2 = function (rectangles) {
  let map = {};
  for (let [x, y] of rectangles) {
    let ratio1 = x / y;
    if (!map[ratio1]) {
      map[ratio1] = 1;
    } else {
      map[ratio1]++;
    }
  }
  let ans = 0;
  for (let i of Object.values(map)) {
    ans = (i * (i - 1)) / 2;
  }
  return ans;
}; //此方法也有缺陷，不行

//method 3
var interchangeableRe3 = function (rectangles) {
  let map = {};
  for (let [x, y] of rectangles) {
    let ratio3 = x / y;
    if (!map[ratio3]) {
      map[ratio3] = 1;
    } else {
      map[ratio3]++;
    }
  }
  let ans = 0;
  let arr1 = Object.values(map);
  let arr2 = arr1.filter((a) => a >= 2);
  for (let value1 of arr2) {
    ans += (value1 * (value1 - 1)) / 2; //把键值对中的值大于2提出来，表明有数组元素的比率是相同的，再统计
  }
  return ans;
};
//method 4

var interchangeableRectangles4 = function (rectangles) {
  let count = 0;
  const map = new Map();
  //let n = rectangles.length;
  for (let [x, y] of rectangles) {
    let ratio = x / y;
    if (map.has(ratio)) {
      map.set(ratio, map.get(ratio) + 1);
      count += map.get(ratio); //object.get(key)得到value值
    } else {
      map.set(ratio, 0); //注意此处只能从0开始
    }
  }
  return count;
};
rectangles4 = [
  [4, 8],
  [3, 6],
  [10, 20],
  [15, 30],
  [1, 3],
  [2, 6],
  [9, 6],
  [6, 99],
];
console.log(interchangeableRectangles4(rectangles4));
