class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}

class Employee extends User {
	
}

let empl = new Employee;

empl.setName('Jhon');
empl.setSurn('Smith');

console.log(empl.getName() + ' ' + empl.getSurn());