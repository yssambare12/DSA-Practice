// sum of all number of n using rucurssion

function rucurssion(n) {
  if (n == 0) {
    return 0;
  }

  return n + sum(n - 1);
}

console.log(rucurssion(5));
