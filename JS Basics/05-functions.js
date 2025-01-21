console.log('---------Function declaration and expression---------');
walk();//works because of hoisting
//Function declaration
function walk() {
  console.log('Walk');
}

//Anonymous function expression
const run = function() {
  console.log('run');
};

const move = run;
run();
move();

console.log('---------Arguments---------');
function sum() {
  console.log(arguments);
  const total = Array.from(arguments).reduce((acc,cv) => acc + cv,0 );
  return total;
}

console.log(sum(1,2,3,4,5,10,15,20,40));

console.log('---------Rest operator---------');
function add(discount,...args) {//Rest parameter must be last formal parameter
  return args.reduce((a,b) => a + b);
}

console.log(add(1,2,3,4,5));

console.log('---------Default parameters---------');
function calculateInterest(principal,rate=3.5,years=5){
  return principal * rate / 100 * years;
}

console.log(calculateInterest(10000));

console.log('---------Getters and Setters---------');
//get - access the property
//set - change/mutate the property

const person = {
  firstName:'John',
  lastName:'Smith',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  set fullName(value){
    if(typeof value !== 'string')
      throw new Error('Value is not a string');

    const parts = value.split(' ');

    if(parts.length !== 2)
      throw new Error('Enter first name and last name');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}
console.log('Fullname:',person.fullName);
person.fullName = 'Adam Green';
console.log(person);

console.log('---------Error Handling---------');

try {
  //person.fullName = null;
  person.fullName = '';
}
catch(e){
  //alert(e);
  console.log(e.message);
}

console.log('---------Global vs Local scope---------');
const color = 'red';//global scope variable
function start() {
  const message = 'hi';
  const color = 'blue';//local scope variables take precedence over global scope variable
  console.log(message,color);

  for(var i=0;i < 5; i++){
    console.log(i);
  }

  console.log(i);
}

function stop() {
  const message = 'stop';
  console.log(message,color);
}

start();
stop();

console.log('---------Var vs let---------');
//var - creates function scoped variable
//let - creates block scoped variables
var backColor = 'red';//attaches the variable to window object
let cc;
console.log(window.backColor,cc);
function sayhi() {//attached the function to window object
  console.log('Say hi');
}
window.sayhi();


