const _items = Symbol();
const _count = Symbol();

class Stack { 

 constructor(){
  this[_items]=[];
  this[_count]=0;
 }

 get count() {
  return this[_count];
 }

  push(item){
    this[_items].push(item);
    this[_count]++;
  }

  pop() {
    if(this[_count] <= 0)
      throw new Error('Stack is empty');
    return this[_items][this[_count]-- - 1];


  }

  peek() {
    if(this[_count] <= 0)
      throw new Error('Stack is Empty');
    return this[_items][this[_count]-1];
  }
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log('Count:', s.count);        // Should print 3
console.log('Peek:', s.peek());        // Should print 30
console.log('Pop:', s.pop());          // Should print 30
console.log('Count after pop:', s.count); // Should print 2
console.log('Peek after pop:', s.peek()); // Should print 20

s.pop();
s.pop();
//s.pop(); // will throw an error

// Test empty stack error
try {
  const emptyStack = new Stack();
  emptyStack.pop();
} catch (error) {
  console.log('Error:', error.message); // Should print "Stack is empty"
}