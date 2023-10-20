let func = (function func() {
    let num = 1;

    return function() {
        console.log(num);
        num++;
    }
})();

func();
func();
func();
func();