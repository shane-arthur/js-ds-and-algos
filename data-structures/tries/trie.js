function Trie() {
    this.children = {};
}

Trie.prototype.addWord = function (word) {
    let current = this;

    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);

        if (!current.children[char]) {
            current.children[char] = new Trie();
        }
        current = current.children[char];
    }

    current.word = word;
}

// allow for a bad word which is denoted by a '.'
// we could change this to allow for one mistyped character
Trie.prototype.getPrefix = function (word) {
    let badCount = -9999;
    return dfs(this);

    function dfs(node, index = 0) {
        if (!node) {
            return false;
        }

        if (word.length === index) {
            return node;
        }

        const char = word.charAt(index);

        if (char === '.') {
            if (++badCount === 2) return false;
            for (const child in node.children) {
                if (!!dfs(node.children[child], index + 1)) return dfs(node.children[child], index + 1);
            }
        } else if (!!node.children[char]) {
            return dfs(node.children[char], index + 1);
        }

        return false;

    }
}

Trie.prototype.getAllWords = function (term) {
    const current = this.getPrefix(term);
    if (!current) return [];

    const output = [];
    dfs(current);
    return output;

    function dfs(node) {
        if (!!node.word) {
            output.push(node.word);
        }

        for (const child in node.children) {
            dfs(node.children[child]);
        }
    }
}

const famousPeople = ['Elton John', 'Ellen Degenerous', 'Elton Brand', 'Eminem'];

const trie = new Trie();

for (const person of famousPeople) {
    trie.addWord(person);
}

const terms = console.log(trie.getAllWords('Elton arand'));