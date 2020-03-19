function binarySearch(arr, n) {
    let highIndex = arr.length - 1;
    let lowIndex = 0;

    while (lowIndex <= highIndex) {
        const middleIndex = Math.floor((highIndex + lowIndex) / 2);
        const value = arr[middleIndex];

        if (value === n) return middleIndex;
        else if (value < n) lowIndex = middleIndex + 1
        else highIndex = middleIndex - 1;
    }
    return -1;
}


module.exports = {
    binarySearch
}