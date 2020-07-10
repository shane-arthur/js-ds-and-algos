var array = [{
        'dir': 'left',
        'code': 97
    },
    {
        'dir': 'right',
        'code': 100
    }
];

const output = _keyBy(arr, (item) => item.code + 500);
console.log(output);

function _keyBy(arr, fn) {
    const output = {};

    for (const item of arr) {
        const key = fn.apply(this, [item]);
        output[key] = item;
    }

    return output;

}