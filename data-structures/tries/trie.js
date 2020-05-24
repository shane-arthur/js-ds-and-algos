/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.children = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let cur = this;

    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (!cur.children[char]) {
            cur.children[char] = new WordDictionary();
        }
        cur = cur.children[char];
    }

    cur.isEnd = true;

};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    let cur = this;
    let specialChar = '.';
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (char !== specialChar) {
            if (!cur.children[char]) {
                return false;
            }
            cur = cur.children[char];
        } else {
            if (i + 1 < word.length) {
                let found = false;
                Object.keys(cur.children).forEach(key => {
                    const item = cur.children[key];
                    if (item && item.children[word.charAt(i + 1)]) {
                        cur = cur.children[key];
                        found = true;
                    }
                });
                if (!found) {
                    return false;
                }
            }
        }
    }

    return true;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */