'use strict';

let paths = ['tree.png', 'crocodile.png', 'Warface_sample.jpg'];

function loadImages(paths) {
    let promises;
    return promises = [
        new Promise(function(resolve, reject) {
            let image1 = document.createElement('img');
            image1.src = paths[0];

            image1.addEventListener('load', function() {
                resolve(image1);
            });

            image1.addEventListener('error', function() {
                reject(new Error('error loading "' + paths[0] + '"'));
            });
        }),

        new Promise(function(resolve, reject) {
            let image2 = document.createElement('img');
            image2.src = paths[1];

            image2.addEventListener('load', function() {
                resolve(image2);
            });

            image2.addEventListener('error', function() {
                reject(new Error('error loading "' + paths[1] + '"'));
            });
        }),

        new Promise(function(resolve, reject) {
            let image3 = document.createElement('img');
            image3.src = paths[2];

            image3.addEventListener('load', function() {
                resolve(image3);
            });

            image3.addEventListener('error', function() {
                reject('error loading "' + paths[2] + '"');
            });
        })
    ]
}

loadImages(paths).Promise.all(promises).then(function(res) {
    for (let elem of res) {
        document.body.appendChild(elem);
    }
}).catch(function(err) {
    console.log(err);
});