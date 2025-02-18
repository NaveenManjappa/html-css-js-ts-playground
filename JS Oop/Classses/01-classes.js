class Circle {
  constructor(radius){
    this.radius = radius;
    this.move = function() { console.log('Move') }
  }

  //method
  draw() {
    console.log('Draw');
  }
}

const c = new Circle(1);//calling without new operator will result in error
console.log(c)