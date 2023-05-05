'use strict';

let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        let isError = false;

        if (!isError) {
            resolve([1, 2, 3, 4, 5]);
        } else {
            reject('Error has happenes');
        }
    }, 3000);
});

setInterval(function() {
    console.log(promise);
}, 1000);