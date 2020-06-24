function threeNumberSum(arr, target) {
  // sort our array because we want to use pointers
  arr.sort((a, b) => a - b);

  // declare our triplets array
  const triplets = [];
  // loop through our input array
  for (let i = 0; i < arr.length - 2; i++) {
    //declare a left and right pointer
    let leftPointer = i + 1;
    let rightPointer = arr.length - 1;

    //as long as our left pointer is less than right pointer(it will be)
    while (leftPointer < rightPointer) {
      //declare our current sum as sum of current index and current
      const current = [arr[i] + arr[leftPointer] + arr[rightPointer]];
      // if we hit our target sum
      if (current === target) {
        // push the values to our new array
        triplets.push(arr[i], arr[leftPointer], arr[rightPointer]);
        leftPointer++;
        rightPointer--;
      } else if (current < target) {
        leftPointer++;

        // incrementing left guarantees increasing greater sum
      } else if (current > target) {
        // decrementing right guarantees decreasing a number sum

        rightPointer--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 20));
