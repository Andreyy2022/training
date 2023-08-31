class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
	
	getName() {
		return this.name;
	}
	getSurn() {
		return this.surn;
	}
}

class Employee extends User {
	constructor(name, surn, age, salary) {
		super(name, surn);
		this.age = age;
		this.salary = salary;
	}

	getAge() {
		return this.age;
	}

	getSalary() {
		return this.salary;
	}
}

let empl = new Employee('Michael', 'Smith', 35, 4000);

console.log(empl.name + ' ' + empl.surn + ', ' + empl.age + ' years old' + ', ' + empl.salary + ' $');
