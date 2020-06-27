function curry(fn) {
    return function _curried(...args) {
        if (args.length >= fn.length) {
            return func.call(this, ...args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
