const sortedListToBST = (head: ListNode | null): TreeNode | null => {
    if (head === null) return null;
    if (head.next === null) return new TreeNode(head.val);

    let slow = head;
    let fast = head;
    let temp = head;

    while (fast && fast.next) {
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    const root = new TreeNode(slow.val);
    const right = slow.next;

    temp.next = null;

    root.left = sortedListToBST(head);
    root.right = sortedListToBST(right);

    return root;
};