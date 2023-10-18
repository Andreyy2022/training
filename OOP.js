function func() {
    let num = 10;

    return function() {
        console.log(num);
        num--;
    }
}

func();
func();
func();

func()();

let newFun1 = func();
let newFun2 = func();

newFun1();
newFun1();

newFun2();