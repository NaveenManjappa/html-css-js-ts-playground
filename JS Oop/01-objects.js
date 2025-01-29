//Object literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  draw: function() {
    console.log('Draw-Object literal');
  }

};//object literal


circle.draw();

//Factory function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 2
    },
    draw: function() {
      console.log('Draw-Factory function');
    }
  
  }
}

const other = createCircle();
other.draw();
console.log(other.constructor);

//constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Draw-Constructor function');
  }
}

const circleObj = new Circle(2);
console.log(circleObj);


//Functions are objects
console.log(Circle.constructor);

const Circle1 = new Function('radius',`
  this.radius = radius;
  this.draw = function() {
    console.log('Draw-Constructor function');
  }`);

  const circle1 = new Circle1(1);
  console.log(circle1);

  Circle.call({},1);

  //Adding or removing properties
  const another = new Circle(10);
  another.location = { x: 1};
  console.log(another['location']);
  //delete another.location;
  console.log(another);

  //Enumerating properties
  for(let key in another){
    if(typeof another[key] !== 'function')
      console.log(key,another[key]);

  }

  const keys = Object.keys(another);
  console.log(keys);
  if('radius' in another)
    console.log('Circle has a radius');

