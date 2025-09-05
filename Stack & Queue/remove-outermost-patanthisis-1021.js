// 1021. Remove Outermost Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      let len = stack.length;
      if (len > 1) {
        ans = ans + s[i];
      }
    } else {
      let len = stack.length;
      if (len > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
};

/// Without stack below is the solution

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack++;
      if (stack > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack > 1) {
        ans = ans + s[i];
      }
      stack--;
    }
  }
  return ans;
};
