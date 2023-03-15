const isCompleteTree = (root: TreeNode | null): boolean => {
    const tree = [root];

    while (tree[0]) {
        const r = tree.shift();
        tree.push(r.left);
        tree.push(r.right);
    }

    while (tree.length > 0 && !tree[0]) tree.shift();
    return tree.length === 0;
};