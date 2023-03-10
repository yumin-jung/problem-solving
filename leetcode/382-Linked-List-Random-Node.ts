class Solution {
    head: ListNode | null;

    constructor(head: ListNode | null) {
        this.head = head;
    }

    getRandom(): number {
        let cur = this.head;
        let divisor = 1;
        let res: ListNode | null;

        while (cur) {
            if (Math.random() < (1 / divisor)) res = cur;
            divisor++;
            cur = cur.next;
        }

        return res.val;
    }
}