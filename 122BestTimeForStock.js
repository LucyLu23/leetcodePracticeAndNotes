var bestTimeForStock =  function(prices){
    let sum =0;
    for (let i=0; i<prices.length; i++){
        let current = prices[i];
        let previous = prices[i-1];
        if(current>previous){
            let profit = current -previous;
            sum += profit;
        }
    };
    return sum;
}