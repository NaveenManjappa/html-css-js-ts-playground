// Remove Duplicates from Array

// Given an array, your task is to return a new array with all duplicate elements removed.
// You should preserve the order of the first occurrence of each element.

// Input
// An array of any primitive values: number, string, boolean, null, or undefined.

// Output
// A new array containing only unique elements, in the order they first appear.

// Edge Cases
// Empty array should return an empty array.

// Duplicates can be of different types (e.g., 1 and "1" are not the same).

// Object and array references are considered unique even if they look identical.

// O(n²) implementation
function removeDuplicates(arr){
  if (arr.length === 0)
    return [];
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    const index = uniqueArr.findIndex(v => v === arr[i]);
    if (index >= 0)
      continue;
    uniqueArr.push(arr[i]);
  }
  return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
console.log(removeDuplicates(["a", "b", "a", "c"]));
console.log(removeDuplicates([1, "1", 1]));
console.log(removeDuplicates([]));


console.log("\n--- Efficient O(n) Implementation using Set ---");
function removeDuplicatesEfficient(arr) {
  if (!arr) return [];
  return [... new Set(arr)];
}
console.log(removeDuplicatesEfficient([1, 2, 2, 3, 4, 4]));
console.log(removeDuplicatesEfficient(["a", "b", "a", "c"]));
console.log(removeDuplicatesEfficient([1, "1", 1]));
console.log(removeDuplicatesEfficient([]));