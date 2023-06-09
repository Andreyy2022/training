'use strict';

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 362];

function comp(array1, array2){
  //your code here
  for (let elem of array2) {
    if ( checkSqElem( sqrtElem(elem), array1 ) !== true ) {
      return false;
    }
      
  }
  return true;
}

function sqrtElem(elem) {

  console.log(Math.sqrt(elem));
  return Math.sqrt(elem);
}

function checkSqElem(elem, arr) {

  console.log( arr.includes(elem) );
  return arr.includes(elem);
}

console.log(comp(a, b));