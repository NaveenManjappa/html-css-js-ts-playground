// Create a function makeCounter that returns a counter object with methods to increment, decrement, and reset the counter. The counter should maintain its current value and provide these operations:

// increment() – Increases the counter by 1 and returns the new value.

// decrement() – Decreases the counter by 1 and returns the new value.

// reset() – Resets the counter to its initial value (default: 0) and returns the reset value.

// The counter should also allow an optional initial value.

function makeCounter(initialValue=0){
  let initValue=initialValue;
  let count = initialValue;
  return {
    increment:() => {count++; return this;},
    decrement: () => {count--;return count;},
    reset:() => {count=initValue;return count;}
  }
}

const counter = makeCounter(0);
console.log(counter.increment().increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());