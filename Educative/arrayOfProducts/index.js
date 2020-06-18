function findProduct(arr) {
  //creating a new array called product
  let product = [];
  let temp = 1;
  //traverse the arr and store the product of all the numbers to the left side of the current product in product[i] as on 10

  //we will also calculate the product of all the elements from index 0 to index i for the next iteration and store it in temp line 11

  for (let i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp = temp * arr[i];
  }

  //traverse the arr from the end of the array and multiply the product of all the numbers to the right side of the current element/ We will also calculate the product of all the eleements from the index length-1 to the current index i for the next iteration and store it in temp line 19

  temp = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    product[i] *= temp;
    temp *= arr[i];
  }

  return product;
}

console.log(findProduct([1, 3, 4, 5]));
