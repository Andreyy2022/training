'use strict';

let decodeMorse = function(morseCode){
    // Your code here
    // You can use MORSE_CODE[morse]
    
    let resultWords = [];
    
    let arrMorseWords = morseCode.split('   ');
    for (let MorseLetter of arrMorseWords) {
      let arrMorseLetters = MorseLetter.split(' ');
      
      let resultLetters = [];
      for (let i = 0; i < arrMorseLetters.length; i++) {
        if (MORSE_CODE[arrMorseLetters[i]]) {
          resultLetters.push(arrMorseLetters[i]);
          
          if (i == arrMorseLetters.length - 1) {
            resultLetters.push(' ');
          }
        }
      }
      
      resultWords.push(resultLetters);
    }
    
    return resultWords.join(' ');
  }

  decodeMorse('.... . -.--   .--- ..- -.. .');