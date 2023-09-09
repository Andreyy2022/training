class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }

    get fullName() {
        return `${this.name} ${this.surn}`;
    }

    set fullName(full) {
        [this.name, this.surn] = full.split(' ');
    }
}

let user = new User('John', 'Smith');

console.log(user.name);
console.log(user.surn);
console.log(user.fullName);

user.fullName = 'Michaell Westt';

console.log(user.name);
console.log(user.surn);
console.log(user.fullName);