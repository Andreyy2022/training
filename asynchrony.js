'use strict';

function randoms() {
    return Math.floor(Math.random() * 11);
}

function complex() {
    return new  Promise( resolve => setTimeout( resolve(randoms()), randoms() ) );
}

let promises = [];

for (let i = 1; i <= 10; i++) {
    promises.push(complex());
}

Promise.all(promises).then(
    function(res) {
        console.log(res);
    }
);