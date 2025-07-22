// 2. Add Two Numbers
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function addTwoNumberLL(l1, l2) {
  let sum = 0;
  let carry = 0;
  let dummynode = new ListNode();
  let firstPointStoreNode = dummynode;

  while (l1 || l2 || carry) {
    sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    digit = sum % 10;

    let newNode = new ListNode(digit);
    dummynode.next = newNode;
    dummynode = dummynode.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return firstPointStoreNode.next;
}
