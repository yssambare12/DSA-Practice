// 328. Odd Even Linked List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

function oddEvenLinedList(head) {
  if (!head || !head.next) return head;
  let odd = head;
  even = head.next;
  evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;
  return head;
}
