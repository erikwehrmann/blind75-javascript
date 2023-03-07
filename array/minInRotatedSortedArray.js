function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    mid = Math.floor((right + left) / 2);
    // console.log(nums[left], nums[mid], nums[right]);
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (right - left === 1) {
      if (nums[right] > nums[left]) return nums[left];
      if (nums[right] < nums[left]) return nums[right];
    } else if (nums[mid] > nums[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }
}

// console.log(findMin([0, 1, 2, 3, 4, 5, 6]), 0);
// console.log(findMin([1, 2, 3, 4, 5, 6, 0]), 0);
// console.log(findMin([2, 3, 4, 5, 6, 0, 1]), 0);
// console.log(findMin([3, 4, 5, 6, 0, 1, 2]), 0);
// console.log(findMin([4, 5, 6, 0, 1, 2, 3]), 0);
// console.log(findMin([5, 6, 0, 1, 2, 3, 4]), 0);
// console.log(findMin([6, 0, 1, 2, 3, 4, 5]), 0);
// console.log(findMin([0, 1, 2, 3, 4, 5]), 0);
// console.log(findMin([1, 2, 3, 4, 5, 0]), 0);
// console.log(findMin([2, 3, 4, 5, 0, 1]), 0);
// console.log(findMin([3, 4, 5, 0, 1, 2]), 0);
// console.log(findMin([4, 5, 0, 1, 2, 3]), 0);
// console.log(findMin([5, 0, 1, 2, 3, 4]), 0);
