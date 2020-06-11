function throttle(fn, delay) {

    let lastCall = 0;

    return function () {
        const now = new Date().getTime();
        if (!!lastCall) {
            if (now - lastCall < delay) {
                return
            }
        }
        lastCall = now;
        fn.apply(this, arguments);
    }

}

module.exports = throttle;