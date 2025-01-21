console.log('---------Function declaration and expression---------');
walk();//works because of hoisting
//Function declaration
function walk() {
  console.log('Walk');
}

//Anonymous function expression
const run = function() {
  console.log('run');
};

const move = run;
run();
move();

console.log('---------Arguments---------');
function sum() {
  console.log(arguments);
  const total = Array.from(arguments).reduce((acc,cv) => acc + cv,0 );
  return total;
}

console.log(sum(1,2,3,4,5,10,15,20,40));

console.log('---------Rest operator---------');
function add(discount,...args) {//Rest parameter must be last formal parameter
  return args.reduce((a,b) => a + b);
}

console.log(add(1,2,3,4,5));