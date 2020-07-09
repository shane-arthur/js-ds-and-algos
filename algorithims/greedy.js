// greedy pseudocode

// function bagItUp(things, bag = []) {
//     if (things is empty) return bag
//     let thingsToPutInBag = ...
//     let restOfThings = ...
//     return bagItUp(
//       restOfThings,
//       bag + thingsToPutInBag
//     )  
//   }

// coin change
// You are given coins of different denominations and a total amount of 
// money. Write a function that returns the smallest set of coins that 
// sums to that amount.\

function coinChange(amount, coins, bag = []) {
    if (amount === 0) return bag;
    const largestCoin = getLargestCoin(amount, coins);
    bag.push(largestCoin);
    return coinChange(amount - largestCoin, coins, bag)

    function getLargestCoin(amount, coins) {
        coins.sort((a, b) => b - a);
        for (let i = 0; i < coins.length; i++) {
            if (sortedCoins[i] <= amount) return sortedCoins[i];
        }
    }
}

// // group by
// // Implement the "groupBy" function which takes an array A and a function F,
// and returns an object composed of keys generated from the results of 
// running each element of A through F. The corresponding value of each key 
// is an array of elements responsible for generating the key.

function groupBy(arr, fn, bag = []) {
    if (arr.length === 0) return bag;

    const matches = arr.filter(item => fn(item) === fn(arr[0]));
    const rest = arr.filter(item => fn(item) !== fn(arr[0]));

    return groupBy(rest, fn, {
        ...bag,
        ...{
            [fn(arr[0])]: matches
        }
    });
}

// classic group anagram problem

function groupAnagrams(words, bag=[]){
    if (words.length === 0) return bag;
    const matches = words.filter(word => isAnagram(word, words[0]));
    const rest = words.filter(word => !isAnagram(word, words[0]));
    bag.push(matches);
    return groupAnagrams(rest, bag);

    function isAnagram(a, b){
        return a.split('').sort().join('') === b.split('').sort().join('');
    }
}