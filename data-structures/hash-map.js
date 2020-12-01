// hashMap with linear probing;
// naive linear probing which could not work the best for certain keys near the end of the hashing algo

function HashMap(size) {
    this.size = size;
    this.values = new Array(this.size).fill(0);
    this.keys = new Array(this.size).fill(0);
    this.currentSize = 0;
}

HashMap.prototype.hash = function (key) {

    if (typeof key !== 'string') {
        key = key.toString();
    }

    let val = 0;
    let total = key.length * 26;

    const num = key.split('').reduce((acc, val) => acc + val.charCodeAt(0) - 97, 0);
    return Math.floor(Math.round(num / total * 100) / 100 * this.size);

}

HashMap.prototype.set = function (key, value) {
    if (this.currentSize >= this.size) {
        throw new Error('Error HashMap size is full');
    }

    let hashedIndex = this.hash(key);

    while (true) {
        if (!this.keys[hashedIndex]) {
            this.keys[hashedIndex] = key;
            this.values[hashedIndex] = value;
            break;
        } else if (!!this.keys[hashedIndex]) {
            if (this.keys[hashedIndex] === key) {
                this.values[hashedIndex] = value;
                break;
            } else {
                hashedIndex++;
            }
        }
    }
}

HashMap.prototype.get = function (key) {
    let hashedIndex = this.hash(key);
    if (!this.keys[hashedIndex]) {
        throw new Error('Error Key not found ~');
    }

    while (this.keys[hashedIndex]) {
        if (this.keys[hashedIndex] === key) {
            return this.values[hashedIndex];
        } else {
            hashedIndex++;
        }
    }
}

const hash = new HashMap(10);
hash.set('shane', 'cool');
hash.set('shane', 'cool1');
hash.set('shane2', 'cool2');
console.log(hash.get('shane'));
console.log(hash.get('shane2'));
console.log(hash.get('shan3e2'));
