'use strict';

function fun(num) {
    if (num > 0) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(num * num);
            }, 3000);
        });
    } else if (num === 0) {
        return Promise.resolve(0);
    } else {
        return Promise.reject('some error');
    }
}

fun(-3).catch(
    function(res) {
        console.log(res);
    }
)