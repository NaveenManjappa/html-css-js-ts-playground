//'use strict'
const Circle = function() {
  this.draw = function() {
    console.log(this);
  }
}

const c = new Circle();
//Method call
c.draw();

const d = c.draw;
d();

class Circle1 {
draw() {
  console.log(this)
}
}

const c1 = new Circle1();
c1.draw();
const d1 = c1.draw;
d1();//by default the body of the class gets executed in strict mode
