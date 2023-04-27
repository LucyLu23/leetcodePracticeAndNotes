var validPalindrome = function(s){
    if(s.length<=2) return true;
    for (let i=0; i<s.length; i++){
        let arr=s.split('');
        let sDe= arr.splice(i,1);
        let sRe=arr.join('');
        if(sRe.split('').reverse().join('')===sRe){
            return true;
        }
    }return false
}
s='abcdef';
console.log(validPalindrome(s));
