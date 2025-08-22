// 19. Remove Nth Node From End of List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

function removeNthNode(head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;

  let first = sentinal;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  let second = sentinal;
  while (first.next != null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return sentinal.next;
}

//brute force approch == Two pass approch
function removeNthNode(head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;
  let length = 0;

  while (head != null) {
    head = head.next;
    length++;
  }

  let PrevPos = length - n;
  let current = sentinal;

  for (let i = 0; i < PrevPos; i++) {
    current = current.next;
  }

  current.next = current.next.next;

  return sentinal.next;
}
