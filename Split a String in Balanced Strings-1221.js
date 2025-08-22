// 1221. Split a String in Balanced Strings
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

function balancedStringCount(s) {
  let R = 0;
  let L = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      ++R;
    } else {
      ++L;
    }
    if (R == L) {
      count++;
    }
  }
  return count;
}
