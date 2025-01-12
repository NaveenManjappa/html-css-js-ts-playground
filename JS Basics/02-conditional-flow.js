//Conditional flow
console.log('-----If else----');
let hour = 10;
if(hour >= 6 && hour < 12)
  console.log('Good morning');
else if(hour >= 12 && hour <18)
  console.log('Good Afternoon');
else
  console.log('Good Evening');

  //Switch case
console.log('-----Switch case----');
let role = 'guest';
let app ='scale';

switch(role,app) {
  case 'guest':
    console.log('Guest role');
    break;

  case 'moderator':
    console.log('Moderator role');
    break;
  
  default:
    console.log('Unknown role');

  console.log('The end');
}

//For loop
console.log('-----For loop----');
for(let i = 1;i <= 5;i++) {
  if(i % 2 !== 0) console.log(i);
}

//While loop
console.log('-----While loop----');
let i = 1;
while(i <=5){
  if(i % 2 !== 0) console.log(i);
  i++;
}

//Do While loop
console.log('-----Do While loop----');
let j = 9;
do {
  if(j % 2 !== 0) console.log(j);
} while(j < 5);

//For-in loop
console.log('-----For in loop----');
//used for iterating over the properties of an object or an array
const person = {
  name:'David',
  age:45
};

for(let key in person){
  console.log(key,person[key]);
}

const colors = ['red','green','blue'];
for(let index in colors){
  console.log(index,colors[index]);
}

//For-of loop
console.log('-----For of loop----');
for(let color of colors)
  console.log(color);

//Break continue
console.log('-----Break continue----');
let k = 0;
while(k <= 10){
  //if(k === 5) break; //breaks out of loop
  if(k % 2 === 0){
    k++;
    continue;//skips the iteration
  }
  console.log(k);
  k++;
}

//Exercise 1
console.log('-----1-Find maximum of two numbers----');
function findMaximum(number1,number2){
  const maximum = number1 > number2 ? number1 : number2;
  return maximum;
}

console.log('Max:',findMaximum(0,1));
console.log('Max:',findMaximum(1,1));
console.log('Max:',findMaximum(1,0));
console.log('Max:',findMaximum(-1,-10));