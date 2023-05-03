'use strict';

let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject(new Error('oh, my God!'));
    }, 2000);
});

promise.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
})