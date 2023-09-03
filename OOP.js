class User {
	#name;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class Employee extends User {
	setName2(name) {
		if (name.length > 0) {
			this.setName(name);
		}
	}
}

let empl = new Employee;

empl.setName2('Michael');
console.log(empl.getName());