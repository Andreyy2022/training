'use strict';

function fun(num) {
    if (num > 0) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(num * num);
            }, 3000);
        }
        );
    } else {
        return Promise.resolve(0);
    }
}

fun(0).then(function(res) {
    console.log(res);
})