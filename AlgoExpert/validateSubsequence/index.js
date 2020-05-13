array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence[(1, 6, -1, 10)];
//O(n)
function isValidSub(array, sequence) {
  //establish our sequence pointers
  let arrIdx = 0;
  let seqIdx = 0;
  //traverse through our arrays and compare values to see if they are equal
  //if yes increment each pointer
  // else return false or true if the sequence is found in both arrays
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

function isValidSub2(array, sequence) {
  //establish our sequence pointers

  let seqIdx = 0;
  //traverse through our arrays and compare values to see if they are equal
  //if yes increment each pointer
  // else return false or true if the sequence is found in both arrays
  for (const value of array) {
    //break out of our for loop
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}
