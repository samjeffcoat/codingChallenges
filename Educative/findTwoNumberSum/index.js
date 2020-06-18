function findSum(arr, value) {
  arr.sort((a, b) => a - b);
  let sumArray = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === value) {
      sumArray.push([arr[left], arr[right]]);
      return sumArray;
    } else if (currentSum < value) {
      left++;
    } else if (currentSum > value) {
      right--;
    }
  }
  return false;
}
//sort the initial array
// establish two pointers as well as a new array
// if we hit our target sum; return that new array
// otherwise traverse through our list
