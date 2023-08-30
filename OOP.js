class User {
    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

class Employee extends User {
    setAge(age) {
        if (age > 18 & age < 65) {
            this.age = age;
        } else {
            throw new Error('age does not suit');
        }
    }    
}

let empl = new Employee;
empl.setAge(100);

console.log(empl.getAge());