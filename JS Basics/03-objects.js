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
console.log('-----Constructor Functions----');
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
new Function();//new function

let x='';
console.log(x.constructor);

//Functions are objects
console.log('-----Functions are objects----');
function CircleObject(radius){
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

console.log('Func name:',CircleObject.name);
console.log('Func length:',CircleObject.length);

const otherCircle = {};
CircleObject.call(otherCircle,1);
CircleObject.apply({},[1,2,3]);
console.log(otherCircle);

const Circle10 = new Function('radius',`
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
`);

const another = new Circle10(1);
console.log(another);

//Value types(Primitives) - Number,String,Boolean,Symbol,undefined,null -- copied by their value
//Reference types(Objects) - Objects,functions and arrays -- copied by their reference
console.log('-----Value vs Reference types----');
let xx = 10;
let y = xx;

xx = 20
console.log('xx:',xx);

let number = 10;
let marks = { total:0 };

function increase(number,marks){ //only value gets copied
  number++;
  marks.total++;
}
increase(number,marks);
console.log('Number:',number);
console.log('Marks:',marks.total);

console.log('-----Enumerating object properties----');

const circleObj = {//object literal
  radius:1,
  draw:function(){
    console.log('draw');
  }
};

for(let key in circleObj)
  console.log(key);

for(let key of Object.keys(circleObj))
  console.log(key);

for(let entry of Object.entries(circleObj))
  console.log(entry);

if('draw' in circleObj) console.log('Yes');

console.log('-----Cloning an object----');
const anotherCircleObj = {};
// for(let key in circleObj)
//   anotherCircleObj[key]=circleObj[key];
// console.log(anotherCircleObj);

// const otherCircleObj = Object.assign({color:'red'},circleObj);//copies properties and methods from one or more source objects into target object and combines them into one
// console.log(otherCircleObj);

const yetAnotherCircle = { ...circleObj };//Spread operator - gets all properties and methods and puts them into new object
console.log(yetAnotherCircle);
