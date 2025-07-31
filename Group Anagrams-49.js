// 49. Group Anagrams
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

function groupAnagram(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    let sortedS = s[i].split("").sort().join("");
    if (!hash[sortedS]) {
      hash[sortedS] = [s[i]];
    } else {
      hash[sortedS].push(s[i]);
    }
  }
  return [...Object.values(hash)];
}
