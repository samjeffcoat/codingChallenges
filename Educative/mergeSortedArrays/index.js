function mergeArrays(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  return mergedArray.sort((a, b) => a - b);
}

function mergeArrays2(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
// O(nlogn)
function mergeArrays3(arr1, arr2) {
  var merged = [];
  var i = 0;
  var j = 0;

  //Traverse both arrays and insert smaller value from arr1 or arr2 into result array and then increment that array index

  // if an array is completely traversed, while the other one is left then just copy all the remaining elements into result array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
    }
  }
  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    merged = merged.concat(arr1);
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    merged = merged.concat(arr2);
  }
  return merged;
}

// Time Complexity #
// The time complexity for this algorithm is O(n + m)O(n + m), where nn and mm are the lengths of arr1 and arr2, respectively.This is because both the arrays are iterated over once.
