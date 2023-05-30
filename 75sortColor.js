var sortColor = function(nums){
    let ans =[];
    let map = new Map([['red',0],['white',1],['blue',2]]);
    for (let i=0; i<nums.length; i++){
        if (nums[i]===map.get['red']){
            ans.unshift(nums[i])
        }else if(nums[i]===map.get['blue']){
            ans.push(nums[i]);
        }else{
            let idx=ans.lastIndexOf(map.get('white'));
            ans.splice(idx+1, 0, nums[i])
        }
    };
    return ans;
}

/* 
let map = new Map([['red', 0], ['white', 1], ['blue', 2]]); console.log(map);
VM957:1 Map(3) {'red' => 0, 'white' => 1, 'blue' => 2}
undefined
let map1 = new Map(); map1.set([['red', 0], ['white', 1], ['blue', 2]]); console.log(map1);
VM1024:1 Map(1) {Array(3) => undefined}[[Entries]]0: {Array(3) => undefined}size: 1[[Prototype]]: Map
undefined
let map2 = new Map(); map2.set([['red', 0], ['white', 1], ['blue', 2]],12); console.log(map2);
VM1080:1 Map(1) {Array(3) => 12}[[Entries]]0: {Array(3) => 12}key: (3) [Array(2), Array(2), Array(2)]value: 12size: 1[[Prototype]]: Map
undefined
let map3 = new Map(); map3.set(['red', 0], ['white', 1], ['blue', 2]); console.log(map3);

方法一：map.set（）只能一次添加一个键值对；
方法二：再let map = new Map():  let map = new Map([['red',0],['white',1],['blue',2]]);



*/

// method 2
var sortcolor =function(nums){
    let left =0;
    let current =0;
    let right = nums.length -1;
    while (current <= right){
        if (nums[current]===0){
            swap(nums, left, current);
            left++;
            current ++;
        }else if (nums[current]===2){
            swap(nums, current, right);
            right--;
        }else {
            current ++;
        }
    }
};

let swap = function (nums, left, current ){
    let temp =nums[left];
    nums[left]=nums[current];
    nums[current]=temp;
}

//method 3
var sortcolor3 =function(nums){
    let p0=0;
    let current =0;
    let right = nums.length-1;
    let temp
    for (let i=0; i<nums.length; i++){
        if(nums[current]===0){
            temp = nums[p0];
            nums[p0++]=nums[current];
            nums[current++]=temp;
        }else if(nums[current]===2){
            temp=nums[current];
            nums[current]=nums[right];
            nums[right--]=temp;

        }else { current++;}
    }
}

//method 4
var sortcolor4 = function (nums){
    let i=0;
    let j=nums.length-1;
    let k=0;
    while (k<=j){
        switch (nums[k]){
            case 0: 
                if(k>i){
                    [nums[k],nums[i]] = [nums[i], nums[k]];
                }else{
                    k++;
                };
                i++;
                break;
            case 2:
                if(k<j){
                    [nums[k], nums[j]]=[nums[j], nums[k]];
                }else{
                    k++;
                };
                j--;
                break;
            case 1:
                k++;
                break;               

        }

    };return nums;
};
nums = [2, 0, 2, 1, 1, 0];
console.log(sortcolor4(nums));