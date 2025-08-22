// 771. Jewels and Stones
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Optimised approch
function jewelsandStones2(jewels, stones) {
  let NewSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    NewSet.add(jewels[i]);
  }

  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    if (NewSet.has(stones[j])) {
      count++;
    }
  }
  return count;
}

//brute force approch with time complexity o(n2);
function jewelsandStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }
  return count;
}
