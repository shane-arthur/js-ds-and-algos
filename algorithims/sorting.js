function Sort() {}

Sort.prototype.bubble = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

Sort.prototype.selection = function (arr) {
    const length = arr.length;
    let min;

    for (let i = 0; i < length; i++) {
        min = i;

        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }

        if (i !== min) {
            const temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

    }
    return arr;
}

Sort.prototype.insertion = function (arr) {
    const length = arr.length;
    let i, j, value;

    for (i = 0; i < length; i++) {
        value = arr[i];

        for (j = i - 1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }

    return arr;

}

module.exports = Sort;