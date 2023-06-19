'use strict';

function findUniq(arr) {
  // do magic
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '' && arr[i + 1] !== '') {
      return arr[i + 1];
    }
  
    if (arr[i] !== arr[i + 1]) {
      return arr[i + 1];
    }

    if (arr[i + 2] > arr.length) {
      return arr[arr.length - 1];
      }
  }
}

console.log(findUniq([ '8', '8', '8', 'undefined', '8', '8', '8', '8' ]));

console.log( typeof(findUniq([ '8', '8', '8', 'undefined', '8', '8', '8', '8' ])) );