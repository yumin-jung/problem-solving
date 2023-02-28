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

const findDuplicateSubtrees = (root: TreeNode | null): Array<TreeNode | null> => {
    const dfs = (node: TreeNode | null, map: Map<string, number>, res: TreeNode[]): number => {
        if (!node) return 0;

        let left = dfs(node.left, map, res);
        let right = dfs(node.right, map, res);
        let cur = left + "*" + node.val + "*" + right;
        let id = map.get(cur) || curId;

        if (id == curId) curId++;

        map.set(cur, id);

        count.set(id, (count.get(id) || 0) + 1);
        if (count.get(id) == 2) res.push(node);
        return id;
    }

    let map = new Map<string, number>();
    let res = [];
    let curId = 1;
    let count = new Map<number, number>();

    dfs(root, map, res);

    return res;
};