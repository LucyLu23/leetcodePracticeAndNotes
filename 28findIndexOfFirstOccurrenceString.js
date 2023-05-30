//method 1:
var strStr = function(haystack, needle){
    return haystack.indexOf(needle);
}//indexOf 返回实际的索引或负1

//method 2

var strStr2 = function(haystack,needle){
    return haystack.indexOf(needle)? haystack.indexOf(needle):-1;
}

//method 3
var strStr3 = function(haystack, needle){
    for (let i=0; i<haystack.length - needle.length; i++){
        let str1='';
        for (let j=i; j<needle.length+i; j++){//不是j=0， i<needle.length
            str1 += haystack[j];
        };
        if (str1 ===needle){
            return i;
        }
    };
    return -1;
};
/* ，但存在一些潜在问题和优化空间：

当 needle 的长度为 0 时，应直接返回 0，而不需要进行循环判断。
可以使用字符串的 substring() 方法来提取子串，而不需要手动拼接字符。
对于大型输入的字符串匹配，可以考虑使用更高效的字符串匹配算法，如KMP算法或Boyer-Moore算法。 */

//method 4
var strStr4 = function (haystack, needle) {
    if(needle.length===0) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let str1 = haystack.substring(i,i+needle.length);
  
    if (str1 === needle) {
      return i;
    }
  }
  return -1;
};let haystack4 = "hello";
let needle4 = "ll";
console.log(strStr4(haystack4, needle4));
h = "abc";
need = "c";console.log(strStr4(h, need));

