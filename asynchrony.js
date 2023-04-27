'use strict';

let startTime = new Date();
let startHour = startTime.getHours();
let startMinutes = startTime.getMinutes();
let startSeconds = startTime.getSeconds();

let diffSec = 60 - startSeconds;

let nextMinute = {
    0: ' 0 minutes for now',
    1: ' 1 minutes for now',
    2: ' 2 minutes for now',
    3: ' 3 minutes for now',
    4: ' 4 minutes for now',
    5: ' 5 minutes for now',
    6: ' 6 minutes for now',
    7: ' 7 minutes for now',
    8: ' 8 minutes for now',
    9: ' 9 minutes for now',
    10: ' 10 minutes for now',
    11: ' 11 minutes for now',
    12: ' 12 minutes for now',
    13: ' 13 minutes for now',
    14: ' 14 minutes for now',
    15: ' 15 minutes for now',
    16: ' 16 minutes for now',
    17: ' 17 minutes for now',
    18: ' 18 minutes for now',
    19: ' 19 minutes for now',
    20: ' 20 minutes for now',
    21: ' 21 minutes for now',
    22: ' 22 minutes for now',
    23: ' 23 minutes for now',
    24: ' 24 minutes for now',
}

setTimeout( function() {
    console.log(new Date().getMinutes() + ' minutes for now');

        setTimeout( function() {
            console.log(new Date().getMinutes() + ' minutes for now (.)(.)');
        }, 60 * 1000 );

}, diffSec * 1000 );

