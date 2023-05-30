//method 1
var minSwaps = function (s) {
  let stack = [];
  for (let n of s) {
    if (stack && n === "]") stack.pop();
    else if (n === "[") stack.push(n);
  }
  return stack.length / 2;
};

//method 2

var minSwaps1 = function (s) {
  let notMatch = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      count--;
    } else {
      count++;
    }
    if (count < 0) {
      notMatch = Math.min(notMatch, count);
    }
  }
  return Math.ceil(-notMatch / 2);
};

/* 
 if(s[i]==='['){
            count++;
        }else{
            count--;
        }

*/
