class Employee {
    name;
	get name() {
		return this.name;
	}
	set name(value) {
		this.name = value;
	}
}

let empl = new Employee;

empl.name = 'John';

console.log(empl.name);