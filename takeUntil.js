const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let result = [];// creates an empty array
  for (let arr of array) {// loops over the existing array (data1 and 2), which stores the value in arr
    if (callback(arr)) {// passes the new array through stop condition of the callback function
      return result;// prints the new array after calculation
    }
    result.push(arr);// if the stop condition isnt relevant to the array, take the whole thing
  }
};

const results1 = takeUntil(data1, x => x < 0);// stop when the array reaches a value under 0
console.log(results1);