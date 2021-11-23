/*const sumBuggy = function(a, b) {
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1, 2) === 3);

// COMPARING NON-IDENTICAL STINGS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
// Output:
Assertion Failed: Lighthouse Labs !== Bootcamp
Assertion Passed: 1 === 1

// COMPARING IDENTICAL STRINGS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
// Output:
Assertion Passed: Lighthouse Labs === Lighthouse Labs
Assertion Passed: 1 === 1

//ADDING EMOJIS WITH https://emojipedia.org/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🤩🤩🤩 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("😭😭😭 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
// Output:
// 😭😭😭 Assertion Failed: Lighthouse Labs !== Bootcamp
// 🤩🤩🤩 Assertion Passed: 1 === 1
*/
//USING TEMPLATE LITERALS (TEMPLATE STRINGS) TO INTERPOLTE FINAL STRING INSTEAD OF CONCATINATING
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);