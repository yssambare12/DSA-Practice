// Sort this array using selection sort technique.

let arr = [34, 54, 65, 34, 23, 4, 65, 32, 3154, 67, 784, 3, 2345, 67];

function selectionSort(arr) {
  let n = arr.legth;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

let result = selectionSort(arr);

console.log(selectionSort);
