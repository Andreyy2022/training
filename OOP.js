class Employee {
    constructor (name, salary) {
        this.name = name;
        this.salary = salary;
    }

    show() {
        return `${this.name} - ${this.salary}$`;
    }

    showName() {
        return this.name;
    }

    riseManey() {
        return this.salary + this.salary * 0.1;
    }
}

let eml = new Employee('John', 3000);

console.log(eml.show());
console.log(eml.showName());
console.log(eml.riseManey());