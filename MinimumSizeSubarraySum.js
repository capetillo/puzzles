/**
 *Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const sum = nums.reduce((partialSum, a) => partialSum + a, 0)
    var newArr = nums.sort((a, b) => b-a);
    var arr = [];
    if (sum < target) {
        return 0;
    } else if (sum == target) {
        return sum.length
    } else {
        for (var i = 0; i < newArr.length; i++) {
            const current = newArr[i];
            if (current == target) {
                return 1;
            }
             arr.push(current);
             var check = arr.reduce((sum, a) => sum + a, 0) 
             if (check >= target) {
                 return arr.length
             }
        }
    }
 };