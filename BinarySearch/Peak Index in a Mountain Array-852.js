// 852. Peak Index in a Mountain Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Input: arr = [0,10,5,2]

// Output: 1

function mountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid + 1] > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
