'use strict';

function findUniq(arr) {
  // do magic
  arr.sort((a, b) => b - a);
  console.log(arr);

  if (arr[0] !== arr[1]) {
    return arr[0];
  }
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));