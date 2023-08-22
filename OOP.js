class Employee {
	#name;
	#salary;
	#age;

	constructor(name, salary, age) {
		this.#name = name;
		this.#salary = salary;
		this.#age = age;
	}

	getSalary() {
		return this.#salary + '$';
	}

	getEmpl() {
		return this.#name + ' ' + this.#age + 'years old';
	}
}

let emp = new Employee('Jhon', '5000', '30');

console.log(emp.getEmpl());
console.log(emp.getSalary());
