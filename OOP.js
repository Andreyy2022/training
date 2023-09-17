class Store {

    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    get(key) {
        console.log( JSON.parse(localStorage.getItem(key)) );
    }

    del(key) {
        localStorage.removeItem(key);
    }
}

let store = new Store;

store.set('key', {a: 1, b: 2, c: 3});
store.get('key');
store.set('key', 445);
store.get('key');
store.del('key');
store.get('key');
