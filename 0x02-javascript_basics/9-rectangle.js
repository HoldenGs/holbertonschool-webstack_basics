#!/usr/bin/node

function Rectangle (w, h) {
  if (w > 0 && h > 0) {
    this.width = w;
    this.height = h;
  }
  this.print = function () {
  	let str = '';
	for (let i = 0; i < this.width; i++) {
	  str += 'X';
	}
	for (let j = 0; j < this.height; j++) {
	  console.log(str);
	}
  };
}

exports.Rectangle = Rectangle;
