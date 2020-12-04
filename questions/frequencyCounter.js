/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
  var freq = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    for (let j = 0; j < vowels.length; j++) {
      if (character == vowels[j]) {
        freq[character]++;
      }
    }
  }
  return freq;
};

module.exports = frequencyCounter;
