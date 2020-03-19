function Sort() {}

Sort.prototype.bubble = function (arr) {

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j <= i; j++) {
                if (arr[i] < arr[j]) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;

        module.exports = Sort;