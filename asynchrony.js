'use strict';

function loadImage(path) {
    return new Promise(function(resolve, reject) {
        let image = document.createElement('img');
        image.src = path;

        image.addEventListener('load', function() {
            resolve(image);
        });

        image.addEventListener('error', function() {
            reject(new Error('image " ' + path + ' " error'));
        });
    });
}

loadImage('./tree.png').then(function(image) {
    document.body.appendChild(image);
}).catch(function(error) {
    console.log(error);
})