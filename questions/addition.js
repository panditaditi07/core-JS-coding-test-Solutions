/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
  // all your code
  // for (let i = 0; i < numbers.length; i++) {
  if (numbers.length === 0 || typeof numbers == "undefined") {
    throw "Invalid Input";
  }
  for (let i = 0; i < numbers.length; i++) {
    if (!Number.isInteger(numbers[i])) {
      throw "Invalid Input";
    } else {
      return numbers.reduce((a, b) => a + b, 0);
    }
  }
};

module.exports = addition;
