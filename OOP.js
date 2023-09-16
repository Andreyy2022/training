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
        return this.date().setFullYear(years + this.date().getFullYear());
    }

    date1(newYears) {
        return new Date(newYears / 1000 / 60 / 60 / 24 / 365 + 1970, this.mm, this.dd);
    }
}

let zateExt = new ZateExt(2023, 5, 20);

console.log(zateExt.date());
console.log(zateExt);
console.log(zateExt.date1(zateExt.addYear(2)));

let exmp = new Date();
exmp.setFullYear(3 + exmp.getFullYear());
console.log(exmp);