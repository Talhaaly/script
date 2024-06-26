// Array  Basics


// const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(myArr[2]);

// const myArr2 = new Array (0, 1, 2, 3, 4, 5, 6)

// const myHeros = ["Shahrukh", "Salman", "Amir"];

// console.log(myHeros[1]);


// Array Methods 



// push and pop 



// myArr.push(16)
// myArr.push(13)
// myArr.pop()
// console.log(myArr);



// shift and unshift 



// myArr.unshift(10)
// myArr.shift()
// console.log(myArr);



// includes and indexof 



// console.log(myArr.includes(8))
// console.log(myArr.includes(11))


// console.log(myArr.indexOf(8))
// console.log(myArr.indexOf(11))


// join 


// const newArr = myArr2.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);




// slice and splice 



// console.log("A", myArr)

// const myn1 = myArr.slice(1,3)

// console.log(myn1)
// console.log("B", myArr)


// const myn2 = myArr.splice(1,3)
// console.log("C", myArr)
// console.log(myn2);


// difference b/w slice & splice  
// slice main range include nhi hoti or old array wese e rehta hay

// splice main range include hoti hay or old array main say part nikal lyta hay ot old array me splice kai gaye item hat jaty hai. 







// const myArr = [1,2,3,4,5,6]

// console.log(myArr)


// Array Advance 


// const indian_heores = ["Ajay","Akshay","sunil"]
// const pak_heores = ["Amir","Salman","Shahrukh"]

// indian_heores.push(pak_heores) wrong method Array inside Array

// concat Method

// const all_heroes = indian_heores.concat(pak_heores)

// console.log(all_heroes);



// spread method use ... 

// const all_heroes = [...pak_heores, ...indian_heores];

// console.log(all_heroes);

// x-----------------------------------x-----------------------x------------------


// const nmArr = [1,2,3, [4,5,6], 7, [8,9,[4,5]]]

// const realArr = nmArr.flat(Infinity)

// // console.log(nmArr)
//  console.log(realArr)


// // isArray 

//  console.log(Array.isArray("Naheel"))


// //  from 
//  console.log(Array.from("Naheel"))



// Array of 

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3))








// let arr = [1, 2, 3];
// arr.push(4); // arr is now [1, 2, 3, 4]

// let arr = [1, 2, 3];
// arr.pop(); // arr is now [1, 2]


// let arr = ['a', 'b', 'c'];
// arr.shift(); // arr is now ['b', 'c']


// let arr = ['a', 'b', 'c'];
// arr.unshift('0'); // arr is now ['0', 'a', 'b', 'c']


// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 3); // newArr is now [2, 3]


// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 'a', 'b'); // arr is now [1, 2, 'a', 'b', 3, 4, 5]



// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = arr1.concat(arr2); // newArr is now [1, 2, 3, 4, 5, 6]



// let arr = ['Hello', 'World'];
// let str = arr.join(' '); // str is now 'Hello World'


// let arr = [1, 2, 3, 4, 5];
// arr.reverse(); // arr is now [5, 4, 3, 2, 1]


// let arr = [1, 5, 2, 4, 3];
// arr.sort(); // arr is now [1, 2, 3, 4, 5]


// ==========================================================================

// let arr = [1,2,3,4,5,6,7,8];
//  arr.forEach(element => {
//      let sum = element ** 2
//      console.log(sum);
// });

// console.log(arr);


// const bioData = {
// name : "Talha",
// age : 23,
// class : "web & app"
// }

// console.log(bioData);




// ==============================================

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(number => number * number);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// ==========================================================

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubled);

// =======================================================================

// const array = [1, 2, 3, 4, 5];

// array.forEach(function(element) {
//   console.log(element);
// });

// ==========================================================================================


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15


// =========================================================================================================

// const array = [1, 2, 3, 4, 5];

// // Find the first element greater than 3
// const found = array.find(element => element > 3);

// console.log(found); // Output: 4

// const numbers = [1, 2, 3, 4, 5, 6];

// // Filter out numbers greater than 3
// const filteredNumbers = numbers.filter(number => number > 3);

// console.log(filteredNumbers); // Output: [4, 5, 6]

// =====================================================================


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // Using the spread method to combine array1 and array2
// const combinedArray = [...array1, ...array2];

// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// function sum(...numbers) {
//     return numbers.reduce((accumulator, current) => accumulator + current, 0);
//   }
  
//   console.log(sum(1, 2, 3, 4)); // Output: 10


// ========================================================================================


// let fname = ['banana','apple','orange']

// let allFname = fname[fname.length-1]

// console.log(allFname); 



// const fruits = ['apple', 'banana', 'orange'];

// // Sort the fruits array alphabetically
// fruits.sort();

// console.log(fruits); // Output: ['apple', 'banana', 'orange']

// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(2, 3)); // Output: 6



// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// const { name: personName, age: personAge, city: personCity } = person;

// console.log(personName, personAge, personCity); // Output: Alice 30 New York



// const colors = ['red', 'green', 'blue'];

// const [color1, color2, color3] = colors;

// console.log(color1, color2, color3); // Output: red green blue


// function loopExample() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

// loopExample();




// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]




// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 15


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => {
//     console.log(number);
// });




// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 15


// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]




// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// function printPersonInfo({ name, age, city }) {
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// }

// printPersonInfo(person);


// function add(a, b) {
//     return a + b;
// }


// const number = 10;

// if (number > 5) {
//     console.log('Number is greater than 5');
// } else {
//     console.log('Number is less than or equal to 5');
// }


// const x = 5;
// const y = 10;

// if (x > 5 || y < 15) {
//     console.log('x is greater than 5 or y is less than 15');
// } else {
//     console.log('Neither x is greater than 5 nor y is less than 15');
// }


// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

// console.log(upperCaseFruits); // Output: ['APPLE', 'BANANA', 'ORANGE', 'GRAPE', 'KIWI']

// const person = {
//     name: 'Bob',
//     age: 25,
//     city: 'Los Angeles'
// };

// function printPersonInfo({ name, age, city }) {
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// }

// printPersonInfo(person);







// const a = 5;
// const b = 10;

// if (a > 3 && b < 15) {
//     console.log('a is greater than 3 and b is less than 15');
// } else {
//     console.log('Either a is not greater than 3 or b is not less than 15');
// }


// const object = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };

// function forEachArray(arr) {
//     arr.forEach(item => {
//         console.log(item);
//     });
// }

// const numbers = [1, 2, 3, 4, 5];
// forEachArray(numbers);



// const colors = ['red', 'blue', 'green', 'yellow'];

// const [firstColor, secondColor, ...remainingColors] = colors;
// console.log(firstColor); // Output: 'red'
// console.log(secondColor); // Output: 'blue'
// console.log(remainingColors); // Output: ['green', 'yellow']

// const user = {
//     username: 'john_doe',
//     email: 'john.doe@example.com',
//     age: 30
// };

// const { username, email, age } = user;
// console.log(`Username: ${username}, Email: ${email}, Age: ${age}`);





// function getDate() {
//     return new Date();
// }


// setInterval(() => {
//     console.log('Code generation is in progress...');
// }, 1000);


// setTimeout(() => {
//     console.log('Code generation is in progress...');
// }, 2000);



// function generateCode() {
//     console.log('Generating code...');
// }



// Function to be executed
// function myFunction() {
//     console.log('Code generation is in progress...');
// }

// // Set interval to run myFunction every 1000 milliseconds (1 second)
// setInterval(myFunction, 1000);




// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));



// Define a function
// function multiply(a, b) {
//     return a * b;
// }

// // Create an array and push function results into it
// let resultArray = [];
// resultArray.push(multiply(2, 3));
// resultArray.push(multiply(4, 5));

// console.log(resultArray); // Output: [6, 20]




// Define a function
// function multiply(a, b) {
//     return a * b;
// }

// // Create an object with a function property
// const myObject = {
//     myFunction: function(a, b) {
//         return multiply(a, b);
//     }
// };

// // Call the function within the object
// console.log(myObject.myFunction(2, 3)); // Output: 6






// Array Basics

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArr[2]);

// const myHeros = ["Shahrukh", "Salman", "Amir"];
// console.log(myHeros[1]);

// // Array Methods

// myArr.push(16);
// myArr.push(13);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(10);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.includes(11));

// console.log(myArr.indexOf(8));
// console.log(myArr.indexOf(11));

// const newArr = myArr.join();
// console.log(newArr);

// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log(myArr);

// const myn2 = myArr.splice(1, 3);
// console.log(myArr);
// console.log(myn2);

// // Array Advanced

// const indian_heores = ["Ajay", "Akshay", "sunil"];
// const pak_heores = ["Amir", "Salman", "Shahrukh"];

// const all_heroes = indian_heores.concat(pak_heores);
// console.log(all_heroes);

// const all_heroes2 = [...pak_heores, ...indian_heores];
// console.log(all_heroes2);

// const nmArr = [1, 2,]

























