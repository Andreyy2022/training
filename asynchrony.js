'use strict';

function getSmth(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        });
    });
}

function func() {
    getSmth(2).then((res1) => {
        getSmth(res1).then((res2) => {
            getSmth(res2).then((res3) => {
                console.log(res3);
            })
        })
    })
}

func();