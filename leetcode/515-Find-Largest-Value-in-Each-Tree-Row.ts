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

function largestValues(root: TreeNode | null): number[] {
    const largestValuesAux = (root: TreeNode | null, depth: number, res: number[]): number[] => {
        if (!root) return res;
        res[depth] = Math.max(res[depth] ?? -Infinity, root.val);
        largestValuesAux(root.left, depth + 1, res);
        largestValuesAux(root.right, depth + 1, res);
        return res;
    }
    return largestValuesAux(root, 0, []);
};