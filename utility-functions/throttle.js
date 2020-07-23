document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('button');
    let i = 0;
    button.onclick = throttle(() => console.log('Clicked : ', ++i), 1000);
});

function throttle(fn, delay) {
    let timer = null;

    return function () {
        if (timer) {
            return;
        }

        timer = setTimeout(() => {

            fn.apply(this, arguments);
            timer = null;

        }, delay);
    }
}