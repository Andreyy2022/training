'use strict';

function getSmth(num) {
    return new Promise((resolve, reject) => {
        if (num < 10) {
        setTimeout(() => {
            resolve(num * num);
        }, 3000);
        } else {
            reject('error !');
        } 
    });
}

async function func() {
    try {
        let res = await getSmth(12);
        console.log(res);
    } catch(err) {
        console.log(err);
    }
}

func();