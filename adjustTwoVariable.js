// temporary variable
var a = 4,
  b = 5,
  c = b;
b = a;
a = c;

//plus method

var a = 2,
  b = 23;
c = a + b;
a = c - a;
b = c - b;

//array method
var a = 3,
  b = 5;
var arr = [a, b];
a = arr[1];
b = arr[0];

//object method
var a = 3,
  b = 5;

obj = { a: b, b: a };

a = obj.a;
b = obj.b;

//array operation

var a = 3,
  b = 6;
//  ? b=[a,a=b][0];
a = [b, (b = a)][0];

//按位异或法 ^

var a = 3,
  b = 5;
c = a ^ b;
b = c ^ b;
a = c ^ b; // applying C++ 3-0011, 5-0101

//001+0101=0110; 0101+0110=0011;0110+0011=0101


//evaluation method

var a=2, b=6;
[a,b]=[b,a]