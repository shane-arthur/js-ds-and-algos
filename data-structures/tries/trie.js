function Trie() {
    this.children = {};
}

Trie.prototype.insert = function (word) {
    let cur = this;
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (!cur.children[char]) {
            cur.children[char] = new Trie();
        }

        cur = cur.children[char];
    }

    cur.isEnd = true;
}

Trie.prototype.find = function (word) {
    let cur = this;
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (!cur.children[char]) {
            return false;
        }
        cur = cur.children[char];
    }

    return cur;
}

Trie.prototype.search = function (word) {
    const res = this.find(word);
    return !res ? false : res.isEnd === true;
}

Trie.prototype.startsWith = function (word) {
    const res = this.find(word);
    return !res ? false : true;
}