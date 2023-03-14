function sumNumbers(root: TreeNode | null): number {
    const sumNumbers = (root: TreeNode | null, res: number) => {
        if (root === null) return 0;
        res = res * 10 + root.val;
        if (!root.left && !root.right) return res;
        return sumNumbers(root.left, res) + sumNumbers(root.right, res);
    }
    return sumNumbers(root, 0);
};