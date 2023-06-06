'use strict';

function isPrime(num) {
  //TODO
  if (num < 2) {
    return false;
  } else {
    return prime(num);
  }
}

function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}