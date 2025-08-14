let arr = [
  5, 3, 5, 3, 1, 3, 55, 32, 113, 567, 334, 45, 12, 56, 23, 1, 3, 56, 678,
];

function bubble(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubble(arr));
