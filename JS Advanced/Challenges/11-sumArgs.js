// Design a function sum that can take any number of arguments and return their total. The function should work for both fixed and variable number of arguments using JavaScript features. Only numerical arguments will be provided

function sum(...args){
  //console.log(args.length);
  if(args.length <= 0) return 0;
  const sum = args.reduce((p,c)=>{c=c+p;return c;},0);
  console.log(sum);

  
}

sum(1,2,3);
sum(10);
sum();
sum(5,-5,10,20);
sum(100,200,300,400);
