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
    if (PT.innerHTML > 0 & PT.innerHTML <= 15) {
        alert('time for jumping');
    } 
    if (PT.innerHTML > 15 & PT.innerHTML <= 30) {
        alert('time for wathing TV');
    } 
    if (PT.innerHTML > 30 & PT.innerHTML <= 45) {
        alert('time for reading a book');
    } 
    if (PT.innerHTML > 45 & PT.innerHTML < 0) {
        alert('time for seeping');
    }
});

if (PT.innerHTML != undefined & PT.innerHTML != 0 & PT.innerHTML == 15 || PT.innerHTML == 30 || PT.innerHTML == 45 || PT.innerHTML == 0) {
    alert('time for 5 minute rest');
}

let impMin = document.querySelector('#miutes');
let impSec = document.querySelector('#seconds');
let impEv = document.querySelector('#event');
let btnEv = document.querySelector('#btnEvent');
let PR = document.querySelector('#remind');

btnEv.addEventListener('click', function() {
    if (impMin.value == startMinutes & impSec.value == startSeconds) {
        alert(impEv.value);
    }
});
