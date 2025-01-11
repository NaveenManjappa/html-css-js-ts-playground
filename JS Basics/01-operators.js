console.log('--------Operators------');

//Arthmatic operators
console.log('--------Arithmatic Operators------');
let x = 10;
let y = 3;
x+y // this is an expression

console.log('Addition:',(x + y));
console.log('Subtraction:',x - y);
console.log('Multiplication:',x * y);
console.log('Division:',x / y);
console.log('Remainder:', x % y);
console.log('Power:', x ** 3);

//Increment
console.log('Increment:',x++);
console.log('Increment:',x);

//Decrement
console.log('Decrement:',--x);
console.log('Decrement:',x);

//Assignment operators
console.log('--------Assignment Operators------');
let a = 10;

a = a + 5;
a += 5;
a *= 5;
console.log('Assignment:',a);

//Comparision operators
console.log('--------Comparision Operators------');
let b = 1;

//Relational
console.log('>:',b > 1);
console.log('>=',b >= 1);
console.log('<',b < 1);
console.log('<=', b<= 1);

//Equality
console.log('===', b === 1);
console.log('!==', b !== 1);

//Equality operators
console.log('--------Equality Operators------');

//Strict equality operator (Type + Value)
console.log('1===1', 1 === 1);
console.log("'1' === 1", '1' === 1);

//Loose equality operator (Convert the type of right side value to match with left side and compare the value)
console.log('1 == 1', 1 == 1);
console.log("'1' == 1", '1' == 1);
console.log('true == 1',true == 1);
console.log("1 == '1",1 == '1');
console.log('1 == true',1 == true);

//Ternary Operator
console.log('--------Ternary Operator------');
let points = 10;
let type = points > 100 ? 'Gold' : 'Silver';
console.log('Type:',type);

//Logical Operators
console.log('--------Logical Operators------');
//Logical AND (&&) returns true if all the operands are TRUE
//Logical OR (||) returns true if any of the operands return true
//NOT (!) negates the given operand
let highIncome = true;
let goodCreditScore = false;

console.log('AND:',highIncome && goodCreditScore);
console.log('OR', highIncome || goodCreditScore);
console.log('NOT',!(highIncome || goodCreditScore));

//FALSY - undefined,null,'',0,false,NaN
//TRUTHY - anything other than falsy value is a Truthy value

//Short Circuting - refers to the behavior of logical operators && (AND) and || (OR) where they may not evaluate all operands depending on the first operand's value
// && (AND) operator
// If the first operand is false, it returns immediately without evaluating the second operand
false && console.log("This won't run")  // Returns false, console.log never executes

// || (OR) operator
// If the first operand is true, it returns immediately without evaluating the second operand
true || console.log("This won't run") 

let userColor ;
let defaultColor = 'blue';

let currentColor = userColor || defaultColor;
console.log('Current Color:',currentColor);

//Bitwise Operators
console.log('--------Bitwise Operators------');
//  1 = 00000001
//  2 = 00000010
//1|2 = 00000010
//1&2 = 00000000
console.log('1|2:',1 | 2);
console.log('1&2:',1 & 2);

//Access control system - Read, Write, Execute
//                        00000100, 00000010,00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;//Bitwise OR for adding
console.log('My permission:',myPermission);

let message = myPermission & readPermission ? 'Yes' : 'No'; //Bitwise AND for checking
console.log('Message:',message);

//Operartors precedence
console.log('--------Operators precedence------');
console.log('Precedence:', 2 + 3 * 4 / 2 );

//Exercide
let d = 'red';
let e = 'blue';

let t = d;
d = e;
e = t;

console.log('d:',d);
console.log('e:',e);


