//method one
var isUglyN = function (num) {
  if (num <= 0) return false;
  while (num != 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 3 === 0) {
      num /= 3;
    } else if (num % 5 === 0) {
      num /= 5;
    } else {
      return false;
    }
  }
  return true;
};

//method 2

var isUglyN2 = function (num2) {
  if (num2 <= 0) return false;
  for (let n of [2, 3, 5]) {
    if (num2 % n === 0) {
      return isUglyN2(num2 / n);
    }
  }
  return false;
};
console.log(isUglyN(125));
console.log(isUglyN(36));
console.log(isUglyN(14));
