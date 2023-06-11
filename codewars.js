'use strict';

function isPangram(string){
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  let stringUpper = string.toUpperCase().replaceAll(' ', '');
  console.log(stringUpper);
  console.log(alphabet.includes('A'));

  for (let elem of alphabet) {

    console.log(stringUpper.includes(elem));

    if (!stringUpper.includes(elem)) {
      return false;
    }
  } 
  
  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));