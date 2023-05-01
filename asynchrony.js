'use strict';

let SPT = document.querySelector('#show_time');
let PD = document.querySelector('#show_period');

let startTime = new Date();
let startHour = startTime.getHours();
let startMinutes = startTime.getMinutes();
let startSeconds = startTime.getSeconds();

let diffSec = 60 - startSeconds;
console.log(diffSec);

setTimeout( function min() {
    SPT.innerHTML = new Date().getMinutes();

        setTimeout( function min1() {
            SPT.innerHTML = new Date().getMinutes();
            
            if (SPT.innerHTML == 15 || SPT.innerHTML == 30 || SPT.innerHTML == 45 || SPT.innerHTML == 0) {
                alert('time for 5 minute rest');
            }

            setTimeout( min1, 60*1000);

        }, 60 * 1000 );

}, diffSec * 1000 );

let btnP = document.querySelector('#btnPeriod');

btnP.addEventListener('click', function() {
    if (SPT.textContent > 0 & SPT.textContent <= 15) {
        PD.innerHTML = 'time for jumping';
    } 
    if (SPT.textContent > 15 & SPT.textContent <= 30) {
        PD.innerHTML = 'time for wathing TV';
    } 
    if (SPT.textContent > 30 & SPT.textContent <= 45) {
        PD.innerHTML = 'time for reading a book';
    } 
    if (SPT.textContent > 45 & SPT.textContent <= 59) {
        PD.innerHTML = 'time for seeping';
    }
});

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
