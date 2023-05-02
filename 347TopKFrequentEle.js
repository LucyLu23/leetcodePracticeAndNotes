var topKFrequent = function (nums,k){
    let obj ={};
    for (let i=0; i<nums.length; i++){
        if(obj[nums[i]]){// Object.keys(obj).includes(nums[i])
            obj[nums[i]]++;
        }else{
            obj[nums[i]]=1;
        };
    };
    let arrValue = Object.values(obj);
    let ans=[]
    for (let j=1; j<=k; j++){   
    let maxValue1=Math.max(...arrValue);
    arrValue.splice(arrValue.indexOf(maxValue1),1); 
    let key1=Object.keys(obj).find(key=>obj[key]===maxValue1);
    ans.push(key1);
   
    };
    return ans;
};


nums=[2,3,6,9,6,3,2,2,6,6,6,6,6];
console.log(topKFrequent(nums,2))

/* 
不明白两个if 的条件有什么区别？
if (Object.keys(obj).includes(nums[i])) 是判断 obj 中是否存在属性名为 nums[i] 的属性，
如果存在，则执行对应的累加操作 obj[nums[i]]++；否则，创建一个新的属性名，并将其值设置为 1。

if (obj[nums[i]]) 是判断 obj[nums[i]] 的值是否为真，如果是，则执行对应的累加操作 
obj[nums[i]]++；否则，创建一个新的属性名，并将其值设置为 1。

两者的区别在于，前者通过 Object.keys 方法获取所有属性名，再判断 nums[i] 是否在其中，
需要遍历整个对象，效率较低；而后者直接判断属性值的真假，更加高效。

在使用 if (obj[nums[i]]) 时，需要注意属性值可能为 0 或者其他假值，如果不希望将它们当作新的属性名
创建，需要使用更加严格的判断条件，比如 if (obj.hasOwnProperty(nums[i])) 或者 if (nums[i] in obj)。

另外，对于一个空对象，使用 if (obj[nums[i]]) 的判断条件会始终为假，因为该对象中没有任何属性。
因此，在处理空对象时，需要使用 if (obj.hasOwnProperty(nums[i])) 或者 if (nums[i] in obj) 这样的判断条件。

*/

//方法二：

var topKElement2 =function(nums,k){
    let map={};
    let bucket = [];
    let result =[];
    for (let i=0; i<nums.length; i++){
        if(!map[nums[i]]) {
            map[nums[i]]=1;
        }else{
            map[nums[i]]++;
        }
    };
for (let [num, freq] of Object.entries(map)){
    if(!bucket[freq]){
        bucket[freq] = new Set().add(num);
    }else{
        bucket[freq]=bucket[freq].add(num);
    }
};
for (let i=bucket.length-1; i>=0;i--){
    if (bucket[i]) result.push(...bucket[i]);
    if(result.length===k) break;
};
return result;
};

nums = [2, 3, 6, 9, 6, 3, 2, 2, 6, 6, 6, 6, 6];
console.log(topKElement2(nums, 2));

//if(Object.keys(obj).includes(nums[i])); if(obj[nums[i]]);
//if(obj.hasOwnroperty(nums[i])); if(nums[i] in obj)
/* 在使用 if (obj[nums[i]]) 时，需要注意属性值可能为 0 或者其他假值，
如果不希望将它们当作新的属性名创建，需要使用更加严格的判断条件，
比如 if (obj.hasOwnProperty(nums[i])) 或者 if (nums[i] in obj)。
 */

//方法三
const topKFrequent3 = (nums, k) => {
  const map = new Map(); //! map to count the frequency of the number
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  const result = [];
  for (let [key, value] of map) {
    result.push([key, value]); //! we will add the number and its frequency
  }
  result.sort((a, b) => b[1] - a[1]); //! we will solve with respect to the frequency of the number
  return result.slice(0, k).map((x) => x[0]); //! we will slice the list with respect to length of k
};
nums3 = [2, 3, 6, 9, 6, 3, 2, 2, 6, 6, 6, 6, 6];
console.log(topKFrequent3(nums3, 2));

/* 
字面量创建map, object, set, hashtable ,应该不可用set, ?, add, put 
只能map[key]=v, key 为键，v为值，组成键值对。
*/

//方法四：
const topKFrequent = function(nums,k){
    let map = new Map();
    for (let num of nums){
        map.set(num, map.get(num)+1||1)
    };
    let ans=[];
    map.entries
}



