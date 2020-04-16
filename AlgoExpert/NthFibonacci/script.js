// Given n intergers, find n in the fibonacci sequence
// n1= 0
// n1= 2 are the base cases

function getNthFib(n) {
  // Write your code here.
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

//Time = O(n)
//Space = O(n)
// with memoization

function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize;
  }
}

//iterative solution
// time is O(n)
// space O(1)

function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
