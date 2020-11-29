function decimalToBinary(num) {
    let ans = '';
    while (!!num) {
        if (num % 2 === 0) {
            ans = ans.concat('0');
        } else {
            ans = ans.concat('1');
        }
        num = Math.floor(num / 2);
    }
    return ans;
}

function binaryToDecimal(binaryStr) {
    let ans = 0;
    for (const char of binaryStr) {
        ans = 2 * ans + parseInt(char);
    }
    return ans;
}