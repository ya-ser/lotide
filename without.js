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

const without = function(input, exclude) {
  let source = input.slice(); // copys the entire array
  let output = [];
  for (const element of source) {
    if (!exclude.includes(element)) {// if 
     output.push(element)
    }
  }
  return output;
};

// const without = function(input, exclude) {
//   let source = input.slice(); // copys the entire array
//   for (const element of source) {
//     if (exclude.includes(element)) {
//       const indexOfElm = source.indexOf(element)
//       source.splice(indexOfElm, 1)
//     }
//   }
//   return source;
// };

// const without = function(input, exclude) {
//   let source = input.slice(); // copys the entire array
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < exclude.length; j++){
//       if (source[i] === exclude[j]){
//         source.splice(i, 1)
//       }
//     }
//   }
//   return source;
// };

console.log(without([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2, 3, 4, 5, 6, 7, 8]));
console.log(without([3], [1]));
console.log(without([10, 11, 12], [10]));


// create without function that returns a subset of a given array, removing unwanted elements
// function should have source array and an itemsToRemove array as perameters
  // needs to return only the elements from source that are NOT in itemsToRemove array

// create a without function that has source and itemsToRemove parameters
  // for loop to iterate over itemsToRemove
    // if statement to check if source is equal to itemsToRemove
      // if source matches itemsToRemove, return array
      // else 

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);