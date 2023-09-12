class Zate {
    constructor(yyyy, mm, dd) {
        this.yyyy = yyyy;
        this.mm = mm;
        this.dd = dd;
    }

    date() {
        return new Date(this.yyyy, this.mm, this.dd);
    }

    dateY() {
        return this.date().getFullYear();
    }

    dateMNum() {
        return this.date().getMonth();
    }

    dateDayName() {
        let arrMonth = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

        return arrMonth[this.date().getDay()];
    }

}

let zate = new Zate(2023, 8, 12);

console.log(zate.date());
console.log(zate.dateY());
console.log(zate.dateMNum());
console.log(zate.dateDayName());