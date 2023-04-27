/* var findDisappearedNumbers = function(nums) {
let n=nums.length;
let ans={};
for (let el of nums){
    if(!ans[el]){
        ans[el]=1;
    }
}//重复出现的就不记录在ans,注意ans为对象；anss为数列，对象ans中的键是从1-n
//上面整段代码相对于let ans= new Set(nums);一句Set代码
let anss=[]
for(let i=0; i<n; i++){
    if(!ans[i+1]){
        anss.push(i+1)
    }

}return anss;



} */

findDisappearedNumbers([1, 2, 3, 3, 6, 7, 7, 5, 5]);

var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let ans = new Set(nums);
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (!ans.has(i + 1)) {
      arr.push(i + 1);
    }
  }
  return arr;
};
findDisappearedNumbers([1, 2, 3, 3, 6, 7, 7, 5, 5]);
