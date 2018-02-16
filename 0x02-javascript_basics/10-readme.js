#!/usr/bin/node

const fs = require('fs');

let path = '';
if (process.argv[2]) {
  path = process.argv[2];
}
fs.readFile(path, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
