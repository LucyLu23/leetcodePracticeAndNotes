var wordPattern = function (pattern, string) {
  let StringArr = string.split(" ");
  if (pattern.length !== StringArr.length) return false;
  let map1 = new Map();
  let set1 = new Set();
  for (let i = 0; i < pattern.length; i++) {
    //在此代码中为啥一定要先写没有key的情况；
    //而不能先写又key,但是值不同的情况？？？？？？？？？？、
    if (!map1.has(pattern[i])) {
      if (set1.has(StringArr[i])) {
        //在leetcode上写的代码has() 写成了has[sArray[i]]
        return false;
      }
      map1.set(pattern[i], StringArr[i]);
      set1.add(StringArr[i]);
    } else {
      //这里不用写if (map1.get(pattern[i])因为前面set1中已经建成是否在set1中是否有StringArr[i] 的情况
      if (map1.get(pattern[i]) !== StringArr[i]) return false;
    }
  }
  return true;
};
var pattern = "abbacc";
var string1 = "apple bee bee apple cat cat";
console.log(wordPattern(pattern, string1));

var wordPattern = function (pattern, string) {
  let StringArr = string.split(" ");
  if (pattern.length !== StringArr.length) return false;
  let map1 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!map1.has(pattern[i])) {
      // 如果当前字符串已经被其他字符使用过，则返回 false
      if (Array.from(map1.values()).includes(StringArr[i])) return false;
      map1.set(pattern[i], StringArr[i]);
    } else {
      if (map1.get(pattern[i]) !== StringArr[i]) return false;
    }
  }
  return true;
};
var pattern = "abbacc";
var string1 = "apple bee bee apple cat cat";
console.log(wordPattern(pattern, string1));

var wordPattern = function (pattern, string) {
  let StringArr = string.split(" ");
  if (pattern.length !== StringArr.length) return false;
  let map1 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!map1.has(pattern[i])) {
      let flag = false;
      for (let value of map1.values()) {
        if (value === StringArr[i]) {
          flag = true;
          break;
        }
      }
      if (flag) return false;
      map1.set(pattern[i], StringArr[i]);
    } else {
      if (map1.get(pattern[i]) !== StringArr[i]) return false;
    }
  }
  return true;
};
var pattern = "abbacc";
var string1 = "apple bee bee apple cat cat";
console.log(wordPattern(pattern, string1));

var wordPattern = function (pattern, string) {
  let StringArr = string.split(" ");
  if (pattern.length !== StringArr.length) return false;
  let map1 = new Map();
  let set1 = new Set();
  for (let i = 0; i < pattern.length; i++) {
    //在此代码中为啥一定要先写没有key的情况；
    //而不能先写又key,但是值不同的情况？？？？？？？？？？、
    if (map1.has(pattern[i])) {
      //关键是这句一定要写
      if (map1.get(pattern[i]) !== StringArr[i]) {
        return false;
      }
    } else {
      //if (!map1.has(pattern[i])) { 这句可以写可以不写
      if (set1.has(StringArr[i])) {
        //在leetcode上写的代码has() 写成了has[sArray[i]]
        return false;
      }
      map1.set(pattern[i], StringArr[i]);
      set1.add(StringArr[i]);
    }
  }
  return true;
};

var pattern = "abbacc";
var string1 = "apple bee bee apple cat cat";
console.log(wordPattern(pattern, string1));
/* 
if (map1.has(pattern[i])) {
      if (map1.get(pattern[i]) !== StringArr[i]) {
        return false;
      }去掉第一个if (map1.has(pattern[i])) ，把代码变成  if (map1.get(pattern[i]) !== StringArr[i]) {
        return false;
      }会怎么样啊？

假设你已经通过其他代码段将map1与StringArr正确地映射到了一起，那么如果你去掉 if (map1.has(pattern[i])) 这一行，
可能会遇到以下两种情况：

如果 map1 中没有存储 pattern[i] 的映射，那么 map1.get(pattern[i]) 将返回 undefined，这将导致代码 if (map1.get(pattern[i])
 !== StringArr[i]) 永远不会被执行。这意味着你的函数将不会检查 pattern 和 StringArr 中元素的对应关系，直接返回 false，
 这可能会导致函数的错误行为。

如果 map1 中已经存储了 pattern[i] 的映射，但是与 StringArr[i] 不匹配，那么你的函数将返回 false。然而，如果你不使用
 if (map1.has(pattern[i])) 这一行来检查映射是否存在，你将无法确定映射是否存在。这可能会导致函数检查了错误的映射，
 从而导致函数的错误行为。

因此，如果你要移除 if (map1.has(pattern[i])) 这一行，你需要确保在其他代码段中已经正确地将 map1 与 StringArr 映射在一起，
并且你需要考虑在函数中如何处理可能出现的映射错误的情况。

 */
