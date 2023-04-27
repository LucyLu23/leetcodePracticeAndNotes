var minimumDifference = function(nums,k){
    let stack =[];
    let numss=nums.sort((a,b)=>a-b);
    for (let i=0; i<nums.length;i++){
        let numsk=numss.slice(i,i+k);
        for (let j=0; j<k-1; j++){
            let minus= numsk[j+1]-numsk[j];
            if(stack.length===0) {stack.push(minus)}else{
                if(stack[0]>minus){
                    stack.pop();
                    stack.push(minus);
                }

            }

        }
    }return stack[0];
}
nums=[23,1,3,36,66,99,236];
let ans =minimumDifference(nums,3);
let res = minimumDifference(nums, 4);
console.log(ans +'+'+res );