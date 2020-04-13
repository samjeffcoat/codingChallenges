//O(n^2) time | o(1) space
//n ^2 because we are looping through the arrays twice
//two nested for loops
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return firstNum, secondNum;
      }
    }
  }
  return [];
}

//establish a object, and if true add it to our object
//O(n)time | O(n) space
function twoNumberSum(array, targetSum) {
    const nums = {},
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true
        }
    }
    return []
}

// establish left and right pointer
//sort our array
//O(nlog(n) | o(1) space)
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a-b);
    let left = 0;
    let right = array.length -1;
    while (left < right) {
        const currentSum = array[left]+ array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]]
        } else if ( currentSum < targetSum) {
            left++
        } else if (currentSum > targetSum) {
            right --
        }
    }
    return []
}