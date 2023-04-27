var isPalindrom= function(s){
s=s.toLowerCase();
s=s.replace(/[^a-z0-9]/g,'');
if (s.length<=1) return true;
let len =s.length;
let midd = Math.floor(len/2);
for (let i=0; i<=midd; i++){
    if (s[i]!==s[len-1-i]){
        return false;
    }
}return true;


}
//题目中要求是小写字母和数字，正则表达式应该是/[^a-z0-9]/， 而非/[^a-z]/

var isPalindrom= function(s){
    s=s.replace(/[^a-b0-9]/g,'').toLowerCase();
    ss="";
    for(let i=0;i<s.length;i++){
        ss=s[i]+ss;//若是ss=ss+[i]则是没有reverse
    }if(ss===s) return true;
    
    return false;

};
s='*dadad 00*dadad';
isPalindrom(s);



var isPalindrom = function (s) {
  s = s.replace(/[^a-b0-9]/g, "").toLowerCase();
  ss = "";
  for (let i = s.length-1; i >= 0; i--) {//此处一定要注意大于等于还是小于等于
    ss =ss+ s[i] ; //若是ss=ss+[i]则是没有reverse
  }
  if (ss === s) return true;

  return false;
};
s = "*dadad 00*dadad";
isPalindrom(s);


var isPalindrom = function (s) {
  s = s.replace(/[^a-b0-9]/g, "").toLowerCase();
  let arrs=s.split('').reverse().join(''); //这个比上面都要简单
  if(s===arrs){
    return true
  }return false;
};
s = "*dadad 00*dadad";
isPalindrom(s);
let s1="bacdea*7^09stb";
isPalindrom(s1);