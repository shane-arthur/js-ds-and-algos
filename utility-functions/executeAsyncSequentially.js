function generatePromise(word) {

    const val = Math.random() * 3000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(word)
        }, val);
    });
}


const arr = new Array(13).fill('shane').map((val, index) => {
    return generatePromise(`${val}${index}`);
});


async function executeInParallel(arr) {

    let currentIndex = 0;
    const output = [];
    while (currentIndex <= arr.length - 1) {
        try {

            const prm = arr[currentIndex];
            const data = await prm;
            output.push(data);

        } catch (err) {
            console.err(err)
        } finally {
            currentIndex++;
        }

    }

    return output;
}


const ans = async () => {
    const data = await executeInParallel(arr);
    console.log(data);
};

ans();