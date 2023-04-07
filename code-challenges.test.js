// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ['purple', 'blue', 'green', 'yellow', 'pink']
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  'chartreuse',
  'indigo',
  'periwinkle',
  'ochre',
  'aquamarine',
  'saffron',
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('removeAndShuffle', () => {
  it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
    expect(removeAndShuffle(colors1)).toEqual(
      expect.arrayContaining(['yellow', 'blue', 'pink', 'green'])
    )
    expect(removeAndShuffle(colors2)).toEqual(
      expect.arrayContaining([
        'saffron',
        'aquamarine',
        'periwinkle',
        'indigo',
        'ochre',
      ])
    )
  })
})

// b) Create the function that makes the test pass.

// Begin the removeAndShuffle function, which takes an array as input.
// Use the shift() method on the array to remove its first element.
// Use the sort() method on the array to shuffle its remaining elements. The sort() method takes a callback function that returns a random number between -1 and 1. If the returned number is less than 0, sort the elements in ascending order (-1). Otherwise, sort the elements in descending order (1).
// Return the shuffled array.

const removeAndShuffle = (array) => {
  array.shift()

  return array.sort(() => (Math.random() < 0.5 ? -1 : 1))
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe('tally', () => {
  it('return end tally', () => {
    expect(tally(votes1)).toEqual(11)
    expect(tally(votes2)).toEqual(-31)
  })
})

// b) Create the function that makes the test pass.

// Begin the tally function, which takes an object as input.
// Access the upVotes and downVotes properties of the object.
// Subtract the value of downVotes from the value of upVotes.
// Return the result of the subtraction as the tally.

const tally = (obj) => {
  return obj.upVotes - obj.downVotes
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ['array', 'object', 'number', 'string', 'Boolean']
const dataArray2 = ['string', 'null', 'Boolean', 'string', 'undefined']
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe('removeDups', () => {
  it('return end tally', () => {
    expect(removeDups(dataArray1, dataArray2)).toEqual([
      'array',
      'object',
      'number',
      'string',
      'Boolean',
      'null',
      'undefined',
    ])
  })
})

// b) Create the function that makes the test pass.

// Begin the removeDups function, which takes any number of arrays as input using the rest parameter syntax.
// Use the reduce method on the input arrays to flatten them into a single array. Start with an empty array as the initial value of the accumulator.
// Use the Set constructor and the Array.from method to create a new array with duplicate elements removed.
// Return the new array as the result of the function.

const removeDups = (...arrays) => {
  return Array.from(
    new Set(arrays.reduce((acc, curr) => [...acc, ...curr], []))
  )
}
