'use strict';

function findUniq(arr) {
  // do magic
  for (let i  = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      return arr[i+1];
    }
  }
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));