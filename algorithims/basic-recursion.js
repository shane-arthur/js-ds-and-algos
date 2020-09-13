// count down to 0;

function countDownToZero(n) {
    if (n === 0) {
        return;
    } else {
        console.log(n);
        countDownToZero(--n);
    }
}

// show the fibonacci sequence, which is the sum of the previous two numbers before itself.

function getNthFibo(n) {
    if (n <= 1) return n;

    let last = 1;
    let lastLast = 0;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        sum = last + lastLast;
        lastLast = last;
        last = sum;
    }
    return sum;
}

// recursive fibo
function getNthFiboRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return getNthFiboRecursive(n - 2) + getNthFiboRecursive(n - 1);
    }
}

// recursive fib using tail recursion
function getNthFiboTailRecursive(n, lastLast = 0, last = 1) {
    if (n === 0) {
        return lastLast;
    }
    if (n === 1) {
        return last;
    }
    return getNthFiboTailRecursive(n - 1, last, lastLast + last);
}

function memoize(fn) {
    const cache = new Map();

    return function () {
        const key = JSON.stringify(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const res = fn.apply(this, arguments);
            cache.set(key, res);
            return res;
        }
    }

}

const memoFib = memoize(function (n) {
    if (n < 2) {
        return n;
    } else {
        return memoFib(n - 1) + memoFib(n - 2);
    }
});


// resursive pascals triangle
function pascalsTriangle(row, col) {
    if (col === 0) {
        return 1;
    } else if (row === 0) {
        return 0;
    } else {
        return pascalsTriangle(row - 1, col) + pascalsTriangle(row - 1, col - 1);
    }
}

// recursive functions master theorem 
// T(n) = aT(n/b) + O(n^c) where a >= 1 && b >= 1;

// convert a decimal (base 10) to a binary number

function convertDecimal(n) {
    let ans = '';
    convertDecimalHelper(n);
    return ans;

    function convertDecimalHelper(n) {
        if (n < 2) {
            ans += n;
        } else {
            convertDecimalHelper(Math.floor(n / 2));
            convertDecimalHelper(n % 2)
        }
    }
}

// determine if string is a palindrome

function isPalindrome(str) {

    return isPalindromeHelper(0, str.length - 1);

    function isPalindromeHelper(i, j) {
        if (i === j) return true;
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        } else {
            return isPalindromeHelper(i + 1, j - 1);
        }
    }
}