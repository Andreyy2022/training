class Store {

    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    get(key) {
        console.log( JSON.parse(localStorage.getItem(key)) );
    }
}

let store = new Store;

store.set('key', {a: 1, b: 2, c: 3});
store.get('key');
//let res = store.get('key');
//console.log(store.get('key')); // {a: 1, b: 2, c: 3}
