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

// Dry Run In hindi

// मान लो input है:

// ```js
// nums = [1,1,2,3,3,4,4,8,8]
// ```

// यानी unique element `2` है।

// ---

// ### Code samajhna (तुम्हारी approach)

// 1. हम `left` aur `right` pointers रखते हैं।
// 2. `mid` निकालते हैं।
// 3. फिर देखते हैं:

//    * अगर `nums[mid] == nums[mid-1]` → मतलब mid अपने left वाले के साथ pair बना रहा है।
//      अब हम **left side** के कितने elements हैं (mid तक) वो गिनते हैं → `leftcount`.
//      अगर `leftcount` even है → unique element right में होगा।
//      अगर odd है → unique element left में होगा।
//    * अगर `nums[mid] == nums[mid+1]` → मतलब mid apne right वाले के साथ pair बना रहा है।
//      अब हम **right side** में कितने elements हैं वो गिनते हैं → `rightcount`.
//      अगर `rightcount` even है → unique element left में होगा।
//      अगर odd है → unique element right में होगा।
//    * वरना (kisi se match नहीं कर रहा) → यही unique element है।

// ---

// ### Dry run: `[1,1,2,3,3,4,4,8,8]`

// * **Step 1**
//   `left=0, right=8`
//   `mid = 0 + Math.floor((8-0)/2) = 4`
//   `nums[4] = 3`
//   Compare → `nums[4] == nums[3] (3 == 3)` ✔

//   अब `leftcount = mid - left + 1 = 4 - 0 + 1 = 5` (odd)
//   Odd होने पर unique left side में है → `right = mid - 2 = 2`

//   अब: `left=0, right=2`

// ---

// * **Step 2**
//   `mid = 0 + Math.floor((2-0)/2) = 1`
//   `nums[1] = 1`
//   Compare → `nums[1] == nums[0] (1 == 1)` ✔

//   `leftcount = 1 - 0 + 1 = 2` (even)
//   Even होने पर unique right side में है → `left = mid + 1 = 2`

//   अब: `left=2, right=2`

// ---

// * **Step 3**
//   `mid = 2`
//   अब `nums[2] = 2`
//   ये ना left से match कर रहा, ना right से → unique मिल गया ✅

// Return `2`

// ---

// ### Easy summary (हिंदी में याद रखने का तरीका)

// * अगर `mid` apne left वाले se pair bana raha hai → left side की गिनती देखो।

//   * Odd count → unique left में है
//   * Even count → unique right में है
// * अगर `mid` apne right वाले se pair bana raha hai → right side की गिनती देखो।

//   * Odd count → unique right में है
//   * Even count → unique left में है
// * Agar dono se match nahi kar raha → वही unique hai.
