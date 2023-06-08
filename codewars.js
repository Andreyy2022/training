'use strict';

function count(string) {
  // TODO
  let arrString = string.split('');
  
  return getObjCount(arrString);;
}

function getObjCount(arr) {
  let objCount = {};
  
  for (let elem of arr) {
    if (objCount[elem] === undefined) {
      objCount[elem] = 1;
    } else {
      objCount[elem]++;
    }
  }
  
  return objCount;
}