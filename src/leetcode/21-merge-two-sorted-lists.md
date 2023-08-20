---
title: "21. Merge Two Sorted Lists"
posttitle: "21. Merge Two Sorted Lists"
date: "2023-08-14 10:38:00"
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/merge-two-sorted-lists/

### Problem

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

### Solution

Compare the values of two nodes and append the smaller one to a temporary head. Repeat this process until there are no more nodes left to compare.

After the iteration, one of the lists may still contain some nodes. We can straightforwardly append all of these remaining nodes to our temporary list.

The time complexity of this solution is `O(max(M, N)), M = length of list 1 and N = length of list 2`.

```ts
type NodeType = ListNode | null;

function mergeTwoLists(list1: NodeType, list2: NodeType): NodeType {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      curr.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    curr = curr.next;
  }

  if (list1) curr.next = list1;
  if (list2) curr.next = list2;

  return dummyHead.next;
}
```