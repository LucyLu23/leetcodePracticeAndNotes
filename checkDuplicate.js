var checkD = function (nums){
  var obj={};
  for (let i = 0; i < nums.length; i++) {
    if(obj[i]){
        return true;
    }
    obj[i]=ture;
    
  }
  return false


}
nums=[1,2,3,23,36,66,69];
checkD(nums);