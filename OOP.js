class Employee {
	#name;
	#salary;
	#age;

	setAge(age) {
		if (age >= 0 && age <= 120) {
			this.#age = age;
		} else {
			throw new Error(' ().() ');
		}
	}

	getAge() {
		return this.#age + ' years old bro';
	}
}

let empl = new Employee;

empl.setAge(130);

console.log(empl.getAge());
