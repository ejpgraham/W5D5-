function sum(num1, num2, num3){
  let sum = 0;

  // to turn this into an array we can use Array.from
  let args = Array.from(arguments);
  //we can use forEach on args if we want

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// console.log(sum(5,4,3,1,2,4));

// NOTE arguments is an array-like object that is NOT an array,
// you cannot call forEach on it.


function restSum(...nums){
  let sum = 0;
  nums.forEach(function(ele){
    sum += ele;
  });
  return sum;
}

// console.log(restSum(5,4,3,1,2,4));

// write es5 method first

Function.prototype.myBind = function (context) {
  const bindTimeArgs = [];

  for (let i = 1; i < arguments.length; i++) {
    bindTimeArgs.push(arguments[i]);
  }

  const func = this;

  return function() {
    // debugger
    const callTimeArgs = Array.from(arguments);
    // can't use fat arrow function with this approach
    // 'arguments' will be the arguments of the outer function
    // not the ones passed to the fat arrow function
    func.apply(context, bindTimeArgs.concat(callTimeArgs));
  };
};

Function.prototype.myBind = function (context, ...bindTimeArgs) {
  const func = this ;

  return function(...callTimeArgs) {
    // we COULD use fat arrow function here because we don't worry about
    // arguments 
    func.apply(context, bindTimeArgs.concat(callTimeArgs));
  };

};

function curriedSum(numArgs){
  const numbers = [];

  function _curriedSum(num){
    numbers.push(num);

    if (numbers.length === numArgs){
      let sum = 0;
      numbers.forEach(function(ele){
        sum += ele;
      });
      return sum;
    }else{
      return _curriedSum;
    }

  }
  return _curriedSum;
}

const sums = curriedSum(4);
console.log(sums(5)(30)(20)(1)); // => 56

// user .prototype.apply and spread
Function.prototype.curry = function(numArgs) {
  let args = [];
  const func = this;

  function _curriedFunc(num){
    args.push(num);

    if (args.length === numArgs){
      return func.apply(null, args); // .apply - context is irrelevant b/c
      // we are calling curry on original function. The original function does
      // not depend on the context.
      // (...args);
    } else {
      return _curriedFunc;
    }
  }
  return _curriedFunc;
};

console.log(restSum.curry(5)(5)(4)(1)(2)(6));
