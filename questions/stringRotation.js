// str = input string
// n = number of rotations
//
// input str = random ,1, right
// output mrando
const rotateString = (str, n, direction) => {
  if (direction == "left") {
    let string_array = str.split("");
    for (let i = 0; i < n; i++) {
      string_array.push(string_array.shift());
    }
    let new_string = string_array.join("");
    return new_string;
  } else if (direction == "right") {
    let string_array = str.split("");
    for (let i = 0; i < n; i++) {
      string_array.unshift(string_array.pop());
    }
    let new_string = string_array.join("");
    return new_string;
  } else {
    throw "Invalid Input ";
  }
};

module.exports = rotateString;
