'use strict';

let promise = new Promise(function(resolve, reject) {
    window.addEventListener('DOMContentLoaded', function() {
        resolve('DOM loaded');
    });
});

promise.then(function(res) {
    console.log(res);
})