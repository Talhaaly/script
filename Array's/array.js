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











