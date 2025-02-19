class Shape {
  constructor(color){
    this.color = color;
  }

  move(){
    console.log('Move');
  }
}

class Circle extends Shape {
 
  constructor(color,radius){
    super(color);
    this.radius = radius;
  }
  
  draw(){
    console.log('Draw');
  }

  move(){
    super.move();
    console.log('Circle move');
  }
}

const c = new Circle('Red',1);
console.log(c);
c.move();
c.draw();