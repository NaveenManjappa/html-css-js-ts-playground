function createCounter(){
  let count = 0;
  return {
    increment: function() {
      count++;
    },
    getCount:function(){
      return count;
    }
  }
}

let myCounter = createCounter();

myCounter.increment();
myCounter.increment();

let myCounter2 = createCounter();
myCounter2.increment();

console.log(myCounter.getCount());
console.log(myCounter2.getCount());

//Function factories
function createLogger(prefix){
  let logPrefix = '[' + prefix +'] ';

  function logMessage(message){
    console.log(logPrefix + message)
  }

  return logMessage;
}

let authLogger = createLogger('Auth Service');
let orderLogger = createLogger('Order Service');

authLogger('Login successful');
orderLogger('Order placed!');

//Module pattern
let myModule = (function(){
  let privateCounter = 0;

  function privateIncrement(){
    privateCounter++;
  }

  function publicGetCounter(){
    return privateCounter;
  }

  function publicIncrement(){
    privateIncrement();
  }

  return {
    getCounter: publicGetCounter,
    increment: publicIncrement
  }
})();

myModule.increment();
myModule.increment();
console.log(myModule.getCounter());
