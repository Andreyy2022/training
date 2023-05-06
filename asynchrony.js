'use strict';

let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject('error!');
    }, 3000);
});

promise.then(
    function(result) {
        console.log(result);
        return result +'1';
    }
).then(
    function(result) {
        console.log(result);
        return result + '2';
    }
).then(
    function(result) {
        if (ok) {
            return result + '3';
        } else {
            throw new Error('again error');
        }
    }
).then(
    function(result) {
        console.log(result);
        return result + '4';
    }
). catch(
    function(error) {
        console.log(error);
    }
)