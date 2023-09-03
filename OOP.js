class User {
	setName(name) {
		if (this._notEmpty(name)) {
			this.name = name;
		}
	}
	getName() {
		return this.name;
	}
	
	_notEmpty(str) {
		return str.length > 0;
	}
}
class Employee extends User {
	setSurn(surn) {
		if (this._notEmpty(surn)) {
			this.surn = surn;
		}
	}
	getSurn() {
		return this.surn;
	}
}

let empl = new Employee;

empl.setName('Jhon');
empl.setSurn('Smith');

alert(empl.getName() + ' ' + empl.getSurn());