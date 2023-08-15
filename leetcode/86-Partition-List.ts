/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
    const lessListNode = new ListNode();
    const greaterListNode = new ListNode();
    let less = lessListNode;
    let greater = greaterListNode;

    while (head) {
        if (head.val < x) {
            less = less.next = head;
        } else {
            greater = greater.next = head;
        }

        head = head.next;
    }

    less.next = greaterListNode.next;
    greater.next = null;
    return lessListNode.next;
} 