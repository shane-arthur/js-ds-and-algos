console.dir(assignDeep({
    a: {
        b: {
            c: 1
        }
    }
}, {
    a: {
        b: {
            d: 2
        }
    },
    e: 3
}));

function isObject(obj) {
    return (typeof obj === 'object' && !Array.isArray(obj));
}

function assignDeep(source, target) {


    for (const key in target) {

        if (!isObject(target[key])) {
            source = {
                ...source,
                [key]: target[key]
            }
        } else {
            source[key] = assignDeep(source[key], target[key]);
        }
    }

    return source;

}