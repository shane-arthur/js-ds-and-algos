/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {

    if (!root) return [];

    const levels = [];
    let level = 0;
    dfs(root);

    return levels.map(level => {

        const val = level.reduce((acc, val) => {
            return acc + val;
        }, 0);

        return (val / level.length);

    });

    function dfs(node, level = 0) {
        if (!node) return;

        dfs(node.left, level + 1);

        if (!levels[level]) {
            levels[level] = [];
        }
        levels[level].push(node.val);

        dfs(node.right, level + 1);
    }
};