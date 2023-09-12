class Period {
    constructor(time1, time2) {
        this.time1 = time1;
        this.time2 = time2;
    }

    showSec() {
        return (this.time2 - this.time1) / 1000;
    }

    showMin() {
        return (this.time2 - this.time1) / 1000 / 60;
    }

    showDays() {
        return (this.time2 - this.time1) / 1000 / 60 / 60 / 24;
    }
}

let period = new Period(new Date('2023-06-08'), new Date('2023-07-12'));

console.log(period.showSec());
console.log(period.showMin());
console.log(period.showDays());