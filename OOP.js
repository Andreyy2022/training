function func(...arrs) {
    return [].concat(...arrs);
}

console.log( func([1, 2, 3], [4, 5, 6], [7, 8, 9]) );