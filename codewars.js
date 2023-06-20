'use strict';
/*
function findUniq(arr) {
  // do magic
  for (let i = 0; i < arr.length; i++) {

    if (isNaN(arr[i])) {

      if (!isNaN(arr[i + 1])) {
        return arr[i + 1];
      }

    } else {

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
}
*/

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

console.log(findUniq([ NaN, NaN, NaN, 0.7996041476602642, NaN ]));

console.log( typeof(findUniq([ NaN, NaN, NaN, 0.7996041476602642, NaN ])) );