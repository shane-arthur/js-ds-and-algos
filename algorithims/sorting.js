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

function partition(arr, left, right) {
    const pivot = arr[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (pivot > arr[left]) {
            left++;
        }
        while (pivot < arr[right]) {
            right--;
        }

        if (left <= right) {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return left;

}

function quickSortHelper(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);

        if (left < index - 1) {
            quickSortHelper(arr, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(arr, index, right);
        }
    }

    return arr;
}

Sort.prototype.quickSort = function (arr) {
    return quickSortHelper(arr, 0, arr.length - 1);
}

Sort.prototype.countSort = function (arr) {
    const output = [],
        hash = {};

    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        if (hash[currentNum]) {
            hash[currentNum]++;
        } else {
            hash[currentNum] = 1;
        }
    }

    for (const key in hash) {
        const length = hash[key];
        for (let j = 0; j < length; j++) {
            output.push(key);
        }
    }
    return output;

}

module.exports = Sort;