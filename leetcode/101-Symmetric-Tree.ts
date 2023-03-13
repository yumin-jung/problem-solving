function isSymmetric(root: TreeNode | null): boolean {
    const isSymmetric = (r1: TreeNode | null, r2: TreeNode | null) => {
        if (!r1 || !r2) return r1 === r2;
        if (r1.val !== r2.val) return false;
        return isSymmetric(r1.left, r2.right) && isSymmetric(r1.right, r2.left);
    }
    return isSymmetric(root.left, root.right);
};