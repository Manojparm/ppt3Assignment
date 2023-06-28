/*Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target
           
You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]*/

function fourSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const quadruplets = [];
  
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicate values for the first element of the quadruplet
      }
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicate values for the second element of the quadruplet
        }
  
        let left = j + 1; // Pointer for the third element
        let right = nums.length - 1; // Pointer for the fourth element
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
            left++;
            right--;
  
            // Skip duplicate values for the third and fourth elements of the quadruplet
            while (left < right && nums[left] === nums[left - 1]) {
              left++;
            }
            while (left < right && nums[right] === nums[right + 1]) {
              right--;
            }
          } else if (sum < target) {
            left++; // Move the left pointer to increase the sum
          } else {
            right--; // Move the right pointer to decrease the sum
          }
        }
      }
    }
  
    return quadruplets;
  }
  
  // Test case:
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result);
  // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  