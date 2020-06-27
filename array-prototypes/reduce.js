function reduce(fn, initialValue = null) {

    let currentIndex;
    let acc = initialValue;

    for (currentIndex = 0; currentIndex < this.length; currentIndex++) {
        const val = this[currentIndex];
        acc = fn.call(this, acc, val, currentIndex);
    }

    return acc;

}


Array.prototype.reduce = reduce;

const shane = [1, 2, 3, 4, 5];

const val = shane.reduce(((acc, val, currentIndex) => acc + val + 1), 10);