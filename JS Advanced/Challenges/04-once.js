function once(fn){
  let called = false;
  let result;
  return function(...args){
    if(called)
      return result;
    else{
      try {
        
       result = fn.apply(this,args);
       called =true;
       return result;
      }
      catch(error){
        throw error;
      }
      
    }
     
  }
}
  


function add(a,b){
  return a+b;
}

const onceAdd = once(add);

console.log(onceAdd(1,2));
console.log(onceAdd(1,4));