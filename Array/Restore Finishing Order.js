// Got it 👍
// Here’s the same problem statement rewritten in a **structured way** (clean, categorized format like real coding platforms):

// ---

// ## Q1. Restore Finishing Order

// **Difficulty:** Easy
// **Points:** 3

// ---

// ### Problem Statement

// You are given:

// * An integer array **order** of length `n`.

// * An integer array **friends**.

// * `order` contains every integer from `1` to `n` **exactly once**, representing the IDs of participants of a race in their **finishing order**.

// * `friends` contains the IDs of **your friends** in strictly increasing order.

// * Each ID in `friends` is guaranteed to appear in `order`.

// Your task is to **return an array containing your friends' IDs in their finishing order**.

// ---

// ### Example 1

// **Input:**

// ```
// order = [3,1,2,5,4]
// friends = [1,3,4]
// ```

// **Output:**

// ```
// [3,1,4]
// ```

// **Explanation:**
// The finishing order is `[3, 1, 2, 5, 4]`.
// Your friends’ finishing order is `[3, 1, 4]`.

// ---

// ### Example 2

// **Input:**

// ```
// order = [1,4,5,3,2]
// friends = [2,5]
// ```

// **Output:**

// ```
// [5,2]
// ```

// **Explanation:**
// The finishing order is `[1, 4, 5, 3, 2]`.
// Your friends’ finishing order is `[5, 2]`.

// ---

// ### Constraints

// * `1 <= n <= 10^5`
// * `order.length == n`
// * `friends.length <= n`
// * `order` contains integers `1` to `n` exactly once.
// * `friends` is strictly increasing.
// * All values in `friends` exist in `order`.

// ---

// Do you also want me to add a **Sample I/O table format** (Input → Output → Explanation) like LeetCode style for quick reference?

/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
  let Store = new Set();
  let newarr = [];
  for (let i = 0; i < friends.length; i++) {
    Store.add(friends[i]);
  }

  for (let j = 0; j < order.length; j++) {
    if (Store.has(order[j])) {
      newarr.push(order[j]);
    }
  }

  return newarr;
};
