// 485. Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentcount = 0;
  let maxcount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentcount++;
    } else {
      maxcount = Math.max(currentcount, maxcount);
      currentcount = 0;
    }
  }
  return Math.max(currentcount, maxcount);
};
