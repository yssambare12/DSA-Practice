// 242. Valid Anagram
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

function validAnagram(s, t) {
  if (s.length != t.length) return false;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!hash[t[j]] || hash[t[j]] < 0) {
      return false;
    } else {
      hash[t[j]]--;
    }
  }
  return true;
}
