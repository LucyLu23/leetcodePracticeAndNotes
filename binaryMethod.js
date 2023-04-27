function searching (target){
    var start =0 , end=arr.length-1, middle, element;
    while (start <=end){
        middle =Math.floor((start +end)/2);
        element =arr[middle];
        if (element === target){
            return middle;
        }else if (target < element){
            end = middle  - 1;
        }else {
            start = middle +1;
        }
    }return -1;
}