function maxSubArray(nums) {
  let max = nums[0];
  let csum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    csum = Math.max(csum + nums[i], nums[i]);
    max = Math.max(max, csum);
  }
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
