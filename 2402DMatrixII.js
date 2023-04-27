var MatrixTagert= function(matrix, target){
    let n = matrix.length;
    let m= matrix[0].length;
    let i=n-1;
    let j=0;
    while(i>=0 && j<m){
        if (matrix[i][j]===target){
            return true;
        }else if(matrix[i][j]>target){
            i--;
        }else{
            j++;}
    }return false;

};
var matrix = [[1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

  MatrixTagert(matrix,23);