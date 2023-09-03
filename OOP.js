class User {
	constructor(name, cities) {
		this.name = name;
		this.cities = cities;
	}
	
	showCities() {
		this.cities.forEach(city => {
			console.log(this.#cape(city));
		});
	}
	
	#cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

let user = new User('Nick', ['york', 'chebocsary', 'milan']);

console.log(user.showCities());