'use strict';

function rgb(r, g, b){
  // complete this function
//  except(r);
//  except(g);
//  except(b);
  return toHEX(r) + toHEX(g) + toHEX(b);
}

function toHEX(num) {
  if (except(num)) {
    return except(num);
  } else {
  console.log(num.toString(16));
  console.log(num.toString(16).toUpperCase());
  return num.toString(16).toUpperCase();
  }
}

function except(num) {
  if (num <= 0) {
    return '00';
  }
  if (num >= 255) {
    return 'FF';
  }
}

console.log( rgb(255, 255, 255) );
console.log( rgb(255, 255, 300) );
console.log( rgb(0,0,0) );
console.log( rgb(148, 0, 211) ); // returns 9400D3
console.log( rgb(12, 42, 3) );