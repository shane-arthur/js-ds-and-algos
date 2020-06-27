/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {

    const map = new Map();

    for (let i = 0; i < S.length; i++) {
        const char = S.charAt(i);
        map.set(char, i);
    }

    return T.split('').sort((item1, item2) => {

        item1 = map.get(item1);
        item2 = map.get(item2);

        if (item1 === undefined) item1 = Infinity;
        if (item2 === undefined) item2 = Infinity;

        return item1 - item2;

    }).join('');

};