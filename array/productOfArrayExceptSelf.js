// Given an integer array(nums), return an array(answer) such that answer[i] is equal to the product of all the elements of nums except nums[i]

function productOfAllButSelf(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const temp = [...nums];
    temp.splice(i, 1);
    let product = temp.reduce((a, b) => a * b);
    answer.push(product);
  }
  return answer;
}

console.log(productOfAllButSelf([1, 2, 3, 4]));
console.log(productOfAllButSelf([4, 3, 2, 1]));
console.log(productOfAllButSelf([1, 1, 1, 1]));
console.log(productOfAllButSelf([5, 3, 0, 6]));
console.log(productOfAllButSelf([0, 2, 4, 6]));
