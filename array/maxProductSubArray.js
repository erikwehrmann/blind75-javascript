function maxProductSubArray(nums) {
  let max = nums[0];
  let cprod = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cprod = Math.max(cprod * nums[i], nums[i]);
    max = Math.max(max, cprod);
  }
  return max;
}

console.log(maxProductSubArray([2, 3, -2, 4]));
console.log(maxProductSubArray([-2, 0, -1]));
