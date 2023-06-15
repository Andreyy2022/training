'use strict';

function findUniq(arr) {
  // do magic
  arr.sort((a, b) => b - a);
  console.log(arr);

  if (arr[0] !== arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}

console.log(findUniq([
  4, 4, 4, 4,
  4, 4, 4, 3
]));