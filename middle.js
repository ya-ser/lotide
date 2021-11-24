const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
