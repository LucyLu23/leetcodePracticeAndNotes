/* var subSeq =function(s,t){
    for(let i=0; i<s.length; i++){
        let index1=t.indexOf(s[i]);
        let index2=t.indexOf(s[i+1]);
        if(index1<index2){
            continue;
        }return false;
    }return true;
};
subSeq('abc','leacdbfgc');
subSeq("abc", "leahdbfgc");
subSeq("ach", "leacdbfgc");
subSeq("ace", "laidbfgcke"); 
此代码不能很好处理s.length ==1 or 2 的情况，因为i<s.length, 代码中又s[i+1] 会超出条件中的设定
s.length -1 and s[i+1]; s.length and s[i]
两者的作用是不同的。第一段代码是用来处理当s[i]在t字符串中出现的位置在正确顺序中的位置之后的情况，即s[i]在正确顺序中的位置是当前位置之后，此时函数将更新currentIndex的值为target。如果s[i]在t字符串中出现的位置在正确顺序中的位置之前，那么这个字符就不能构成一个正确的子序列，函数将直接返回false。

而第二段代码缺少了else关键字，因此它的作用是当s[i]在t字符串中出现的位置在正确顺序中的位置之后时，更新currentIndex的值为target。同时，不管s[i]在t字符串中出现的位置是在正确顺序中的位置之前还是之后，函数都将直接返回false。

因此，这两段代码虽然非常相似，但是它们的行为是不同的。第一段代码只有当s[i]在t字符串中出现的位置在正确顺序中的位置之后时，才会更新currentIndex的值，而第二段代码无论s[i]在t字符串中出现的位置在正确顺序中的位置之前还是之后，都会更新currentIndex的值。

*/
/* var subSeq = function (s, t) {
  let currentIndex = -1;
  for (let i = 0; i < s.length; i++) {
    const target = t.indexOf(s[i], currentIndex + 1);
    if (target > currentIndex) {
      currentIndex = target;
    }else{return false}
    
  }
  return true;
};
console.log(subSeq("abc", "leacdbfgc"));
console.log(subSeq("abc", "leahdbfgc"));
console.log(subSeq("ach", "leacdbfgc"));
console.log(subSeq("ace", "laidbfgcke")); */
var subSeq = function (s, t) {
    if (s.length>t.length) return false;
    for(let i=0; i<s.length; i++){
        if(!t.includes(s[i])){
            return false;
        }else{
            t=t.slice(t.indexOf(s[i])+1,)
        }
    }

return true;
}

console.log(subSeq("abc", "leacdbfgc"));
console.log(subSeq("abc", "leahdbfgc"));
console.log(subSeq("ach", "leacdbfgc"));
console.log(subSeq("ace", "laidbfgcke")); 


