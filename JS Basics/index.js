console.log('Hello world from the index.js file')

//Variables
console.log('-----Variables----')
let name = 'Navi';
console.log('Name:',name);

//Variable names
//1.Cannot be reserved words in JS
//2.Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
//3.Cannot contain space or hyphen or any special character except _ and $
//4.They are case sensitive
//5.Cannot contain special characters except _ and $

//Use camelCase for regular variables and functions
//Use PascalCase for classes

let name1 = 'Navin'
console.log('name1:',name1)

//Constants
console.log('-----Constants----')
const interestRate = 0.3;
//interestRate = 1 //this will throw TypeError:Assignment to constant variable
console.log('interestRate:',interestRate);

let firstName='John',lastName; //multiple variable declaration is allowed
console.log('FirstName:',firstName);

//Primitive types
console.log('-----Primitive types----')
let empName = 'David'; //String literal
console.log('Type of empname is:',typeof empName);

let age = 35; //Number literal
console.log('Type of age is:',typeof age);

let isApproved = false; //Boolean literal
console.log('Type of isApproved is:',typeof isApproved);

let lastEmpName = undefined; //undefined type
console.log('Type of undefined is:',typeof lastEmpName);

let selectedColor = null// null type
console.log('Type of null is:',typeof selectedColor);

//Objects
console.log('-----Objects----')
let person = { 
  name:'Mary',
  age:40
}; //Object literal

console.log(person);

//Dot notation
person.name = 'David';
console.log('Dot notation:',person.name);
//Bracket notation
person['name'] = 'Joe';
console.log('Bracket notation:',person['name']);

//Arrays
console.log('-----Arrays----')
let selectedColors = ['red','blue'];//Array literal
console.log('SelectedColors:',selectedColors);
selectedColors[2]='green';//the length and items in an array are dynamic
console.log('Length:',selectedColors.length);//returns the number of elements in the array

//Functions
console.log('-----Functions----')
//Performing a task
function greet(firstName,lastName){//parameters
  console.log('Greet:','Hello'+' '+firstName + ' '+ lastName);//function body
}

greet('John','Smith');//arguments
greet('David');

//Calculating a value
function square(number){
  return number*number;
}

console.log('Square:',square(2));

console.table([{ name: "John", age: 30 }]); // Displays data in tabular format
