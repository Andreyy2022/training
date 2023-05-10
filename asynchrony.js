'use strict';

function getSmth(num) {
    if (num > 0) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num * num);
            }, 2000);
        });
    } else {
        return Promise.reject('error !');
    }
}

function func() {
    getSmth(0).then((res) => {
        console.log(res);
    }). catch((err) => {
        console.log(err);
    });
}

func();