//  const arr = [1, [2, [3], 4, [1, [2, [3], 4],
//          [1, [1, 1, [1, [22]]]]
//      ]],
//      [5]
//  ];

function flattenRecursively(arr, output = []) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (Array.isArray(item)) {
            output.push(item);
        } else {
            flattenRecursively(item, output)
        }

    }

    return output;
}

function flattenIteratively(arr) {

    const output = [];
    const stack = arr.slice(0);

    while (!!stack.length) {
        const item = stack.shift();
        if (Array.isArray(item)) {
            stack.unshift.apply(stack, item);
        } else {
            output.push(item);
        }
    }

    return output;
}

const arr = [1, 2, [3, 4, {
    shane: 'cool',
    arthur: 'fat',
    shane: [1, 2, 3, [11, 101, {
        shane: 'in-shape'
    }]]
}]];


function flattenWObjects(arr, output = []) {
    for (const key in arr) {
        const item = arr[key];
        if (typeof item === 'object') {
            flattenWObjects(item, output);
        } else {
            output.push(item);
        }
    }

    return output;

}