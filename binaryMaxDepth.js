//calculate the MaxDepth
var maxDepth = function(root){
    if(root ===0) {return 0}
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

//two divisions to express binary tree

var levelOrder = function(root){
    let ans=[];
    helper(root, ans, 0)
    return ans;
};

function helper(node, ans, i){
    if (node == null) return
    if (i==ans.length) ans.push([])
    ans[i].push(node.val)

    helper(node.left, ans, i+1)
    helper(node.right, ans, i+1)
}


//possibilities

var coinChange = function(coins, amount){
    let max = amount + 1
    let dp = new Array(amount +1)
    dp.fill(max)
    dp[0]=0;

    for (let i= 1; i<max; i++){
        for (let j=0; j<coins.length; j++){
            if (coins[j] <= i) {
                dp[i]=Math.min(dp[i], dp[i-coins[j]]+1)
            }
        }
    }
    return dp[amount] > amount ? -1: dp[amount]
};

//求出从矩阵左上角走到右下角，且只能向右向下移动， 一共有多少种可能性


