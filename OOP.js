let func = (function func() {
    let num = 1;

    return function() {
        console.log(num);
        num++;
        if (num == 6) {
            num = 0;
        }
    }
})();

func();
func();
func();
func();
func();
func();
func();
func();