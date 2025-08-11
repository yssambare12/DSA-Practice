// find the factorial of given n number using recursion

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

// 5 * factorial(n-1) = 5 * f(5-1)
// 4 * factorial(n-1) = 4 * f(4-1)
// 3 * factorial(n-1) = 3 * f(3-1)
// 2 * factorial(n-1) = 2 * f(2-1)
// 1 * factorial(n-1) = 1 * f(1-1)
