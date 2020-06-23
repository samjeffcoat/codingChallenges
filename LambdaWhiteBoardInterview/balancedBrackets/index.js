function balancedBrackets(string) {
  //intialize string of all opening brackets
  const openingBrackets = '([{';
  // intialize string of all closing brackets
  const closingBrackets = ')]}|';

  const onlyMatchingBracket = '|';
  // hashtable, map closing brackets to opening brackets
  const matchingBrackets = { ')': '(', ']': '[', '}': '{', '|': '|' };

  // initialize our stack to be empty array
  const stack = [];

  //check if we have opening brackets
  // add all opening brackets to stack

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);

      // if current charachter is closing bracket
      // if nothing is in the stack then we return false since there are no brackets to map to
    } else if (closingBrackets.includes(char)) {
      if (stack.length == 0) {
        return false;
      }
      //check  to see last value in our in our closing bracket maps to opening bracket

      //pop off that value of the stack
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('||({{}})'));
console.log(balancedBrackets('{}'));
console.log(balancedBrackets('||({{}})]'));
// console.log(balancedBrackets('||'));
// console.log(balancedBrackets('||'));
// console.log(balancedBrackets('||'));
// console.log(balancedBrackets('||'));
// console.log(balancedBrackets('||'));
