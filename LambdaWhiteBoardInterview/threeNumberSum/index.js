function threeNumberSum(arr, target) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = arr.length - 1;
    while (leftPointer < rightPointer) {
      const current = arr[i] + arr[leftPointer] + arr[rightPointer];
      if (current === target) {
        triplets.push([arr[i], arr[leftPointer], arr[rightPointer]]);
        leftPointer++;
        rightPointer--;
      } else if (current < target) {
        leftPointer++;
      } else if (current > target) {
        rightPointer--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([1, 3, 4, 10, 24, 50, 75, 80, 156], 156));
