function Warning(message) {
    this.message = message;
}

function hash(string) {
    return string
        .split('')
        .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

function HashMap(size) {
    this.size = size;
    this.values = new Array(size).fill(null);
    this.keys = new Array(size).fill(null);
    this.count = 0;
}

HashMap.prototype.set = function (key, value) {
    if (this.count < this.size) {
        const hashKey = hash(key);
        this.keys[hashKey] = hashKey;
        this.values[hashKey] = value;
        this.count++;
    }
}

HashMap.prototype.get = function (key) {
    const k = hash(key);
    const hashKey = this.keys[k];
    return this.values[hashKey];
}


let map = new HashMap(0);
map.set('abc', 123) // undefined

try {
    map.set('abb', 1111);
} catch (err) {
    console.log(err);
}
