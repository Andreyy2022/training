'use strict';

function findUniq(arr) {
  // do magic
  let ARR = arr.join().toUpperCase().split(',');
  console.log(ARR);

  for (let i = 0; i < ARR.length; i++) {

    console.log(arr[i]);
      if (ARR[i] === '' && ARR[i + 1] !== '') {
      return arr[i + 1];
      }
    
    for (let j = 0; j < ARR[i].length; j++) {




      if (!ARR[i + 1].includes(ARR[i][j])) {
        
          if (i != ARR.length - 2)
            if (!ARR[i + 2].includes(ARR[i][j])) {
              return arr[0];
            }
        
        return arr[i + 1];
      }
    }
  }
}

console.log(findUniq([ '', '', '', 'A', '', '' ]));