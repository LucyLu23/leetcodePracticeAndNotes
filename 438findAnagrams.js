//method one: 对于简单的可以，但是复杂的不行，利用charCodeAt

var findAnagrams = function (s, p) {
  let len = p.length;
  let start = 0,
    end = start + len;
  let arr = [];
  let sum1 = Array.from(p).reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  for (start = 0; start <= s.length - len; start++) {
    let s1 = s.substring(start, end);
    let sum2 = Array.from(s1).reduce(function (arr1, char1) {
      return acc1 + char1.charCodeAt(0);
    }, 0);
    if (sum1 == sum2 && s.split("").includes(Array.from(p))) {
      /*  for (let j = 0; j < p.length; j++) {
      arr.push(p[j].indexOf(s));
    } */
      arr.push(start);
    }
  }

  return arr;
};
(s = "cbaebabacd"), (p = "abc");
console.log(findAnagrams(s, p));
/* 
  hash[p[i]] = (hash[p[i]] ?? 0) + 1;这句代码什么意思？
ChatGPT
这句代码是一个常见的哈希表操作，用于统计字符串 p 中每个字符的出现次数。

让我们逐步解析这行代码：

hash 是一个哈希表对象，用于存储字符和其对应的出现次数。
p[i] 表示字符串 p 中的第 i 个字符。
hash[p[i]] 表示从哈希表 hash 中获取键为 p[i] 的值。
hash[p[i]] ?? 0 意味着如果哈希表中不存在键为 p[i] 的值，就使用默认值 0。
hash[p[i]] = (hash[p[i]] ?? 0) + 1 的含义是将哈希表中键为 p[i] 的值加 1，并将结果存储回哈希表。

*/

//method2 two, 复杂度太厉害，exteeded time limit. 对字符串进行排列
var findAnagrams = function (s, p) {
  let len = p.length;

  let arr = [];
  let string1 = p
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

  for (let start = 0; start <= s.length - len; start++) {
    let end = start + len;
    let s1 = s.substring(start, end);
    let string2 = s1
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

    if (string1 == string2) {
      arr.push(start);
    }
  }

  return arr;
};
(s = "cbaebabacd"), (p = "abc");
console.log(findAnagrams(s, p));

//method 3
/* 
这段代码是用于查找字符串 s 中所有的字母异位词，也就是与字符串 p 中的字母相同但排列顺序不同的子串。
代码使用了滑动窗口和哈希表的思想来解决问题
*/
var findAnagrams = function (s, p) {
  const ans = [];
  const hash = {};
  for (let i = 0; i < p.length; i++) {
    hash[p[i]] = (hash[p[i]] ?? 0) + 1;
  }
  let left = 0;
  let right = 0;
  while (right < s.length) {
    if (hash[s[right]] > 0) {
      hash[s[right]]--;
      if (right - left + 1 === p.length) ans.push(left);
      right++;
    } else {
      if (hash[s[left]] !== undefined) hash[s[left]]++;
      left++;
      if (left > right) right = left;
    }
  }
  return ans;
};
s = "cbaebabacd";
p = "abc";
console.log(findAnagrams(s, p));

//method5
var findAnagrams5 = function (s, p) {
  let res5 = [];
  if (s.length == 0 || s == null) return res5;
  let arr5 = Array(26).fill(0);
  /*   for (let c of Array.from(p)){
    arr5[c - 'a']++;
  }; */
  for (let i = 0; i < p.length; i++) {
    let c = p[i];
    arr5[c.charCodeAt(0) - 97]++;
  }
  let left = 0;
  let right = 0;
  let count = p.length;
  while (right < s.length) {
    if (arr5[s.charAt(right++) - "a"]-- > 0) count--;
    right++;
    if (count == 0) res5.push(left);
    if (right - left == p.length && arr5[s.charAt(left++) - "a"]++ >= 0)
      count++;
    left++;
  }
  return res5;
};
s5 = "cbaebabacd";
p5 = "abc";
console.log(findAnagrams5(s5, p5));

/* 
三者的区别在于大括号 {} 的使用方式以及语句的结构。

else 后面的代码块使用大括号包裹，但是在大括号中只有一个语句。

javascript
Copy code
else {
  if (hash[s[left]] !== undefined) {
    hash[s[left]]++;
  }
  left++;
  if (left > right) {
    right = left;
  }
}
这种写法将多个语句组合在一个代码块中，可以在大括号内部执行多个操作。在这种情况下，
if 语句用于条件判断，如果条件满足，执行大括号内部的代码块。

else 后面的代码块使用大括号包裹，且在大括号中有多个语句。

javascript
Copy code
else {
  if (hash[s[left]] !== undefined) {
    hash[s[left]]++;
    left++;
    if (left > right) {
      right = left;
    }
  }
}
这种写法将多个语句组合在一个代码块中，并且作为一个整体进行条件判断和执行。
如果条件满足，整个代码块内的语句都会被执行。

else 后面的代码块没有使用大括号，只有一个语句。

javascript
Copy code
else {
  if (hash[s[left]] !== undefined) hash[s[left]]++;
  left++;
  if (left > right) right = left;
}
这种写法将单个语句作为 if 语句的执行块。在这种情况下，if 语句仅影响紧随其后的第一个语句。
如果条件满足，只有紧随其后的第一个语句会被执行。

需要根据具体的需求和代码逻辑选择适合的写法，确保代码的可读性和正确性。
大括号的使用可以帮助明确代码块的范围，使代码更易于理解和维护。
是的，这两种写法的用法和作用是相同的。它们都表示在 else 分支中执行一系列语句，
这些语句包括条件判断、递增操作和赋值操作。

在第一种写法中，大括号 {} 用于包裹整个代码块，使其成为一个代码块的集合。这种写法可以提高代码的可读性，
明确表达了这些语句是在 else 分支下的逻辑。每个语句都位于大括号的作用域内。

在第二种写法中，没有使用大括号包裹语句块，只是在 if 语句的执行块内部依次写下这些语句。
这种写法适用于只有单个语句的情况，可以简化代码的书写。但需要注意，如果后续需要在该分支下添加更多的语句，
就必须添加大括号 {} 来创建一个代码块。

总体而言，这两种写法在功能上是等效的，可以根据个人偏好或团队规范选择使用。重要的是保持代码的一致性和可读性。
*/
