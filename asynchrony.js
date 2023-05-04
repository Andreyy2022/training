'use strict';

let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject(new Error('oh, my God!'));
    }, 2000);
});

promise.catch(
    function(error) {
        console.log(error);
    }
)