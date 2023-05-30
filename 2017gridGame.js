var gridgame = function (grid) {
  let one = grid[0].reduce((a, b) => a + b) - grid[0][0]; //leetcode 中的是a+b
  let two = 0;
  let res = one;
  for (let i = 1; i < grid[0].length; i++) {
    one -= grid[0][i];
    two += grid[1][i - 1];
    res = Math.min(res, Math.max(one, two));
  }
  return res;
};
grid = [
  [1, 3, 6, 2, 5, 3],
  [2, 3, 6, 4, 1, 9],
];
console.log(gridgame(grid));

//method 2

var gridgame2 = function (grid) {
  let one = grid[0].reduce((a, b) => a + b);
  let two = 0;
  let res1 = one;
  for (let j = 0; j < grid[0].length; j++) {
    one -= grid[0][i];
    res1 = Math.min(res, Math.max(one, two));
    two += grid[1][i];
  }
  return res1;
};
grid1 = [
  [1, 3, 6, 2, 5, 3],
  [2, 3, 6, 4, 1, 9],
];
console.log(gridgame(grid1));
