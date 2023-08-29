class User {
    constructor(name) {
        this.name = name;
    }

    show() {
        return this.name;
    }
}

class Employee extends User {

}

let empl = new Employee('Jhon');

console.log(empl.show());
console.dir(empl.show());