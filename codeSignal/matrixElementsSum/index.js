// Here we are summing our matrix.If we have a zero in one of our columns, then we cannot add that back into our sum.

function matrixElementSum(matrix) {
  //Declaring our sum variable
  let sum = 0;
  // declaring our banned array to keep track of columns that have a zero in it
  let bannedArray = [];
  // loop through initial array
  for (let i = 0; i < matrix.length; i++) {
    //looping through subsequent array
    for (let j = 0; j < matrix[i].length; i++) {
      //check to see if our columns contain a banned index
      if (matrix[i][j] === 0) {
        //push that value into banned array
        bannedIndex.push(j);
      } //otherwise
      else if (bannedIndex.indexOf(j) === -1) {
        //if this does not exist in our bannedIndex array, add the value to it
        sum += matrix[i][j];
      }
    }
  }
  // return our sum
  return sum;
}
