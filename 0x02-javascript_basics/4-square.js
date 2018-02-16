#!/usr/bin/node

const integer = parseInt(process.argv[2]);
if (isNaN(integer)) {
  console.log('Missing size');
} else {
  let str = '';
  for (let i = 0; i < integer; i++) {
    str += 'X';
  }
  for (let j = 0; j < integer; j++) {
    console.log(str);
  }
}
