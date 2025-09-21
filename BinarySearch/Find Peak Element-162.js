// 162. Find Peak Element
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

function findPeakElement(arr) {
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
