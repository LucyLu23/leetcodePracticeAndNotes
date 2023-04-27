var spiralOrder = function (matrix) {
  var n = matrix.length;
  var m = matrix[0].length;
  var i = 0,
    j = 0;
  var arr = [];
  while (i >= 0 && j < m && arr.length <= n * m) {
    arr.push(matrix[i][j++]);
  }
  i++, j--;
  while (i < n && j < m && arr.length <= n * m) {
    arr.push(matrix[i++][j]);
  }
  j--, i--;
  while (i < n && j >= 0 && arr.length <= n * m) {
    //这样y要等于零，要不下一个循环就条件不符合，j=1le a
    arr.push(matrix[i][j--]);
  }
  i--, j++;
  while (i > 0 && j >= 0 && arr.length <= n * m) {
    arr.push(matrix[i--][j]);
  }
  return arr;
};

//the below is 外围二方法
var spiralOrder = function (matrix) {
  var n = matrix.length;
  var m = matrix[0].length;
  var i = 0,
    j = 0;
  var arr = [];
  while (i === 0 && j < m && arr.length <= n * m) {
    arr.push(matrix[i][j++]);
  }
  i++, j--; //少了j--就在这条件不符合了，可能是j=m,所以不符合j===m-1
  while (i < n && j === m - 1 && arr.length <= n * m) {
    arr.push(matrix[i++][j]);
  }
  j--, i--;
  while (i === n - 1 && j >= 0 && arr.length <= n * m) {
    arr.push(matrix[i][j--]);
  }
  i--, j++;
  while (i > 0 && j === 0 && arr.length <= n * m) {
    arr.push(matrix[i--][j]);
  } //尽管在最后一个循环中增加i++，和j++,也只是提取matrix最外层的数据而已；因为在此代码中只有四个独立的循环
  // 并没一个大循环包围着四个小的循环。如果要螺旋的循环一定要五个循环，其中一个大循环包围四个小的循环。
  return arr;
};
var matrix = [
  [1, 2, 3, 11],
  [4, 5, 6, 12],
  [7, 8, 9, 16],
];
let result1 = spiralOrder(matrix);
console.log(result1);
VM477: 23(10)[(1, 2, 3, 11, 12, 16, 9, 8, 7, 4)];

//以上方法都是不符合螺旋提取matrix的数据。
//以下为视频中他人方法
var spiralOrder = function (matrix) {
  var left = 0;
  var top = 0;
  var bottom = matrix.length - 1;
  var right = matrix[0].length - 1;
  var size = matrix.length * matrix[0].length;
  var arr = [];
  while (arr.length <= size) {
    for (let i = left; i <= right && arr.length <= size; i++) {
      arr.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && arr.length <= size; i++) {
      arr.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && arr.length <= size; i--) {
      arr.push(matrix[bottom][i]); //这里i>=left，而非0，copy抄错了。
    }
    bottom--;

    for (let i = bottom; i >= top && arr.length <= size; i--) {
      arr.push(matrix[i][left]);
    }
    left++;
  }
  return arr; //这里就是一个大的外围循环while，内四个for循环，所以变为是螺旋式提取mattrix 数据
}; //还有一个大问题就是在while,if, for 等条件statements 中尽量用变量来表示，因为变量会随代码的赋值而变，比如
// left=0, 在条件内，应为i>=left, 而非i>=0,因为，left初始值为0， 代码运行时，left--或left++ 会变化。

//以下是我自己把外围循环代码修改为螺旋式循环提取matrix全部数据：

var spiralOrder = function (matrix) {
  var bottom = matrix.length;
  var right = matrix[0].length;
  var left = 0,
    top = 0;
  var size = bottom * right;
  var arr = [];

  while (arr.length <= size) {
    while (left < right && top < bottom && arr.length <= n * m) {
      arr.push(matrix[top][left++]);
    }
    left--, top++;
    while (top < bottom && left < right && arr.length <= n * m) {
      arr.push(matrix[top++][left]);
    }
    top--, left--;
    while (top >= top && left > right && arr.length <= n * m) {
      //这样y要等于零，要不下一个循环就条件不符合，j=1了。
      arr.push(matrix[top][left--]);
    }
    top--, left++;
    while (top >= top && left >= 0 && arr.length <= n * m) {
      arr.push(matrix[top--][left]);
    }
    top++, left++;
  }
  return arr; //这样子修改应该还是不行，因为top,buttom, left, right 虽然以变量的形式出现在while循环中，但是
  //top,bottom, left, right 并没有随着代码运行而变化，要把i和left,right, bottom, top 联系起来，并以
  // top--, bottom--, left++,right--, 使得每个循环的起点变化而不同，最终实现螺旋提取matrix的所有数据。
  //，最大的知识点就是，5个循环，起点不同，条件statements少放固定的值。
};
