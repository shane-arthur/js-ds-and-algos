let i = 0;

function callback() {
    return `${this.type} : count${++i}`;
}

function _before(n, fn) {
    let res;
    let i = 0;

    return function (...args) {
        if (i < n) {
            res = fn.apply(this, arguments);
            i++;
        }
        return res;
    }
}

const func = _before(5, callback);

document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('button').addEventListener('click', () => {
        console.log(func());
    });

});