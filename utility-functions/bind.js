function bind(context, ...args) {

    return function (...nextArgs) {
        this.apply(context, [...nextArgs, ...args])
    }
}

function dummy(firstName, lastName) {
    alert(`${firstName} ${lastName} is a ${this.desc}`);
}

const func = dummy.bind({
    desc: 'king'
}, 'Shane');

func('Arthur');