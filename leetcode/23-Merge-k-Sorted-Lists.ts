function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let pq = new MinPriorityQueue();
    let list = [];

    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) pq.enqueue(i, lists[i].val);
        list.push(lists[i]);
    }

    let res = new ListNode();
    let temp = res;

    while (!pq.isEmpty()) {
        const { element } = pq.dequeue();
        temp.next = list[element];
        list[element] = list[element].next;
        temp.next.next = null;
        temp = temp.next;
        if (list[element]) pq.enqueue(element, list[element].val);
    }

    res = res.next;

    return res;
};