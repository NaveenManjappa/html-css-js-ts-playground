function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 10, y: 10}; //private property
  let computeOptimumLocation = function() {//private method
    console.log('Compute optimum location');
  }

  this.draw = function() {
    let x, y;
    console.log('Draw');
    computeOptimumLocation();
  }

  Object.defineProperty(this,'defaultLocation',{
    get:function() {
      return defaultLocation;
    },
    set: function(value) {
      if(!value.x || !value.y)
          throw new Error('Invalid setter');

      defaultLocation = value;
    }
  });
}

const circle = new Circle();
circle.draw();
console.log(circle.defaultLocation);
circle.defaultLocation = { x:1 }
