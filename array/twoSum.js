// Given an array of integers (nums) and an integer (target),
// return indicies of the two numbers such that they add up to target

function twoSum(nums, target) {
  const results = [];
  for (const num of nums) {
    const otherNum = target - num;
    if (nums.includes(otherNum)) {
      results.push(nums.indexOf(num));
      results.push(nums.indexOf(otherNum));
      break;
    }
  }
  return results;
}

console.log(twoSum([1, 2, 3, 4, 5, 56, 7, 9, 7, 9, 1], 5));
