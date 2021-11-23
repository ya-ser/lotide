const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
// ISOLATES THE FIRST ELEMENT IN THE "ACTUAL" ARRAY
let head = function (firstElement) {
  return firstElement[0];
}

// TESTS CODE BASED ON FIRST ELEMENT IN ARRAY (HEAD) AND COMPARES WITH EXPECTED
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// Output:
// 😭😭😭 Assertion Failed: Lighthouse Labs !== Bootcamp
// 🤩🤩🤩 Assertion Passed: 1 === 1
// 🤩🤩🤩 Assertion Passed: 5 === 5
// 🤩🤩🤩 Assertion Passed: Hello === Hello