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

class ZateExt extends Zate {
    
    addYear(years) {
        this.date().setFullYear(years + this.date().getFullYear());
        console.log(years + this.date().getFullYear());
        console.log(this.date());
        return this.date();
//        console.log(years + this.date().getFullYear());
//        return this.date(years + this.date().getFullYear(), this.mm, this.dd);
    }
}

let zateExt = new ZateExt(2023, 5, 20);

console.log(zateExt.date());
console.log(zateExt);
zateExt.addYear(2);
console.log(zateExt.date());