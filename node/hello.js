'use strict';
let s = "Hello";
let a = 1;
function greet(name){
	console.log(s+','+name);
}
//把函数greet作为模块暴露出去，使其他模块可以使用greet函数
module.exports = {
	greet: greet,
	a: a
};
// exports.a = a;
// exports.greet = greet;
