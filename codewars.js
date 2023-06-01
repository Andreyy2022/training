'use strict';

let MORSE_CODE = { 
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

let decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
  
  let resultWords = [];
  let resultLetters;
  
  let arrMorseWords = morseCode.split('   ');
    
  for (let MorseWord of arrMorseWords) {
    let arrMorseWord = MorseWord.split(' ');
    
    resultLetters = [];
    
    for (let i = 0; i < arrMorseWord.length; i++) {
      if ( MORSE_CODE[arrMorseWord[i]] ) {

        resultLetters.push( MORSE_CODE[arrMorseWord[i]] );
      }

    }

    resultLetters = resultLetters.join('');
    
    resultWords.push(resultLetters);
  }
  
  resultWords = resultWords.join(' ');
  return resultWords.trim();
}
  
console.log( decodeMorse('.... . -.--   .--- ..- -.. .') ); 