//document: frontend; document object's method;  insert position <script>;
// can be called multiply time; the later one does not cover the first one

/* innerHTML: exist at element object attributes;  at the assigned element;
+= is applied; if be called directly , then the later one will replaced the first one
 */

//typeof; simple- undefined ; Null; Boolean; Number, String;
//complicated - objects;
//typeof: typeof 检测数据类型； 返回-小写字母字符串； 操作数- 简单数据类型， 函数或对象；
//操作数的数量-- 1个；

/* 
instanceof 实例 to check the objects' relationship
检测对象之间的关联性； 返回为布尔值； 左边是引用类型， 右边为函数； 操作数-2个
 */

[1, 2] instanceof Array;

var teacher = { name: "xin", sex: "Male" };
teacher instanceof Object;
new Number(666) instanceof Number;
