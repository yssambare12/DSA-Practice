// 876. Middle of the Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

function middlelLinkList(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Time Complexity: O(n)

// Even though there are two nested loops, the overall time complexity is O(n), not O(n^2).
// Here's why:

// The outer loop runs in steps of 2k (i = i + 2k), so it skips ahead and doesn’t check every index one-by-one.
// That means it runs approximately n / (2k) times.

// Inside the outer loop, the inner loop runs only up to k/2 times (since we reverse only k characters and swap pairs).

// So, even though it looks like a nested loop,
// it's not two full loops over 'n' — the inner loop runs a fixed number of times per outer iteration.

// Therefore, the total number of operations across the entire string is proportional to 'n', not n^2.

// That’s why the final time complexity is O(n), not O(n²).
