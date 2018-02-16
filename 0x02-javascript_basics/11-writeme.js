#!/usr/bin/node

const fs = require('fs');

let path = '';
if (process.argv[2]) {
  path = process.argv[2];
}
let data = '';
if (process.argv[3]) {
  data = process.argv[3];
}
console.log(data);
fs.writeFile(path, data, 'utf8', function (err) {
  if (err) {
    console.log(err);
  }
});
