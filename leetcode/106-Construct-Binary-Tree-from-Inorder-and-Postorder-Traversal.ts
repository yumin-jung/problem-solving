function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const ctree = (start: number, end: number) => {
        if (start > end) return null;
        const mid = inorder.indexOf(postorder.pop());
        let root = new TreeNode(inorder[mid]);
        root.right = ctree(mid + 1, end);
        root.left = ctree(start, mid - 1);
        return root;
    }
    return ctree(0, inorder.length - 1);
};