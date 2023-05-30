var validSudoku =  function(board){
    const row = {};
    const column ={};
    const box = {};
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            const value= board[i][j];
            if(value !==(".")){
                const boxidx = Math.floor(i/3)*3 +Math.floor(j/3);
                if(row[`${i}-${value}`] || column[`${j}-${value}`]|| box[`$[boxidx]-${value}`]){
                    return false;
                };
                row[`${i}-${value}`] = true;
                column[`${j}-${value}`] = true;
                box[`${boxidx}-${value}`]=true;
            }
        }
    };
    return true;
}