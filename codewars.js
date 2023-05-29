'use strict';

function narcissistic(value) {
    let valStr = String(value);

    
    let sum = 0;
    for (let i = 0; i < valStr.length; i++) {
      sum += valStr[i] ** valStr.length;
    }

    if (sum == value) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }

  narcissistic(153);