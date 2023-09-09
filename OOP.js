class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }

    get fullName() {
        return `${this.name} ${this.surn}`;
    }
}

let user = new User('John', 'Smith');

console.log(user.name);
console.log(user.surn);
console.log(user.fullName);