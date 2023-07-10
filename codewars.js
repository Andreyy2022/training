'use strict';

let snail = function(array) {
  // enjoy

  let result = [];

  for (let i = 0; i < array.length; i++) {

    if (i === 1) {
      result.push(array[1][array[1].length - 1]);
    }

    for (let j = 0; j < array[i].length; j++) {
      
      if (i === 0) {
        result.push(array[0][j]);
      }
      if (i ===  1) {
        array[2].reverse();
        result.push(array[2][j]);
      }

    }

    if (i === 1) {

      result = result.concat( array[i].slice(0, 2) );

    }

  }

  return result;
}

console.log(snail([[1,2,3], [4,5,6], [7,8,9]]));
