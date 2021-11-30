const tail = function(afterHead) {
  return afterHead[afterHead.length - 1];
};
module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const words1 = ["Yo Yo"];
// console.log(tail(words1));
// assertEqual(words1.length, 1);

// const words0 = [];
// tail(words0);
// assertEqual(words0.length, 0);