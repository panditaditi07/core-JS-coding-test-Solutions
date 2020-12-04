/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */

const convertTime = (seconds) => {
  if (Number.isInteger(seconds)) {
    let time = seconds % (24 * 3600);
    let hour = time / 3600;

    time %= 3600;
    let minutes = time / 60;

    time %= 60;
    let secs = time;

    let timeList = {
      hours: hour,
      minutes: minutes,
      seconds: secs,
    };
    return timeList;
  } else {
    throw "Invalid Input";
  }
};
convertTime(3600);
module.exports = convertTime;
