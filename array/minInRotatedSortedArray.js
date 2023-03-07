function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    mid = Math.floor((right + left) / 2);
    if (nums[mid] < nums[left] && nums[mid] < nums[right]) {
      return nums[mid];
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
}

console.log(findMin([4, 5, 6, 7, 8, 1, 2, 3]));
