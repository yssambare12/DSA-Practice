// 234. Palindrome Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

function CheckLiskListPalidrome(head) {
  let arr = [];
  let current = head;

  while (current != null) {
    arr.push(current.val);
    current = current.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return false;
}
