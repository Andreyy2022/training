'use strict';

  let result = [];

let snail = function(array) {
  // enjoy

  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i]; i++) {
      result.push(array[i][j]);
      console.log(result);
    }
  }
}


let array = [[1,2,3], [4,5,6], [7,8,9]];

console.log(snail([[1,2,3], [4,5,6], [7,8,9]]));
console.log(array[2][0]);
console.log(result.push('3'));