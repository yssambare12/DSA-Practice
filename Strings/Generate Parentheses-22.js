// brute force apprich

function generateParenthesisBruteForce(n) {
  let result = [];

  function generate(current) {
    if (current.length === 2 * n) {
      if (isValid(current)) {
        result.push(current);
      }
      return;
    }
    generate(current + "(");
    generate(current + ")");
  }

  function isValid(s) {
    let balance = 0;
    for (let ch of s) {
      if (ch === "(") balance++;
      else balance--;
      if (balance < 0) return false; // More ')' than '('
    }
    return balance === 0;
  }

  generate("");
  return result;
}

// Example
console.log(generateParenthesisBruteForce(3));

// oPTIMISED approcgh

function generateParenthesis(n) {
  let result = [];

  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (open < n) backtrack(current + "(", open + 1, close);
    if (close < open) backtrack(current + ")", open, close + 1);
  }

  backtrack("", 0, 0);
  return result;
}

// Example
console.log(generateParenthesis(3));
