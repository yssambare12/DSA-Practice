// 125. Valid Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

function validPalidrome(s) {
  s = s.toLowerCase();
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!s[start].match(/[a-z0-9]/)) {
      ++start;
    } else if (!s[end].match(/[a-z0-9]/)) {
      --end;
    } else if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
