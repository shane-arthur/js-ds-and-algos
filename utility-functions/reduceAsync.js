


function generatePromise(val, time){
    return new Promise(resolve => setTimeout(() => resolve(val), time));
}


const arr = new Array(10).fill(generatePromise('word', Math.floor(Math.random() * 4000)));

console.log(arr);