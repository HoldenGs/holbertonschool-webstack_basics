#!/usr/bin/node

let i;
for (i = 0; process.argv[i]; i++) {};
if (i === 3) {
	console.log(process.argv[i - 1]);
} else {
	console.log('No argument');
}
