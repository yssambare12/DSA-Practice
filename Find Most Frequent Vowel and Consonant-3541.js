// 3541. Find Most Frequent Vowel and Consonant
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.

function findMaxFrequency(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = !hash[s[i]] ? 1 : hash[s[i]]++;
    // if (!hash[s[i]]) {
    //   hash[s[i]] = 1;
    // } else {
    //   hash[s[i]]++;
    // }
  }

  let maxvo = 0;
  let maxco = 0;
  let vovels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < s.length; i++) {
    if (vovels.includes(s[i])) {
      maxvo = Math.max(maxvo, hash[s[i]]);
      //   if (hash[s[i]] > maxvo) {
      //     maxvo = hash[s[i]];
      //   }
    } else {
      maxco = Math.max(maxco, hash[s[i]]);
      //   if (hash[s[i]] > maxco) {
      //     maxco = hash[s[i]];
      //   }
    }
  }

  return maxco + maxvo;
}
