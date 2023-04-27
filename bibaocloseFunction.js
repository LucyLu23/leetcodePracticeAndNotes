function books(){
    var book="bookinbackpack";
}
console.log(book);
//global has no book function. 

//scope, function ,global and local function;

function a(){
    b();
    function b(){
        c();
        function c(){
            console.log('Iamhere')
        }
    }
}

a(); 
//a is global function; stack, js deal global and local function;
/* 
create- function local , var, this , function variables, arguments, 
declaration;
implement: evaluation, invoke or call function

 */

function books(){
    var book ="booksinthebackpack";
    return function(){
        console.log(book);
    }
}

var bag=books();
bag();

/* 
global implementation, function connection, global object, variable 
objects, books and bag;

books implementation , function scope, books variable, global variable, book local 

anonymous implementation anonymous variable function; go to the next bigger scope, 
global 

close function: anonymous function then defining the variable outside the anonymous function





 */

for (var i =0; i<5; i++) {
    setTimeout(function (){
        console.log(i++);

    }, 4000);
}

console.log(i); // 5, 5, 6,7,8,9
//setTimeout: window object method- after the misecond then call the function
// setTimeout(codes, misecond)
//setTimeout is outside queue like database, API? , not enqueue
/* 

 */

for (var i=0; i<5; i++){
    (function(x){
        setTimeout(function(){
            console.log(x++);

        }, 4000);
    })(i);
}

console.log(i)// 5, 0,1,2,3,4