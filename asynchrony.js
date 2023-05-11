'use strict';

function getSmth(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 3000);
    });
}

async function func() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let elem of arr) {
        sum += await getSmth(elem);
    }

    console.log(sum);
}

func();