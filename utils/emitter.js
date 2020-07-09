
const uuidGenerator = () => {
    const uuid = '';

    for(let i = 0; i < 48; i++){
        const idx = Math.random() * 100;
        uuid.concat(i % 2 === 0 ? String.fromCharCode(idx): idx);
    }

    return uuid;
}


function Emitter() {
    this.events = new Map();
    this.count = 1;
}

Emitter.prototype.subscribe = function (eventName, callback) {
   
        if (!this.events.has(eventName)){
            this.events.set(eventName, new Map());
        }

        const key = uuidGenerator();
        this.events.get(eventName).set(key, callback);

        return {
            release: () => this.events.get(eventName).delete(key),
            name: `sub${this.count++}`

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

