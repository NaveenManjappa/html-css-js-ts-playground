console.log('-----Objects----');
//Object oriented programming
const circle = {
  radius: 1,
  location: {
    x:1,
    y:1
  },
  isVisible:true,
  draw: function(){
    console.log('draw');
  }
};

circle.draw();//method

//Factory function
console.log('-----Factory Functions----');
function createCircle(radius){
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

circle1 = createCircle(1);
console.log(circle1);
circle2 = createCircle(2);
console.log(circle2);

//Constructor function
console.log('-----Constructor Functios----');
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}
const circle3 = new Circle(3);
console.log(circle3);

//Dynamic nature of objects
const circle4 = {
  radius: 1
};
circle4.color = 'yellow';
circle4.draw = function() {
  console.log('draw');
}
console.log(circle4);


delete circle4.color;
delete circle4.draw;
console.log(circle4);

//Constructor property
//every object has a constructor property that represents the constructor function that was used to create it
console.log(circle1.constructor);
console.log(circle3.constructor);
new String(); // '',"",``
new Boolean();// true,false
new Number();// 1,2,3 ...

let x='';
console.log(x.constructor)
