// Solution 1

function removeEven(arr) {
  var odds = [];
  for (let number of arr) {
    if (number % 2 != 0)
      // check if our indexes our divisible by 2, if they arent
      odds.push(number); // push them to our new array
  }
  return odds;
}
//using filter and lambda function

function removeEven2(arr) {
  return arr.filter((t) => t % 2 != 0);
}

// Both functions have a time complexity of O(n) since we are not doing any loops or anythign
