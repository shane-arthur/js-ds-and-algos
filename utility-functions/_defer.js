function aa(a) {
    console.log(`first param: ${a}, this.type:  ${this.type}`);
}

type = 'offset'
const bindedFunc = aa.bind(this, 'odd-type');

defer(bindedFunc);

function defer(fn) {
    setTimeout(() => fn.apply(this, [...arguments]), 0);
}