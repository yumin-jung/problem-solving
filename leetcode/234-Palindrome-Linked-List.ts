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

function isPalindrome(head: ListNode | null): boolean {
    if (!head?.next) return true

    let fast = head
    let slow = head
    let prev = null

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        head.next = prev
        prev = head
        head = slow
    }

    if (fast !== null)
        head = head.next

    while (head) {
        if (head.val !== prev.val)
            return false
        head = head.next
        prev = prev.next
    }

    return true
};