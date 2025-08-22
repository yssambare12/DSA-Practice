// Code

// Testcase
// Testcase
// Test Result
// 24. Swap Nodes in Pairs
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

function swapPairs(head) {
  if (!head || !head.next) return head;
  let newnode = new ListNode();
  newnode.next = head;

  let prev = newnode;
  let current = head;
  let n = head.next;

  while (current && n) {
    prev.next = current.next;
    current.next = n.next;
    n.next = current;

    prev = current;
    current = prev.next;
    n = current && current.next;
  }

  return newnode.next;
}
