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
