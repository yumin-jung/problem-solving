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

function tree2str(root: TreeNode | null): string {
    let res = `${root.val}`;

    const traverse = (node: TreeNode | null) => {
        if (node === null) return;
        if (node.left) res += '(' + tree2str(node.left) + ')';
        if (node.right) {
            if (node.left === null) res += '()';
            res += '(' + tree2str(node.right) + ')';
        }
    }

    traverse(root);

    return res;
};