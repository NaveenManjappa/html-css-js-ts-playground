//Arrays
console.log('------Adding Elements------');
const numbers = [3,4];
numbers.push(5,6);//Add elements to the end

numbers.unshift(1,2);//Add elements to the start

numbers.splice(2,0,'a','b');//Add elements to a given index

console.log(numbers);

console.log('------Finding Elements(Primitives)------');
const findNumbers = [1,2,3,4,5];
console.log('IndexOf:',findNumbers.indexOf(1,2));//returns the index of first occurence of an element and starts the search with the index passed in the second argument
findNumbers.splice(4,0,1);
console.log(findNumbers);
console.log('LastIndexOf:',findNumbers.lastIndexOf(1));//returns the index of last occurence of an element and starts the search with the index passed in the second argument
console.log('Includes:',findNumbers.includes(11));//returns true if the element exists otherwise false

console.log('------Finding Elements(Reference types)------');
const courses = [
  { id:1,name:'a'},
  { id:2,name:'b'}
];

const course = courses.find(function(course){//returns the first element that matches the criteria or undefined otherwise
  return course.name === 'a';
});
console.log('Find course:',course);