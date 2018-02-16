#!/usr/bin/node

integer = parseInt(process.argv[2]);
if (isNaN(integer)) {
    console.log('Not a number');
} else {
    console.log(integer);
}
