'use strict'; // We are in strict mode!

const myObj = {
  name: 'My Object',
  regularMethod: function() {
    console.log('1. Regular Method:', this.name);

    const innerFunction = function() {
      // What is 'this' here?
      console.log('2. Inner Regular Function:', this);
    };
    innerFunction();

    const innerArrow = () => {
      // What is 'this' here?
      console.log('3. Inner Arrow Function:', this.name);
    };
    innerArrow();
  },
  arrowMethod: () => {
     // What is 'this' here?
     console.log('4. Arrow Method:', this);
  }
};

function standaloneFunction() {
  // What is 'this' here?
  console.log('5. Standalone Function:', this);
}

// Calls that trigger the logs:
myObj.regularMethod();
myObj.arrowMethod();
standaloneFunction();