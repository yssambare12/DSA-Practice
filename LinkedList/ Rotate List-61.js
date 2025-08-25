// 61. Rotate List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let length = 0;
  let curr = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  k = k % length;

  let slow = head;
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = head;
  let newHead = slow.next;
  slow.next = null;

  return newHead;
}
