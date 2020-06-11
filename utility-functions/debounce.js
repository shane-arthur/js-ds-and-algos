const debounce = (fn, time) => {
    let timeout;
    return function () {
        const funcCall = () => fn.apply(this, arguments);
        clearTimeout(timeout);
        if (!timeout) {
            funcCall
        } else {
        timeout = setTimeout(funcCall, time);
        }
    }
}

module.exports = debounce;