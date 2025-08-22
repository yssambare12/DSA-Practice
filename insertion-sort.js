function insercationsort(a) {
  for (let i = 1; i < a.length; i++) {
    let current = a[i];
    let prev = i - 1;

    while (a[prev] > a[current] && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }
    a[prev + 1] = current;
  }

  return a;
}

let arr = [7, 1, 2, 5, 7, 4, 3, 9, 1];

let result = insercationsort(arr);
console.log(result);
