function maxSubArray(nums) {
  let max = nums[0];
  let tsum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    tsum = Math.max(tsum + nums[i], nums[i]);
    max = Math.max(max, tsum);
  }
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
