let arr = [5, 5, 4, 5, 5, 4, 5, 5];

function sum(n) {
  let isodd = arr[n] % 2 == 0;

  if (n == 0) {
    return isodd ? arr[n] : 0;
  }

  return isodd ? arr[n] + sum(n - 1) : sum(n - 1);
}

console.log(sum(arr.length - 1));
