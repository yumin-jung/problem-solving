class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const minDiffInBST = (root: TreeNode | null): number => {
    const arr = [];

    const traverseTree = (root: TreeNode) => {
        if (root === null) return;
        traverseTree(root.left);
        arr.push(root.val);
        traverseTree(root.right);
    }

    traverseTree(root);

    let res = 10 ** 5;

    for (let i = 0; i < arr.length - 1; i++) {
        res = Math.min(res, arr[i + 1] - arr[i]);
    }

    return res;
};