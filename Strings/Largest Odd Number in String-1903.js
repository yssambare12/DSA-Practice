// 1903. Largest Odd Number in String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206"

function largestOddSubstring(s) {
  let n = s.length;
  while (n >= 0) {
    if (Number(s[i]) % 2 == 1) {
      return s.substring(0, n + 1);
    }
    n--;
  }
  return "";
}
