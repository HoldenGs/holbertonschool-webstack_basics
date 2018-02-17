#!/usr/bin/node

const dict = require('./101-data.js').dict;

let dict2 = {};
for (let key in dict) {
  if (!dict2[dict[key]]) {
    dict2[dict[key]] = [];
  }
  dict2[dict[key]].push(key);
}
console.log(dict);
console.log(dict2);
