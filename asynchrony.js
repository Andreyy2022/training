'use strict';

const UL = document.querySelector('#list');
const amountP = document.querySelector('#amount');
const resultP = document.querySelector('#result');

function mess(arr) {
    alert('we got the arr ['+ arr +']' + ' !');
}

function list(arr) {
    for (let elem of arr) {
        let LI = document.createElement('li');
        LI.innerHTML = elem;
        UL.append(LI);
    }
}

function amount(arr) {
    let count = 0;
    for (let elem of arr) {
        ++count;
    }

    amountP.innerHTML = count;
}

function resSum(arr) {
    let res = 0;
    for (let elem of arr) {
        res += elem;
    }

    resultP.innerHTML = res;
}


let subscribers = {
    'mess': [mess],
    'list': [list],
    'amountSum': [amount, resSum]
}

function on(name, callback) {
    if (!subscribers[name]) {
        subscribers[name] = [];
    }

    subscribers[name].push(callback);
}

function emit(name, data) {
    if (subscribers[name]) {
        for (let callback of subscribers[name]) {
            callback(data);
        }
    }
}

function somthing(arr) {
    console.log(arr);
}

on('some', somthing);

setTimeout( function() {
    emit('some', [1, 2, 3, 4])
}, 3000);