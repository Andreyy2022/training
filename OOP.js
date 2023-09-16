class Month {
    dateVar;
    constructor(monthNum) {
        this.monthNum = monthNum;
        this.dateVar = this.dateVar;
    }

    date() {
        return this.dateVar = new Date();
    }

    showMonthNum() {
        return this.monthNum;
    }

    showMonthName() {
        return this.dateVar.toLocaleString('default', {month: 'long'});
    }
}

let month = new Month(5);
month.date();
console.log(month.dateVar);
console.log(month.showMonthNum());
console.log(month.showMonthName());