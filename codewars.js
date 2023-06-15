'use strict';

function findUniq(arr) {
  // do magic
  let ARR = arr.join().toUpperCase().split(',');
  console.log(ARR);

  for (let i = 0; i < ARR.length; i++) {
    for (let j = 0; j < ARR[i].length; j++) {

      if (!ARR[i + 1].includes(ARR[i][j])) {
        let index = ARR.indexOf(ARR[i + 1]);
        return arr[index];
      }
    }
  }
}

console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));