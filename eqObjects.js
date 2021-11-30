const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// loop through obj1
// loop through obj2


const eqObjects = function(object1, object2) {
  let keyObj1 = Object.keys(object1);
  // console.log("What is this:" + keyObj1);
  let keyObj2 = Object.keys(object2);
  // console.log("What is this:" + keyObj1);
  if (keyObj1.length !== keyObj2.length) {// if the length of the object 
    return false;
  } else {
    for (let key of keyObj1) {// loops through keys in obj1
      if (Array.isArray(object1[key])) {//if keys in obj1 match obj2
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   } else {
//     for (let keys in object1) {
//       if (Array.isArray(object1[keys])) {
//         if (!eqArrays(object1[keys], object2[keys])) {

//         }
//       } else {
//         flag.push(true);
//       }
//     }
//   }
// };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual((eqObjects(ab, abc)), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)), false); // => false