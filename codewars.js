'use strict';

function parseInt(string) {
  // TODO: it's your task now
  let arrStr = string.split(' ').filter(elem => elem !== 'and');
  return arrStr.length === 1 ? simpleNum(arrStr) : complexNum(arrStr);
}

function simpleNum(numStr) {
  return numbersObj[numStr] ? numbersObj[numStr] : numStr.split('-').map(elem => numbersObj[elem]).reduce((sum, elem) => sum + elem, 0);
}

function complexNum(numStr) {
  let result = 0;
  
  for (let i = 0; i < numStr.length;) {
    if ( numStr[i + 1] && ['hundred', 'thousand', 'million'].includes(numStr[i + 1]) ) {

      console.log(result);
      result += simpleNum(numStr[i])
      result *= numbersObj[numStr[i + 1]];
      console.log(result);

      i += 2;
      continue;
    } else {
      result += simpleNum( numStr[i] );
      
    }
    i += 1;
  }
  return result;
}

const numbersObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000
}

console.log( parseInt('two hundred forty-six') ); //246
console.log( parseInt('one') );
console.log( parseInt("seven hundred eighty-three thousand nine hundred and nineteen") ); //  783919