function makeCounterChain(initialValue = 0) {
  let count = initialValue;
  const initial = initialValue; 

  return {
    increment: function() {
      count++;
      return this; // Return the object for chaining
    },
    decrement: function() {
      count--;
      return this; // Return the object for chaining
    },
    reset: function() {
      count = initial;
      return this; // Return the object for chaining
    },
    getValue: function() {
      return count; // Return the current value
    }
  };
}

// Now you can do this!
const counter = makeCounterChain(5);
const finalValue = counter.increment().increment().decrement().getValue(); // 7 - 1 = 6

console.log(finalValue); // Output: 6