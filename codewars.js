'use strict';

let A = [1,2,2,3,3,3,4,3,3,3,2,2,1];

function findOdd(A) {
  //happy coding!
    
  return checkOdds( checkElems(A) );
}

function checkElems(arr) {
  let objElems = {};
  
  for (let elem of arr) {
    if (objElems[elem] === undefined) {
      objElems[elem] = 1;
    } else {
      objElems[elem]++;
    }
  }
  
  console.log(objElems);
  return objElems;
}

function checkOdds(obj) {
  let result;

  for (let key in obj) {
    if (obj[key] % 2 != 0) {
      result = key;
    }
  }

  return result;
}

console.log(findOdd(A));