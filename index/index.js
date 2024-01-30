

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



// function outerFunction() {
//     let outerVariable = "I am from outerFunction";

//     function innerFunction() {
//       console.log(outerVariable);
//     }

//     return innerFunction;
//   }

//   // Create a closure by assigning the result of outerFunction to a variable
//   let closureExample = outerFunction();

//   // Call the inner function, which still has access to outerVariable
//   closureExample(); // Output: "I am from outerFunction"



// call Back Hell

// setTimeout(() => {
//     console.log('fun1');
//     setTimeout(() => {
//         console.log('fun2');
//         setTimeout(() => {
//             console.log('fun3');
//             setTimeout(() => {
//                 console.log('fun4');
//                 setTimeout(() => {
//                     console.log('fun5');
//                     setTimeout(() => {
//                         console.log('fun6');
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// let num = 0;

// setInterval(() => {
//     console.log(num ++);
// }, 2000);

// =========================================================================================


// AJaX
// const container = document.querySelector("#container")

// const req = new XMLHttpRequest()
// req.open('GET', "https://restcountries.com/v3.1/name/pakistan")

// req.send();

// // to get the response

// req.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText)
//     //    document.write(data.flag);
//     //    document.write(data.capital);
// // const htmlData = ``
// })



// JSON.stringify() / JSON.parse()

// let my_obj = {key_1 : "some text", key_2 : true, key_3 : 3}
//  let obj_as_string = JSON.stringify(my_obj)
// console.log(my_obj);
// console.log(obj_as_string);
// console.log(JSON.parse(obj_as_string));


























































































































