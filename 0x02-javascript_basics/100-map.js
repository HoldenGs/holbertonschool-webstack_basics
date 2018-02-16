#!/usr/bin/node

const list = require('./100-data.js').list;

let list2 = list.map(function (x, i) {return x * i});
console.log(list);
console.log(list2);