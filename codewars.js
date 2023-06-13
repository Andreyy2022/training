'use strict';

function findMissingLetter(array)
{
  let alphabetUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let alphabetLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let partAlph;

  if (alphabetUp.includes(array[0])) {
    partAlph = alphabetUp.slice( alphabetUp.indexOf(array[0]), alphabetUp.indexOf(array[array.length-1]) + 1 );
  } else {
    partAlph = alphabetLow.slice( alphabetLow.indexOf(array[0]), alphabetLow.indexOf(array[(array.length-1)]) + 1 );
  }
  
  for (let elem of partAlph) {
    if ( !array.includes(elem) ) {

      return elem;  
    }
  }

}

console.log( findMissingLetter(['a','b','c','d','f']) );