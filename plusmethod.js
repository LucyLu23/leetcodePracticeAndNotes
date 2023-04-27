/* 
number + number = number, math operation;
any kind of variable + NaN = NaN;
88+ NaN = NaN;
Infinity + -Infinity =NaN;
infinity + infinity = infinity; 
-infinity + -infinity = -infinity;
+0 + +0 =+0;
-0 + -0 = -0;
 +0 + -0 = +0;

 string +string = stringstring, concatenate; string is the boss.
 1+ (2+"3") +4 = "1234"


number+ string = string;
1+2+3+ "4"= "64";
"1" + NaN/Infinity/ -infinity / true/ false/ undefined/ null ==> 
"1Nan"/"1Infinity"/"1-infinity"/ "1true"/"1false"/"1undefined"/ "1null"
string + array: "1"+[]/[123]/[, , ,]+[123,456,789, "aaa"] ==>
"1" / "1123" / "1,," / "1123,456,789,aaa"

string + function/object: "1" + function uu(){var a =1;}; / {}/{a:1}==>
"1function uu(){}var a =1;}"/ "1[object Object]" / "1[object Object]"

right writing: ({}).toString(); ====> [object Object]
wrong writing: {}.toString(); // Uncaught SyntanError: Unexpected token.

number: 

*/
/* 
number +array ===> string:
[]/ [123]/ [123,456,789]/ [, 2,,] +1 ===> "1"/"1231"/"123,456,7891"/ ",2,1";

array + function/object: result is string
[12,12] + function(){var a =0}; ===>  "12,12function(){var a = 0}"
 [] + function(){var a =0}; ===> "function(){var a = 0}"
 [12,12]+{}; ===> "12,12[object Object]"
 [12,12] + {a:1}; ===> "12,12[object Object]"


 array, function, object: plus itself ==== > string

 [1]+[2] ===> "12"
[]+[1,2,3]===> "1,2,3"
({})+({}) ===> "[object Object][object Object]"
({})+({a:1})===> "[object Object][object Object]"
(function a(){var aa=0}) + (function b (){var bb=0})===> "function a(){var aa=0}function b (){var bb=0}"
*/

/* 
[]+{}===> "[object Object]"
{}+[]===> 0  WRONG--"[object Object]"
({}) +[] ===> '[object Object]'
(function a(){var aa = 0}) + {} ===> "function a(){var aa =0}[object Object]"
[1,2] + function a(){var aa=0} ===> "1,2function a(){var aa=0}"
*/
