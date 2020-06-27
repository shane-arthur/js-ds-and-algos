function indexOf(fn, start = 0) {

    for (; start < this.length; start++) {
        if (fn.call(this, this[start])) return start;
    }

    return -1;

}

Array.prototype.indexOf = indexOf;

const shane = ['shane', '0000', 'fafafa', 'sha1fsjheugue', 'fafaa'];

console.log(shane.indexOf(word => word.includes('sha1')));