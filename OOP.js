class Month {
    dateVar;
    constructor(monthNum) {
        this.monthNum = monthNum;
        this.dateVar = this.dateVar;
    }

    date() {
        this.dateVar = new Date();
        return this.dateVar.setMonth(this.monthNum);
    }

    showMonthNum() {
        return this.monthNum;
    }

    showMonthName() {
        return this.dateVar.toLocaleString('default', {month: 'long'});
    }

    showLastDate() {
        return new Date( this.dateVar.getFullYear(), this.dateVar.getMonth() + 1, 0 ).getDate();
    }

    showFirstDay() {
        this.dateVar = new Date( this.dateVar.getFullYear(), this.dateVar.getMonth(), 1 );
        return this.dateVar.getDay();
    }
}

let month = new Month(5);
month.date();
console.log(month.dateVar);
console.log(month.showMonthNum());
console.log(month.showMonthName());
console.log(month.showLastDate());
console.log(month.showFirstDay());