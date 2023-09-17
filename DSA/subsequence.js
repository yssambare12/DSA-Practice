// Problem: Longest Increasing Subsequence (LIS)

// Given an unsorted array of integers, find the length of the longest increasing subsequence.

// An increasing subsequence is a subsequence (not necessarily contiguous) of the array that is strictly increasing.

// Input: [10, 9, 2, 5, 3, 7, 101, 18]
// Output: 4
// Explanation: The longest increasing subsequence is [2, 3, 7, 101], so its length is 4.

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const dp = new Array(nums.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const result = lengthOfLIS(nums);
console.log(result); // Output: 4
