'use strict';

function findUniq(arr) {
  // do magic
  let ARR = arr.join().toUpperCase().split(',');
  console.log(ARR);

  for (let i = 0; i < ARR.length; i++) {

      if (ARR[i] === '' && ARR[i + 1] !== '') {
      return arr[i + 1];
      }
    
      if (ARR[i] != ARR[i + 1]) {

        if (ARR[i + 2] === undefined) {
          return arr[arr.length - 1];
        }

        if (!ARR[i + 2].includes(ARR[i])) {
          return arr[0];
        }

        return arr[i + 1];
      }
  }
}

console.log(findUniq([ '8', '8', '8', '8', '8', '8', '8', '7' ]));