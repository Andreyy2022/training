class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this._addSign(this.salary);
	}
	
	_addSign(num) {
		return num + '$';
	}
}

let emp = new Employee('Nick', 6000);

console.log(emp.getSalary());

