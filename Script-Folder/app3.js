// var a=10;
// var b=20;
// if(a < b){
//     alert("Correct");
// };

// var c=10;
// var d=10;
// if(c==d){
//     document.write("syntex is right")
// }

// document.write('<br>')
// var teacher=prompt("teacher is sufiyan")
// if(teacher.toLowerCase("sufiyan")=="sufiyan"){
//     document.write('yes your teacher is sufiyan');
// }
// else{
//     document.write("not your teacher");
// };

// =================x===============x=====================


// var geek = ["Ali", "Talha", "Saim", 56, "Sultan"];

// for (let i = 0; i < geek.length; i++) {
//     console.log(i);
// }


// x=============x============================x==============


// let name = prompt("What is your Name ?");
// let age = prompt("What is your Age ?");
// let relation = prompt("Your Relation ?");
// const invitationCard = prompt("Do you have invitation Card ? ");

// if ((name == "talha" || "ejaz" || "Amin"|| "daniyal" || "hawaij") &&
// (age >= 18) &&
// (relation == "friend "|| "cousion" || "brother") &&
// (invitationCard == "yes"))
// {
//     alert("your Welcome...");

// }else {
//     alert("you can't come, beacaus you are not invited");
// }


// x===================x==============================================x



// let arrName = ["talha", "ejaz", "amin", "hawaij", "owais", "daniyal"];

// for (let i = 0; i <= arrName.length; i++) {
//     console.log(i)
//     console.log(arrName)

// }

// x=======================x===================================x

// function apple (){
//     console.log("tmhy apple lana hay, bazar say khareed kar")
//     console.log("phir apple ko pieces karna hay")
//     console.log("phir uska Juice nikalna hay")
//     console.log("phir us juice ko glass ma nikalna hay")
//     console.log("phir us juice k glass ko mujhy lakr dyna hay")
// }

// apple();



// x----------------------------x--------------------------------------------x--------------------------------x

// x=====================================x==============28-09-23===============x===============================


// Arrays.and.loops


// const languages = ['javascript', 'oops', 'pyrhon'];


// console.log(languages.length); ====> 3

// console.log(languages[1])    ===> change [0],[2];


// languages.push('C++')
//      ===>      last main add hogi (push) method say
// console.log(languages)



// languages.unshift('dart');
//            =====>      start main add hogi (unshift) method say
// console.log(languages);



// languages.pop();
//                   =====>  end say remove hogi (pop) method say
// console.log(languages)



// languages.shift()
// ===========> strat sy remove hogi (shift) method say
// console.log(languages);

// ======================================x===============================x================

// console.log('*');
// console.log('*');
// console.log('*');
// console.log('*');
// console.log('*');

// =========> (for loop) is use for multiple line print
// for(let i = 0; i < 5; i++) {
//     document.write("*")
// }


// ================================x======================================x======================



// const actors = [
// {
//     name : "salman",
//     payment: 110000
// },

// {
//     name : "shahrukh",
//     payment: 120000
// },
// {
//     name : "Amir",
//     payment: 130000
// }

// ];

// for(let i = 0; i < actors.length; i++ ) {
//     actors[i].payment =  actors[i].payment - 10000
//     // console.log(actors[i])
// }


//  use loop (forEach) function in array


// actors.forEach(function(actor) {
//     actor.payment = actor.payment - 10000
// // console.log(actor)
// })





// use (for of) function in Array

// for (let actor of actors) {
//     actor.payment = actor.payment - 10000
//     // console.log(actor)
// }


// console.log(actors)

// x------------------------------------x-----------------------------------------------------x



//  array filter  (agr array kay result main koi chz nh chahye)




// const students = [
//     {name : 'Talha', marks: 95},
//     {name : 'fahim', marks: 85},
//     {name : 'asad', marks: 75},
//     {name : 'subhan', marks: 35}
// ]


// const failed =students.filter(function(result) {
// // console.log(result)
// // return true
// if(result.marks < 45) {
//     return true;
// }else{
//     return false;
// }
// });


// console.log(failed);
// console.log(students);


// x---------------------------------x-----------------------------------------------------------x

// Array Map Method


// const users = [
//     {
//         firstName: "Talha",
//         lastName: "Ali"
//     },

//     {
//         firstName: "Saim",
//         lastName: "Ali"
//     }
// ]


// const fUname = users.map(function(user){
//     return {
//         fullName: user.firstName + " " + user.lastName
//     }
// })


// console.log(fUname);




// --------------------x------------------------------------------x-------------------------------x


// Array Reduce Method

// const movies = [
//     {
//         name : "Tiger",
//         budget : 500
//     },
//     {
//         name : "Jawan",
//         budget : 1000
//     },
//     {
//         name : "Kick",
//         budget : 1500
//     },
//     {
//         name : "Funtoosh",
//         budget : 2000
//     }
// ]


// // foreach method check
// let total = 0;
//  movies.forEach(function(movie){
// total = total + movie.budget
// })

// console.log(total)




// // Use Reduce Method

// const total = movies.reduce((acc , movie)=>{
// acc = acc + movie.budget
// return acc ;
// }, 0)

// console.log(total)



// --------------x-------------------------x----------------------------------------x


// Array indexof Method

// const admins = [2, 103, 5];
// const user = {
//     name : "Talha",
//     iD : 103
// }

// // const isAdmin = admins.indexOf(user.iD) > -1;
// // console.log(isAdmin);

// // or

// // includes method


// console.log(admins.includes(user.iD))


// x---------------------------------------------x-------------------------x


// find method


// const users = [
//     {
//         name : "xyz",
//         id : 1
//     },

//     {
//         name : "bqr",
//         id : 2
//     },

//     {
//         name : "cpl",
//         id : 3
//     }
// ]


// const myUser = users.find((user)=>{
//     if(user.id === 2){
//         return true
//     }
// return false
// })


// console.log(myUser)






// x-----------------------------------x------------------------------x


// sort method


// const names = ["john", "ali", "sameer", "rahul", "faizan", "zubair", "naeem", "haroon", "kamran"];

//  names.sort()

//  console.log(names)



// x==================x====================================================x 


// splice method 

// const names = ["john", "ali", "sameer", "rahul", "faizan", "zubair", "naeem", "haroon", "kamran"];


// names.splice(1,2)

// console.log(names)



// x=======================================x=======================================x=======================


// var cleanestCities = ["karachi", "Lahore", "islamabad", "Sukkur", "peshawar", "Multan", "sialkot"];
// var cityToCheck = prompt("Enter Your City");
// cityToCheck = cityToCheck.toLocaleLowerCase();
// for(let i = 0; i <= cleanestCities.length; i++){
//     if(cityToCheck === cleanestCities[i]){
//         alert(`${cityToCheck} one of the cleanest city`)
//     }
// }





// x=======================================x=======================================x=======================



// var cityToCheck = prompt("Enter Your City");
// var firstChar = cityToCheck.slice(0,1);
// var someChars = cityToCheck.slice(1);
// firstChar =firstChar.toUpperCase();
// someChars = someChars.toLowerCase();
// var combine = firstChar + someChars;
// console.log(combine);


// ==========================================================================================================



// JavaScript program for  
// simple mathematical calculations 
  
// // Add two numbers 
// function add(num1, num2) { 
//     return num1 + num2; 
// } 
// // Function for subtraction 
// function subtract(num1, num2) { 
//     return num1 - num2; 
// } 
  
// // For multiplying of two numbers 
// function multiply(num1, num2) { 
//     return num1 * num2; 
// } 
// // Function for division of 
// // two numbers 
// function divide(num1, num2) { 
// if(num2 === 0) return undefined; 
//     return num1 / num2; 
// } 
// // Creating variable  
// // for operation 
// let operation = '+'; 
  
// // Creating variables for 
// // num1 and num2 
// let num1 = 4; 
// let num2 = 5; 
  
// // Creating result variable 
// let result; 
  
// // Switch case statement 
// switch (operation) { 
//     case "+": 
//         result = add(num1, num2); 
//         break; 
//     case "-": 
//         result = subtract(num1, num2); 
//         break; 
//     case "*": 
//         result = multiply(num1, num2); 
//         break; 
//     case "/": 
//         result = divide(num1, num2); 
//         break; 
//     default: 
//         result = "Invalid operation"; 
// } 
// // Printing the final result 
// console.log("The Result of this operation is : " + result);
// ==========================================================================

// const fruits = ['Apple', 'Banana', 'Cherry'];

// // Destructuring the array
// const [firstFruit, secondFruit] = fruits;

// console.log(firstFruit); // Output: Apple
// console.log(secondFruit); // Output: Banana


// const person = {
//     name: 'John Doe',
//     age: 30,
//     location: 'New York'
//   };
  
//   // Destructuring the object
//   const { name, age, location } = person;
  
//   console.log(name); // Output: John Doe
//   console.log(age); // Output: 30
//   console.log(location); // Output: New York