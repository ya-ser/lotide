const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let count = {};
  for (const elements of letters) {
    if (count[elements]) {
      count[elements] += 1;
    } else {
      if (elements !== " ") {
        count[elements] = 1;
      }
    }
  }
  return count;
};

console.log(countLetters("LHL"));
console.log(countLetters("countLetters"));