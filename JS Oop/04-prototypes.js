//Property descriptor
let person = { name: 'ABC' };

let objectBase = Object.getPrototypeOf(person);
console.log(objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log(descriptor);

Object.defineProperty(person,'name',{
  writable: false,
  enumerable: false,
  configurable: false
});

person.name = 'John';
delete person.name;
console.log(person);

console.log(Object.keys(person));
