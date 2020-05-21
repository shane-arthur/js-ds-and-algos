
// ways to cover steps
// given a distance N, count the total number of ways to cover n number of steps with one, two and three steps

// recursively with 3(n) time complexity
function coverStepsRec(steps){
    if (steps === 0) return 1;
    if (steps < 0) return 0;

    return (coverStepsRec(steps - 1) + coverStepsRec(steps - 2) + coverStepsRec(steps -3));

}

// dp version
function coverStepsDP(step){

    const cache = new Map();

    if (step === 0) return 1;
    if (step < 0) return 0;

    if(cache.has(step)){
        return cache.get(step);
    } else {
        const val = coverStepsDP(step - 1) + coverStepsDP(step - 2) + coverStepsDP(step - 3);
        cache.set(step, val);
        return val;
    }
}
