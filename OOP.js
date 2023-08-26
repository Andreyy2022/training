class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}

class Position {
	constructor(name) {
		this.name = name;
	}
}

class Department {
	constructor(name) {
		this.name = name;
	}
}

let posit = new Position('developer');
let depar = new Department('development');

let empl = new Employee('Jhon', posit, depar);

console.log(posit.name);

console.log(empl.name);
console.log(empl);
console.log(empl.position);
console.log(empl.position.name);
console.log(empl.department.name);
