'use strict';

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(array1, array2){
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }

  return array1.sort( (a, b) => b - a ).toString() === array2.sort( (a,b) => b - a ).map( c => sqrtElem(c) ).toString();
}

function sqrtElem(elem) {
  return Math.sqrt(elem);
}

console.log(comp(a, b));