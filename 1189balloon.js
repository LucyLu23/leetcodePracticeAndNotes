var ballNumber = function (text) {
  let count = 0;
  let map = {};
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "b":
        map[text[i]]=(map[text[i]]|0) + 1;
        break;
      case "a":
        map[text[i]] = (map[text[i]] | 0) + 1;
        break;
      case "l":
        map[text[i]] = (map[text[i]] | 0) + 1;
        break;
      case "o":
       map[text[i]] = (map[text[i]] | 0) + 1;
       break;
      case "n":
        map[text[i]] = (map[text[i]] | 0) + 1;
        break;

      //case "b":
      //(map["b"] || 0) + 1;
    }
  }
  while (
    (map["b"] >= 1 && map["a"] >= 1) &&
    map["l"] >= 2 &&
    map["o"] >= 2 &&
    map["n"] > 1
  ) {
    count++;
    map["b"]--;
    map["a"]--;
    map["l"] -= 2;
    map["o"] -= 2;
    map["n"]--;
  }
  return count;
};


var balloonN1 =function(text1){
    var arr =new Array(26).fill(0);
    for (let i=0; i<text1.length; i++){
        arr[text1.charCodeAt(i)-97]++;
    }

return Math.min(arr[1],Math.min(arr[0],Math.min(Math.floor(arr[11]/2), Math.min(Math.floor(arr[14]/2),arr[13]))));
}
text1="abceafasfdsgasdooafabbaadalllllononnafaeheneapdgagdabaoooafallafonoonnnoooooooaada";
balloonN1(text1);

//方法三：

var balloonss =function (text2){
    let countMap ={ b:0, a:0, l:0, o:0, n:0};
    for (let i=0; i<text2.length; i++){
        let char = text2[i];
        if(countMap[char] !== undefined){
            countMap[char]++;
        }
    }
    countMap['l']=Math.floor(countMap['l']/2);
    countMap['o']=Math.floor(countMap['o']/2);
    let minCount = Number.MAX_VALUE;
    for (let c in countMap){
        if (countMap[c]<minCount){
            minCount=countMap[c];
        }
    }
    return minCount;
}
var text2 =
  "abceafasfdsgasdooafabbaadalllllononnafaeheneapdgagdabaoooafallafonoonnnoooooooaada";
balloonss(text2);