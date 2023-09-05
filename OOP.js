class Employee {
	#name;

	constructor(name) {
		this.#name = name;
	}

	getShow() {
		return this.#name;
	}

}

let empl = new Employee('Jhon');

let show = empl.getShow;

show = show.bind(empl);

console.log(show());