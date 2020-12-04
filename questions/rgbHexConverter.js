/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
  if (!(rgbValues.length < 4)) {
    // console.log(rgbValues.length);
    throw "Invalid Input";
  }
  if (!(rgbValues[0] <= 255 && rgbValues[1] <= 255 && rgbValues[2] <= 255)) {
    throw "Invalid Input";
  }
  for (let i = 0; i < rgbValues.length; i++) {
    if (!Number.isInteger(rgbValues[i])) {
      throw "Invalid Input";
    } else {
      const componentToHex = (c) => {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      };
      return (
        "#" +
        componentToHex(rgbValues[0]) +
        componentToHex(rgbValues[1]) +
        componentToHex(rgbValues[2])
      );
    }
  }
};

module.exports = rgbToHexConversion;
