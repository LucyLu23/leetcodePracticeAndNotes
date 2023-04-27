var generate = function (numRows) {
    if(numRows>30 ||numRows<1){
        alert('please make sure numRows between 1 and 30');
        return
    }
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    let tempArr = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      tempArr[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans.push(tempArr);
  }
  return ans;
};
generate(6);
generate(32)
