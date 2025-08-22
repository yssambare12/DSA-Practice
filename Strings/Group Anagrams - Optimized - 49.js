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

function groupAnagram(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    let newarray = Array(26).fill(0);
    let s = str[i];

    for (let j = 0; j < s.length; j++) {
      let index = s[i].charCodeAt() - "a".charCodeAt();
      newarray[index]++;
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k + 97) + newarray[k];
    }

    if (!hash[key]) {
      hash[key] = [s];
    } else {
      hash[key].push(s);
    }
  }

  return [...Object.values(hash)];
}

// Time complexity = O(m n)
// Space complexity = O(m n)
