class User {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	
	get name() {
		return this.#name;
	}

    set name(value) {
        if (value.length >= 4) {
            this.#name = value;
        } else {
            throw new Error('the word is too short');
        }
    }
}
//Проверим работу. Создадим объект нашего класса, передав ему параметром значение имени:

let user = new User('john');
//А теперь прочитаем имя через публичное свойство:


console.log(user.name);
//А вот попытка записать имя приведет к ошибке, как мы и добивались:

user.name = 'eric';
console.log(user.name);

user.name = 'h';
console.log(user.name);
