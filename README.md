# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares arrays to check if they match, then gives a result in the CLI.
* `assertEqual`: Compares values to check if they match, then gives a result in the CLI.
* `assertObjectsEqual`: Compares objects to check if they match, then gives a result in the CLI.
* `countLetters`: Counts letters in strings and returns an array listing each letter and the occurance.
* `countOnly`: Complete count for objects.
* `eqArrays`: Compares arrays to check if they match, then gives a result in the CLI.
* `eqObjects`: Compares objects to check if they match, then gives a result in the CLI.
* `findKey`: Find the key of an object.
* `findKeyByValue`: Returns the first key which contains a given value or returns it as undefined.
* `flatten`: Compares arrays to check if they match, then gives a result in the CLI.
* `head`: Compares the first index to expected.
* `index`: An index of functions.
* `letterPositions`: Finds the letter positions of a string.
* `map`: Maps the first letter of words in an array.
* `middle`: Prints only the middle index of an array.
* `tail`: Compares the last index to expected.
* `takeUntil`: Takes in an array and stops at a specified value.
* `without`: Takes in an array and removes specified values then returns new array.