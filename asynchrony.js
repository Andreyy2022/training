'use strict';

let promises = [
    new Promise( resolve => setTimeout(() => resolve(1), 1000) ),
    new Promise( resolve => setTimeout(() => resolve(2), 2000) ),
    new Promise( resolve => setTimeout(() => resolve(3), 3000) )
];

Promise.all(promises).then(function(res) {
    console.log(res);
})