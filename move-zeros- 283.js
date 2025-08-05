// 283. Move Zeroes
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

function moveZerosAtEnd(nums) {
  // take one pointer for position of non zero Element;
  let x = 0;
  // start for loop for itrating through array
  for (let i = 0; i < nums.length; i++) {
    // condition to check non zero elements
    if (nums[i] != 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // fill remainig spaces with zeros.
  for (let j = x; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
}
