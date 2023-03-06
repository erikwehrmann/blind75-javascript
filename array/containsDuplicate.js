// Given an integer array (nums), return true if any appears at least twice in the array, and return false if every element is unique.

function containsDuplicate(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(
  containsDuplicate([2, 6, 44, 5, 7, 8, 3, 2, 32, 1, 32, 43, 66, 75, 4, 2, 4])
);
console.log(containsDuplicate([2, 6, 44, 5, 7, 8, 3]));
console.log(containsDuplicate([3, 3]));
console.log(containsDuplicate([]));
console.log(containsDuplicate([3, 1]));
