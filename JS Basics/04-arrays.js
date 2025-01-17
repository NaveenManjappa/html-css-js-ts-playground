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

console.log('------Arrow Functions------');
const coursesA =[
  { id:1,name:'a'},
  { id:2,name:'b'}
];

console.log(coursesA.find(course => course.name === 'a'));

console.log('------Removing elements------');
const numbers1 = [1,2,3,4,5,6];
const last = numbers1.pop();//removes and returns the last element
console.log('Last:',last);

const first = numbers1.shift();//removes and returns the first element
console.log('First:',first);

console.log(numbers1);
console.log('Splice:',numbers1.splice(2,2));//removes/deletes the elements at given index

console.log('------Emptying an array------');
let numbers2 = [1,2,3,4,5,6,7];
let another = numbers2;

//Solution 1
//numbers2 = [];

//Solution 2
//numbers2.length = 0;

//Solution 3
//numbers2.splice(0,numbers2.length);

//Solution 4
while(numbers2.length > 0)
  numbers2.pop();

console.log(numbers2);
console.log(another);

console.log('------Combining arrays------');
const firstA = [1,2,3];
const secondA = [4,5,6,7];

const combined = firstA.concat(secondA);
console.log('Combined:',combined);

const slice = combined.slice(2,5);
console.log('Slice:',slice);

const spreadA = ['a',...firstA,'b',...secondA,'c'];
console.log('Spread:',spreadA);

console.log('------Iterating an array------');
let numbers3 = [1,2,3,4,5,6,7];
for(let number of numbers3)
  console.log(number);

numbers3.forEach((number,index)=> console.log(index,number));

console.log('------Joining array------');
const numbers4 = [1,2,3,4,5,6];
const joined = numbers4.join('-');
console.log('Joined:',joined);

const title = 'Creating an array in JavaScript';
const parts = title.split(' ');
console.log('Parts:',parts);
const urlSlug = parts.join('-');
console.log('UrlSlug:',urlSlug);

console.log('------Sorting an array------');
const numbers6 = [3,4,1,2];
console.log(numbers6.sort());
console.log('Numbers:',numbers6);
console.log(numbers6.reverse());

const coursesB = [
  { id:1, name:'Node.js'},
  { id:2, name:'javaScript.js'},
  { id:3, name:'CSS'},
  { id:4, name:'HTML' }
];

coursesB.sort((first,second)=>{
  // > -> 1, < -> -1, === -> 0
  const nameA = first.name.toUpperCase();
  const nameB = second.name.toUpperCase();
  console.log(nameA,nameB);
  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return 0;
});