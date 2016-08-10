'use strict';

var greet = require('./hello').greet;//引入hello模块
var a = require('./hello').a;
var s = 'Michael';
console.log(a);
greet(s);
