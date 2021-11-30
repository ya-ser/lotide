

// ISOLATES THE FIRST ELEMENT IN THE "ACTUAL" ARRAY
let head = function (firstElement) {
  return firstElement[0];
}
module.exports = head;

// TESTS CODE BASED ON FIRST ELEMENT IN ARRAY (HEAD) AND COMPARES WITH EXPECTED
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// Output:
// 🤩🤩🤩 Assertion Passed: 5 === 5
// 🤩🤩🤩 Assertion Passed: Hello === Hello