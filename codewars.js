'use strict';

function spinWords(string){
  //TODO Have fun :)
  
  let arrString = string.split(' ');
  
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length >= 5) {
      arrString[i] = spin(arrString[i]);
     }
   }
  
  return arrString.join(' ');
}

function spin(word) {
  return word.split('').reverse().join('');
}

console.log( spinWords('Hey fellow warriors') );