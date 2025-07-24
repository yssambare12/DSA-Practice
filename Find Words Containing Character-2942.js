// 2942. Find Words Containing Character
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

// with built in function
function findwordcontaining(words, x) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
}

// without built in function

function findwordcontain(words, x) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
      }
    }
  }
  return res;
}

let words = ["leet", "code"];

let x = "e";

console.log(findwordcontaining(words, x));
