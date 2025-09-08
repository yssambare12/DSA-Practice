// 150. Evaluate Reverse Polish Notation
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

function evalRPN(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-" || arr[i] === "/" || arr[i] === "*") {
      let a = stack.pop();
      let b = stack.pop();

      let calculate = eval(`${b} ${arr[i]} ${a}`);
      stack.push(Math.trunc(calculate));
    } else {
      stack.push(arr[i]);
    }
  }
  return stack[0];
}
