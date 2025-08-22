// Sum of all numbers in an array without using for loop = recurssion should be preferable

function sum(n) {
  let isodd = n % 2 == 1;
  if (n == 0)
    return {
      if(isodd) {
        return arr[n];
      },
    };

  return isodd ? arr[n] + sum(n - 1) : 0 + sum(n - 1);
}

// Other similer approch

function sum(n) {
  if (n == 0) {
    return arr[n];
  }

  if (n % 2 == 1) {
    return arr[n] + sum(n - 1);
  } else {
    return 0 + sum(n - 1);
  }
}
