/* let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
// ['a', 'b', 'c']
await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']) */



function generatePromise(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(word)
        }, 2000);
    });
}


async function reduceAsync(fn, initialValue = '') {
    let currentIndex = 0;
    let acc = initialValue;

    let i = 0;
    while (currentIndex <= this.length - 1) {
        try {

            const promise = this[currentIndex];
            const data = await promise;
            const data2 = fn.call(this, acc, data, currentIndex + 1);
            acc = data2;

        } catch (err) {
            console.err(err)
        } finally {
            currentIndex++;
        }

    }

    return acc;


}

Array.prototype.reduceAsync = reduceAsync;

const arr = new Array(5).fill(generatePromise('shane '));

const func = (acc, val) => acc + val;

const ans = async () => {
    const data = await arr.reduceAsync(func);
    console.log(data);
};

ans();