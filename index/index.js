

// use strict 

// x = "Talha"

// console.log(x);


// synchronous 

// const fun2 = () => {
//     console.log(`function 2`);
// }

// const fun1 = () => {
// console.log(`function 1`);
// fun2()
// console.log('function 1 again');
// }

// fun1()


// Asynchronous


// const fun2 = () => {
//     setTimeout(() => {
//         console.log(`function 2`);
//     }, 2000);
// }

// const fun1 = () => {
// console.log(`function 1`);
// fun2()
// console.log('function 1 again');
// }

// fun1()




// function currying 

// sum (5)(3)(8)
// d/f 
// sum(5,3,8)

// function sum (num1) {
//     // console.log(num1);
//     return function (num2) {
//         // console.log(num1,num2);
//         return function(num3){
//             console.log(num1,num2,num3);
//         }
//     }
// }


// sum(5)(3)(8)



// const curryAdd = a => b => c => a + b + c;

// const curriedAdd = curryAdd(2)(3)(4);
// console.log(curriedAdd); // Output: 9



function outerFunction() {
    let outerVariable = "I am from outerFunction";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by assigning the result of outerFunction to a variable
  let closureExample = outerFunction();
  
  // Call the inner function, which still has access to outerVariable
  closureExample(); // Output: "I am from outerFunction"
  
















































































































































