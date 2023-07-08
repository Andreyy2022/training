'use strict';

let snail = function(array) {
  // enjoy
  /*
  let result = [array[0].join(',')];
  result.push( array[1][array[1].length - 1] );
  result.push( array[2].reverse().join(',') );
  result.push( array[1].slice(0, 2).join(',') );
  */
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      
      if (i === 0) {
        result.push(array[0][j]);
      }
      if (i === array.length - 1) {
        array[2].reverse();
        result.push(array[2][j]);
      }
//      if (i !== 0 && i < array[array.length - 1] && j < array[i][array.length - 1].length) {
//       result.push( array[array.length - 2][j] );
//      }
    }

    if (i === 1) {
      result.push(array[1][array[1].length - 1]);
    }

  }

  return result;
}

console.log(snail([[1,2,3], [4,5,6], [7,8,9]]));
