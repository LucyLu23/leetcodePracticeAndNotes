function longestConseNum(arr1) {
  let num = 0;
  if (!arr1 || arr1.length < 1) {
    return 0;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      let result1 = arr1[i] - arr1[j];
      if ((result1 === 1 || result1 === -1) && arr1[i] !== arr1[j]) {
        num += 1;
        console.log(num);
        return num;
      } else {
        return;
      }
    }
  }
}
console.log(longestConseNum([3, 5, 6, 2, 89, 56, 59, 75, 57]));
