// 540. Single Element in a Sorted Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

// bit hard to implement solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === nums[mid - 1]) {
      let leftcount = mid - left + 1;
      if (leftcount % 2 === 0) {
        left = mid + 1;
      } else {
        right = mid - 2;
      }
    } else if (nums[mid] === nums[mid + 1]) {
      let rightcount = right - mid + 1;
      if (rightcount % 2 === 0) {
        right = mid - 1;
      } else {
        left = mid + 2;
      }
    } else {
      return nums[mid];
    }
  }
};

// bit easy to implement solution
var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // ensure mid is even
    if (mid % 2 === 1) mid--;

    if (nums[mid] === nums[mid + 1]) {
      // unique is on the right
      left = mid + 2;
    } else {
      // unique is on the left (including mid)
      right = mid;
    }
  }
  return nums[left];
};
