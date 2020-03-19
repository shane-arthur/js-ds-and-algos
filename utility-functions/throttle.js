function throttle(delay, func) {
    let lastCall = 0;

    return function (...arguments) {
        const now = new Date().getTime
        if (now - lastCall > delay) {
            return;
        }
        lastCall = now;
        return func(...arguments);
    }
}