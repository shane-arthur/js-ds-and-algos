export const debounce = (fn, time) => {
    let timeout;
    return function () {
        const funcCall = () => fn.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(funcCall, time);
    }
}