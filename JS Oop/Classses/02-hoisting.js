sayHello();//Able to call the function before declaration as it's hoisted
//sayBye();//Results in error as it's not hoisted
//Function declaration
function sayHello() {
  console.log('Hello');
}

//Function expression
const sayBye = function() { console.log('Bye'); }; 

//const c = new Circle();
//const s = new Square();//both the above statements are invalid as classes are not hoisted

class Circle {
  constructor(radius){
    this.radius = radius;
  }
}

const Square = class {
  constructor(length){
    this.length = length;
  }
}