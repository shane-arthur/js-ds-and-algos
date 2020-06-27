function reverse() {

    const output = [];

    for (let i = this.length - 1; i >= 0; i--) {
        output.push(this[i]);
    }

    return output;

}


Array.prototype.reverse = reverse;

const shane = 'shane arthur';

console.log(shane.split('').reverse());