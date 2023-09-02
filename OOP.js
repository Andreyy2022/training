class User {
	setName(name) {
		this.name = name;
	}

	#firstLetter(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	getShowFirstL(str) {
		return this.#firstLetter(str);
	}
}

class Employee extends User {
	setSurn(surn) {
		this.surn = surn;
	}
/*
	getShow() {
		return this.#firstLette(this.surn);
	}
*/
}

let empl = new Employee;

empl.setSurn('smith');

console.log(empl.getShowFirstL(empl.surn));
//console.log(empl.getShow());
