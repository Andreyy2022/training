'use strict';

let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('(.)(.)');
    }, 3000);
});

promise.then(
    function(result) {
    console.log(result);
    return result + ' ! ';
}).then(
    function(result) {
    console.log(result);
    return result + ' :) ';
}).then(
    function(result) {
    console.log(result);
    return result + ' !! ';
}).then(
    function(result) {
    console.log(result);
});