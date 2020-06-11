function Emitter() {
    this.events = new Map();
    this.count = 1;
}

Emitter.prototype.subscribe = function (eventName, callback) {
    let callbackIdx = -1;
    if (!!callback && typeof callback === 'function') {
        if (this.events.has(eventName)) {
            this.events.get(eventName).push(callback);
            callbackIdx = this.events.get(eventName).length - 1;
        } else {
            this.events.set(eventName, [callback]);
            callbackIdx = 0;
        }
    }

    return {
        release: () => this.events.get(eventName).splice(callbackIdx, 1),
        name: `sub${this.count++}`
    }
}

Emitter.prototype.emit = function (eventName, ...params) {
    const funcs = this.events.get(eventName);
    funcs.forEach(func => {
        func.call(this, ...params);
    })
}

const emitter = new Emitter();
const sub1 = emitter.subscribe('click', (param) => alert(param));
const sub2 = emitter.subscribe('click', (param) => alert(param));
emitter.emit('click', 'silence');

sub1.release();
emitter.emit('click', 'jeffrey');