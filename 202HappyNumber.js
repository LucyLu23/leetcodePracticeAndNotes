//method one
var happyN =function (n){
    let digit=[];
    let str=n.toString();
    for (let s of str ){
        digit.push(Number(s));
    };
    let m =s.reduce((a,b)=>a+b*b,0)
    if (m===1){
        return true;
    }else if(m===n ||m===4||m===145||m===58){
        return false;
    }
    return happyN(m);

}

//methods 2:

function isHappy(n, sum = 0, n2 = 10){
    if(n === 1) return true;
    if(n2 === 0) return false;
    for(let c of n+'') sum += +c * +c;
    return isHappy(sum, 0, n2 - 1);
};