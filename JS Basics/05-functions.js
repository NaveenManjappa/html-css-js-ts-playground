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

console.log('---------This keyword---------');
//method -> obj
//function -> global or window
//regular function -> this refers to window object in the browser and global in node
//function inside an object(method) -> this refers to the object
//this refers to the object which is executing the function

const video = {
  title:'a',
  tags:['x','y','z'],
  start() {
    console.log(this)
  },
  showTags() {
    this.tags.forEach(function(tag){
      console.log(this.title,tag);
    },this)//callback function here outside the execution context of forEach,we can pass the outer this context to callback function of some methods which otherwise takes window object as default for this context
  },
  showTagsSelf() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log('self',self.title,tag);
    });
  },
  showTagsBind() {
    this.tags.forEach(function(tag) {
      console.log('Bind',this.title,tag);
    }.bind(this))//using the bind method to provide/change the context for this
  },
  showTagsArrow() {
    this.tags.forEach(tag => console.log('Arrow',this.title,tag));//arrow functions inherit the this context from the containing function
  }
};

video.start();
video.showTags();
video.showTagsSelf();
video.showTagsBind();
video.showTagsArrow();

//In Constructor function this refers to the object NEW keyword creates
function Audio(title) {
  this.title = title,
  this.display = function() {
    console.log(this);
  }
}

const audio = new Audio('abc');
audio.display();

function playVideo(a,b) {
  console.log(this);
}

playVideo();//this points to window object
playVideo.call({ name:'John' },1,2);//calls the function with the passed context or object for this
playVideo.apply({ name:'Mary' },[1,2,3]);//similar to call function but arguments are passed in an array
playVideo.bind({ name: 'Dave' },1,2)();//bind returns a new function after setting the context for this



