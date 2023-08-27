class EmployeesCollection {
	#employees;

	constructor() {
		this.#employees = [];
	}

	addEmpl(employee) {
		return this.#employees.push(employee);
	}

	showEmpl() {
		for (let employee of this.#employees) {
			console.log(employee.getShowName());
		}
	}

	showAllSalary() {
		let sum = 0;
		for (let employee of this.#employees) {
			sum += employee.getShowSalary();
		}
		return sum;
	}

	showAvrSalary() {
		let sum = 0;
		for (let employee of this.#employees) {
			sum += employee.getShowSalary();
		}
		return sum/this.#employees.length;
	}
}

class Employee {
	#name;
	#salary;

	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}

	getShowName() {
		return this.#name;
	}

	getShowSalary() {
		return this.#salary;
	}
}

let employees = new EmployeesCollection;

employees.addEmpl(new Employee('Jhon', 2000));
employees.addEmpl(new Employee('Michael', 3000));
employees.addEmpl(new Employee('Bob', 4000));
employees.addEmpl(new Employee('Jesica', 5000));

//console.log(employees);

employees.showEmpl();
console.log(employees.showAllSalary());
console.log(employees.showAvrSalary());