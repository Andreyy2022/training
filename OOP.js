

function func() {
    let num = 4;


        return function() {
            if(num >= 0) {
                console.log(num);
                num--;
            } else {
                console.log('end');
            }
        }
}


let newFun1 = func();
let newFun2 = func();

newFun1();
newFun1();
newFun1();
newFun1();
newFun1();
newFun1();
newFun1();


//newFun2()();