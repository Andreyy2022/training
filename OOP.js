class Employee {
	#name;
	#salary;

	setName(name) {
		this.#name = name;
		return this;
	}

	setSalary(salary) {
		this.#salary = salary;
		return this;
	}

	getName() {
		return this.#name;
	}

	getSalary() {
		return this.#salary;
	}
}

let empl = new Employee;

empl.setName('Michael').setSalary(4500);

console.log(empl.getName());
console.log(empl.getSalary());
