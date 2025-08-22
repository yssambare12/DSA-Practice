// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonePrefix(str) {
  let x = 0;

  while (x < str[0].length) {
    let ch = str[0][x];
    for (let i = 1; i < str.length; i++) {
      if (ch != str[i][x] || x === str[i].length) {
        return str[0].substring(0, x);
      }
    }
    ++x;
  }
  return str[0];
}
