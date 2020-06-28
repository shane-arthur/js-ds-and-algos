function generatePromise(word) {
    let val = Math.random() * 3000;

    if (word.includes('8')) {
        val = 15000;
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(word)
        }, val);
    });
}

// implement Promise.all;

Promise.all = function (promises) {

    const output = [];
    count = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then(ans => {
                output[index] = ans;
                if (++count === promises.length) {
                    resolve(output);
                }
            }).catch(err => {
                reject(err);
            });
        });
    });

}

const promises = new Array(12).fill('shane').map((item, index) => {
    return generatePromise(`${item}${index}`);
});

Promise.all(promises).then(console.log);