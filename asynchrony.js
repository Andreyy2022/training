'use strict';

let PT = document.querySelector('#show_time');
let PD = document.querySelector('#show_period');

let startTime = new Date();
let startHour = startTime.getHours();
let startMinutes = startTime.getMinutes();
let startSeconds = startTime.getSeconds();

let diffSec = 60 - startSeconds;
console.log(diffSec);

setTimeout( function min() {
    PT.innerHTML = new Date().getMinutes() + ' minutes for now';

        setInterval( min, 60 * 1000 );

}, diffSec * 1000 );

let btn = document.createElement('button');
btn.innerHTML = 'time period';
PD.append(btn);

btn.addEventListener('click', function() {
    if (PT.innerHTML <= 15) {
        alert('time for jumping');
    } else if (PT.innerHTML <= 30) {
        alert('time for wathing TV');
    } else if (PT.innerHTML <= 45) {
        alert('time for reading a book');
    } else {
        alert('time for rest');
    }
});