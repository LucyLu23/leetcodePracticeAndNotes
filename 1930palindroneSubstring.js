var palindroneSubarray = function (s) {
  res = 0;
  let set1 = new Set(s);
  for (let c of set1) {
    let start = s.indexOf(c);
    let end = s.lastIndexOf(c);
    if (start < end) {
      res += end - start - 1;
    }
  }
  return res;
};
let s = "aabca";
console.log(palindroneSubarray(s)); //此方法没有考虑到在start 和end 之间的字符串元素有相同的情况。

//method2

var countPalindromicSubsequence = function (s) {
  let ans = 0;
  let set1 = new Set(s);
  for (let n of set1) {
    let start = s.indexOf(n);
    let end = s.lastIndexOf(n);
    let s1 = s.slice(start + 1, end);
    let set2 = new Set(s1);
    let m = set2.size;
    if (end > start) {
      ans += m;
    }
  }
  return ans;
};
