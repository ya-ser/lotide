// create function for middle array
  // declare midResult var equal to empty array
  // create variable that calculates middleIndex
  // if array lenght is less then 3
    // return midResult (empty array)
  // else if the length is even
    // push the midResult to middleIndex of both, minus 1 to get to first index in new array
  // else
    // push the midResult to middleIndex of 1
  // return midResult
      
// console log function

const middle = function(array) {
  let midResult = [];
  const middleIndex = Math.floor(array.length / 2);
  if (array.length < 3) {
    return midResult;
  } else if (array.length % 2 === 0) {
    midResult.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    midResult.push(array[middleIndex]);
  }
  return midResult;
};

module.exports = middle;
