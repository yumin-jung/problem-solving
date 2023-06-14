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

function getMinimumDifference(root: TreeNode | null): number {
    const queue = [root];
    const list = [];
    let res = Infinity;

    while (queue.length > 0) {
        let node = queue.shift();
        list.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    list.sort((a, b) => a - b);

    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] < res) {
            res = list[i + 1] - list[i];
        }
    }

    return res;
};