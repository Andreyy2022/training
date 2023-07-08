'use strict';

let snail = function(array) {
  // enjoy
  //let result = [toNum(array[0].join(','))];
  let result = [toNum(array[0].join(','))];
  result.push( array[1][array[1].length - 1] );
  result.push( array[2].reverse().join(',') );
  result.push( array[1].slice(0, 2).join(',') );
  ;
/*
  for (let i = 1; i < array.length; i++) {
    result.push(array[1]);

    for (let j = 0; j < array[i].length; j++) {
      
      console.log(result);
    }
  }
*/
  return result;
}

function toNum(str) {
  for (let elem of str) {
    elem = Number(elem);
    console.log(elem);
  }
  return str;
}

function outArr(arr) {

}

//console.log(toNum())
console.log(snail([[1,2,3], [4,5,6], [7,8,9]]));
