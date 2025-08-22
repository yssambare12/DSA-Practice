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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;

  while (current != null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  let firstList = head;
  let secondList = prev;

  while (secondList != null) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};

//brute force approch
function CheckLiskListPalidromeBR(head) {
  let curr = head;
  let newArray = [];

  while (curr != null) {
    newArray.push(curr.val);
    curr = curr.next;
  }

  let start = 0;
  let end = newArray.length - 1;
  while (start < end) {
    if (newArray[start] === newArray[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
