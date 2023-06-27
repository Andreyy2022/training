'use strict';

function rot13(str) {
  let result = [];
  let input  = 'ABCDEFGHIJKLMabcdefghijklm';
  let output = 'NOPQRSTUVWXYZnopqrstuvwxyz';

  let arrStr = str.split('');
  arrStr.map(function(elems) {
    let arrElems = elems.split('');
    arrElems.map(function(elem) {
      
      if (/[A-Za-z]/.test(elem)) {      

        if (input.includes(elem)) {
          let index = input.indexOf(elem);
          result.push(output[index]);
        } else {
          let index = output.indexOf(elem);
          result.push(input[index]);
        }
      
      } else {
        result.push(elem);
      }

      return result;
    });

    return result;
  });

  return result.join('');
}



console.log( rot13('EBG13 rknzcyr.') );   // ROT13 example.
console.log( rot13('This is my first ROT13 excercise!') );   // Guvf vf zl svefg EBG13 rkprepvfr!
