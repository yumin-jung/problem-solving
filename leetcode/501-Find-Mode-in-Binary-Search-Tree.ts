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

function findMode(root: TreeNode | null): number[] {
    const cntMap = new Map<number, number>();

    const inorder = (root: TreeNode | null) => {
        if (root === null) return;
        inorder(root.left);
        cntMap.set(root.val, cntMap.get(root.val) !== undefined ? cntMap.get(root.val) + 1 : 1);
        inorder(root.right);
    }

    inorder(root);

    const cntArr = Array.from(cntMap);
    cntArr.sort((a, b) => b[1] - a[1]);

    const max = cntArr[0][1];
    const res = cntArr.filter((e) => e[1] === max);

    return res.map((e) => e[0]);
};