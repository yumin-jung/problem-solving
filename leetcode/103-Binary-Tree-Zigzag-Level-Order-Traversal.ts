/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const zigzagLevelOrder = (root: TreeNode | null): number[][] => {

    if (root === null) return [];

    const queue = [root];
    const res = [];
    let toggle = true;

    while (queue.length) {

        const len = queue.length;
        const row = [];

        toggle = !toggle;

        for (let i = 0; i < len; i++) {

            const node = queue.pop();

            toggle ? row.unshift(node.val) : row.push(node.val);

            node.left ? queue.unshift(node.left) : null;
            node.right ? queue.unshift(node.right) : null;
        }

        res.push(row);
    }

    return res;
};