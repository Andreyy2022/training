class Store {
    set(key, value) {
        localStorage.setItem(key, value);
    }

    get(key) {
        localStorage.getItem(key)
    }
}

let store = new Store();
store.set('key', {a: 1, b: 2, c: 3});

let res = store.get('key');
console.log(res); // {a: 1, b: 2, c: 3}