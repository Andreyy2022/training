function func(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum / nums.length;
}

console.log(func(3, 4, 5, 8, 1, 5));