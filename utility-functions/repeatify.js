String.prototype.repeatify = String.prototype.repeatify || function (count) {
    let ans = this;

    for (let i = 1; i < count; i++) {
        ans = ans.concat(this)
    }

    return ans;

}

console.log('hello'.repeatify(3));