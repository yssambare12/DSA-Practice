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
