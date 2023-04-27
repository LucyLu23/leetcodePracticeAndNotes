/* var groupAnagrams = function(strs){
    let Arr =[];
    for (let i=0; i<strs.length; i++){
        let j=0;
        let arr=[];
        if(!strs[i].includes(strs[j])&&j<strs.length &&strs[i].length==strs[j].length){
            j++;
        }else{arr.push(strs[i])}
    }Arr.push(arr);
    return Arr;

    //问题多：arr不在外循环中引用； j=0 he j++ 缺少了while; 应j=i+1， 而非j=0
} */

/* var groupAnagrams = function (strs) {
  let Arr = [];
  for (let i = 0; i < strs.length; i++) {
    let j = i+1;
    let arr = [];
    while(  j < strs.length ){
    if (
      !strs[i].includes(strs[j]) &&
      strs[i].length == strs[j].length
    ) {
      j++;
    } else {
      arr.push(strs[i]);
      Arr.push(arr);
    }
}
  }
  
  return Arr;

  
};
 */
/* var groupAnagrams = function (strs) {
  let map = {};
  for (let n of strs) {
    const sorted = n.split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [n]; //set the value as the array
    } else {
      map[sorted].push(n);
    }
  }
  return Object.values(map);
};
strs = ["ate", "ant", "eat", "at", "ta"];
groupAnagrams(strs); */

var groupAnagrams = function (strs) {
  let Arr = [];
  for (let i = 0; i < strs.length; i++) {
    let arr = [];
    for (let j = i + 1; j < strs.length; j++) {
      if (
        (strs[i].length === strs[j].length) &
        (strs[i].split("").sort().join("") ===
          strs[j].split("").sort().join(""))
      ) {
        arr.push(strs[j]);
        strs.splice(i, 1);
        j--;
      }
    }
    arr.push(strs[i]);
    Arr.push(arr);
  }
  return Arr;
};
strs = ["ate", "ant", "eat", "at", "ta"];
groupAnagrams(strs);
