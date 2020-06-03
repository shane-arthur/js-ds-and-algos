// ways to cover steps
// given a distance N, count the total number of ways to cover n number of steps with one, two and three steps

// recursively with 3(n) time complexity
function coverStepsRec(steps) {
    if (steps === 0) return 1;
    if (steps < 0) return 0;

    return (coverStepsRec(steps - 1) + coverStepsRec(steps - 2) + coverStepsRec(steps - 3));
}

// dp version
const cache = {};

function coverStepsDp(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;

    if (cache[n]) {
        return cache[n]
    } else {
        return (cache[n] = coverStepsDp[i - 1] + coverStepsDp[i - 2] + coverStepsDp[i - 3]);
    }
}

// fibo recursive
function getNthFibo(n) {
    if (n < 1) {
        return n;
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}

// dp fibo with cache
const cache = {};

function getNthFiboDp(n) {
    if (n <= 1) {
        return n
    }
    if (cache[n]) return cache[n];
    return (cache[n] = getNthFiboDp(n - 1) + getNthFiboDp(n - 2));
}


// Knapsac problem 
// Given n weights and the values of items, put these items in a knapsack of a given capacity, w, to get 
// the maximum total value in the knapsac

function knapsacNaive(index = weights.length -1, weights, values, target) {
    let result = 0;
    if (index <= -1 || target <= 0) {
        return 0;
    } else if (weights[index] > target) {
        result = knapsacNaive(index - 1, weights, values, target);
    } else {
        // case 1
        const current = knapsacNaive(index - 1, weights, values, target);
        // case 2
        const currentPlusOther = values[index] + knapsacNaive(index - 1, weights, values, target - weights[index]);
        result = Math.max(current, currentPlusOther)
    }
    return result;
}

// dp solution
function knapSacDp(index, weights, values, target, dpMap = new Map()) {
    let result = 0;

    if (index <= -1 || target <= 0) {
        return 0
    }

    const key = `${index}-${target}`;

    if (dpMap.has(key)) {
        return dpMap.get(key);
    } else if (weights[index] > target) {
        return knapSacDp(index - 1, weights, values, target, dpMap)
    } else {
        const current = knapSacDp(index - 1, weights, values, target, dpMap)
        const currentPlusOne = values[index] + knapSacDp(index - 1, weights, values, target - weights[index], dpMap);
        result = Math.max(current, currentPlusOne);
    }

    return result;
}

// longest common subsequence

function longestCommonSubsequenceWrapper(str1, str2) {

    return longestCommonSubSequenceNaive(str1, str2, str1.length, str2.length);

    function longestCommonSubSequenceNaive(str1, str2, l1, l2) {

        if (str.charAt(l1 - 1) === str2.charAt(l2 - 1)) {
            return 1 + longestCommonSubSequenceNaive(str1, str2, l1 - 1, l2 - 1)
        } else {
            return Math.max(longestCommonSubSequenceNaive(str1, str2, l1 - 1, l2), longestCommonSubSequenceNaive(str1, str2, l1, l2 - 1));
        }
    }
}

function longestCommonSubsequenceDp(str1, str2) {

    const matrix = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length).fill(0));

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]);
            }
        }
    }

    return matrix[matrix.length - 1][matrix[0].length - 1];
}

// coin change problem
// given coins of different denominations, write a function to compute the fewest number of coins that you 
// need to make up that amount. If that amount of money cannot be made up by any combination, return -1;

function coinChangeDp(coins, target){
    const arr = new Array(target + 1).fill(Number.MAX_SAFE_INTEGER);
    arr[0] = 0;
    
    for(let i = 0; i <= target; i++){
        for (let j = 0; j <= coins.length; j++){
            if (coins[j] <= i){
                arr[i] = Math.min(arr[i], 1 + dp[i - coins[j]]);
            }   
        }
    }

    return arr[target] > target ? -1 : arr[target];
}
