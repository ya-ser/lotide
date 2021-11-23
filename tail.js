const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// ISOLATES THE FIRST ELEMENT IN THE "ACTUAL" ARRAY
let head = function(firstElement) {
  return firstElement[0];
};

// TESTS CODE BASED ON FIRST ELEMENT IN ARRAY (HEAD) AND COMPARES WITH EXPECTED
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// Output:
// 😭😭😭 Assertion Failed: Lighthouse Labs !== Bootcamp
// 🤩🤩🤩 Assertion Passed: 1 === 1
// 🤩🤩🤩 Assertion Passed: 5 === 5
// 🤩🤩🤩 Assertion Passed: Hello === Hello

let tail = function(afterHead) {
  return afterHead.slice(1);
};

assertEqual(tail(["Hello", "Lighthouse", "Labs"]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
console.log(tail(words1));
assertEqual(words1.length, 1);

const words0 = [];
tail(words0);
assertEqual(words0.length, 0);