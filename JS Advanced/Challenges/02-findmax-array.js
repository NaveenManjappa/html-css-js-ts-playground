function findMaxNumber(arr){
  if(arr.length === 0 )
    return null;
  let max = arr[0];

  for(let i=0;i < arr.length;i++)
  {
    if(arr[i] > max)
      max = arr[i];
  }
  return max;

}

function findMaxNumber2(arr){
  if(!arr || arr.length === 0)
    return null;

  return arr.reduce((acc,cur) => cur > acc ? cur : acc);
}

function findMaxNumber3(arr){
  if(!arr || arr.length === 0)
    return null;

  return Math.max(...arr);
}


// --- Test Cases ---
const testCases = [
  { description: "Empty array", input: [], expected: null },
  { description: "Null input", input: null, expected: null },
  { description: "Undefined input", input: undefined, expected: null },
  { description: "Array with one element", input: [5], expected: 5 },
  { description: "Array with positive numbers, max at end", input: [1, 2, 3, 8], expected: 8 },
  { description: "Array with positive numbers, max at start", input: [9, 1, 5, 3], expected: 9 },
  { description: "Array with positive numbers, max in middle", input: [1, 7, 2, 3], expected: 7 },
  { description: "Array with negative numbers", input: [-1, -5, -2, -8, -3], expected: -1 },
  { description: "Array with mixed positive and negative numbers", input: [-1, 5, -2, 8, 0, -3], expected: 8 },
  { description: "Array with duplicate max numbers", input: [8, 1, 5, 2, 8, 3], expected: 8 },
  { description: "Array with all same numbers", input: [7, 7, 7, 7], expected: 7 },
  { description: "Array with numbers in descending order", input: [10, 5, 1, -5], expected: 10 },
  { description: "Array with numbers in ascending order", input: [-5, 1, 5, 10], expected: 10 },
];

// --- Test Runner ---
function runConsoleTests(fnName, fnToTest) {
  console.log(`\n--- Testing ${fnName} ---`);
  let allPassed = true;

  testCases.forEach((testCase, index) => {
    console.log(`\nTest Case ${index + 1}: ${testCase.description}`);
    const inputForLog = testCase.input === undefined ? 'undefined' : JSON.stringify(testCase.input);
    console.log(`  Input: ${inputForLog}`);
    
    let actual;
    try {
      actual = fnToTest(testCase.input);
    } catch (e) {
      actual = `Error: ${e.message}`;
    }
    
    const status = actual === testCase.expected ? "PASSED" : "FAILED";
    if (status === "FAILED") {
      allPassed = false;
    }

    console.log(`  Expected: ${testCase.expected}`);
    console.log(`  Actual:   ${actual}`);
    console.log(`  Status:   ${status}`);
  });

  if (allPassed) {
    console.log(`\n--- All tests for ${fnName} PASSED! ---`);
  } else {
    console.log(`\n--- Some tests for ${fnName} FAILED. ---`);
  }
}

// --- Run Tests ---
runConsoleTests('findMaxNumber2', findMaxNumber2);
runConsoleTests('findMaxNumber3', findMaxNumber3);
