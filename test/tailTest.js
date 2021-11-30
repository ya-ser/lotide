const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 7 for [5,6,7]", () => {
    assert.strictEqual(tail([5,6,7]), 7);
  });
  it("returns 2 for the length of words.", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
  });
});