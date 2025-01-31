function Circle(radius) {
  //Instance members
  this.radius = radius;

  this.move = function() {
    console.log('Move');
    //this.draw();
  }
}

const c1 = new Circle(1);
const c2 = new Circle(2);
console.log(c1);

//Prototype  members
Circle.prototype.draw = function() {
  this.move();
  console.log('Draw');
}

// Circle.prototype.toString = function() {
//   return `Circle with radius ${this.radius}`;
// }



//Iterating instance and prototype members
console.log(Object.keys(c1)); //only returns instance members
for(let key in c1) { //Returns all members including instance nad prototype members
  console.log(key,c1.hasOwnProperty(key));
}