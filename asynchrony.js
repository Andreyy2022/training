'use strict';

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let result = [1, 2, 3, 4, 5];
        resolve(result);
    }, 3000);
});

promise.then(function(result) {
    console.log(result);
})