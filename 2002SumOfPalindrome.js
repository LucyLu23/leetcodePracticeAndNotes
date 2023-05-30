//method 1

var maxProduct = function (s) {
  const len = s.length;
  const m = {};
  for (let mask = 1; mask < 1 << len; mask++) {
    let subseq = "";
    for (let i = 0; i < len; i++) {
      if (mask & (1 << i)) {
        subseq += s[i];
      }
    }
    if (subseq == [...subseq].reverse().join("")) {
      m[mask] = subseq.length;
    }
  }
  let ans = 0;
  for (const [m1] of Object.entries(m)) {
    for (const [m2] of Object.entries(m)) {
      if ((+m1 & +m2) == 0) {
        ans = Math.max(ans, m[m1] * m[m2]); // 是*,非+
      }
    }
  }
  return ans;
};
s = "accbcaxxcxx";
console.log(maxProduct(s));

//method2
var maxProduct2 = function (s) {
  function isapalin(a) {
    let temp = [...a];
    let temps = temp.join("");
    let tempsrev = temp.reverse().join("");
    return temps === tempsrev;
  }
  let max = -Infinity;
  function bt(start = 0, ar1 = [], ar2 = []) {
    if (start === s.length) {
      if (isapalin(ar1) && isapalin(ar2)) {
        let m = ar1.length;
        let n = ar2.length;
        max = Math.max(max, m * n);
      }
      return;
    }
    ar1.push(s[start]);
    bt(start + 1, ar1, ar2);
    ar1.pop();

    ar2.push(s[start]);
    bt(start + 1, ar1, ar2);
    ar2.pop();

    bt(start + 1, ar1, ar2);
  }
  bt();
  return max;
};
s2 = "accbcaxxcxx";
console.log(maxProduct2(s2));

//方法三：
const isPalindrome = (s) => {
  let n = s.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (s[i++] != s[j--]) return false;
  }
  return true;
};

const maxProduct3 = (s) => {
  let a = [];
  let n = s.length;
  let N = 2 ** n; //equal to 1<<n
  for (let i = 0; i < N; i++) {
    //mask
    let sub = "";
    let index = new Set();
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        sub += s[j];
        index.add(j);
      }
    }
    if (isPalindrome(sub)) {
      // save all palindrome subsequence with index Set
      a.push([sub, index]);
    }
  }
  let len = a.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isDisjoint(a[i][0], a[j][0], a[i][1], a[j][1])) {
        let leng = a[i][0].length * a[j][0].length; //product
        ans = Math.max(ans, leng);
      }
    }
  }
  return ans;
};
const isDisjoint = (s, t, is, it) => {
  //the index should be different;
  for (const i of is) {
    if (it.has(i)) return false;
  }
  return true;
};
s3 = "accbcaxxcxx";
console.log(maxProduct3(s3));

//method 4
const isPalindrome4 = (string1) => {
  for (let i = 0, j = string1.length - 1; i < j; i++, j--) {
    if (string1[i] !== string1[j]) return false;
  }
  return true;
};
function maxProduct4(s) {
  function cb(letterIndex, word1, word2) {
    if (letterIndex > s.length) {
      return isPalindrome4(word1) && isPalindrome4(word2)
        ? word1.length * word2.length
        : 0;
    }
    const char = s[letterIndex];
    const newIndex = letterIndex + 1;

    return Math.max(
      cb(newIndex, word1, word2),
      cb(newIndex, `${word1}${char}`, word2),
      cb(newIndex, word1, `${word2}${char}`)
    );
  }
  return cb(0, "", "");
}
s4 = "accbcaxxcxx";
console.log(maxProduct4(s4));

//method 5
