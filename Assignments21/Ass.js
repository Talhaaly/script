              
               // Assignment 21 -25 


// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.



// const firstName = prompt('What Is your First Name ?');
// const lastName = prompt('What Is Ypur Last Name ?');
// const fullName = (firstName + " " + lastName);
// alert(fullName);




// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser.




// const phoneModel = prompt('What Is Your Favorite mobile Phone Moldel ?')
// console.log(phoneModel.length);





// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.




// const country = "PAKISTANI";
// const countryIndexNo = country.indexOf("N");
// console.log(countryIndexNo);







// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser





// const text = "Hello World";
// const result = text.lastIndexOf("l")
// console.log(result);







// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.






// const names = "Pakistani";
// console.log(names[3]);








// 6. Repeat Q1 using string concat() method.



// concat 

// const firstName = prompt('What Is your First Name ?');
// const lastName = prompt('What Is Ypur Last Name ?');

// const fullName = firstName.concat(" " +lastName);
// console.log(fullName);



// Spread Method 

// const fullName  = [...firstName, ...lastName] 
// console.log(fullName);











// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.








// const text = "Hyderabad";
// const result = text.replace("Hyderabad", "Islamabad");
// console.log(result);












// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;







// var message = "Ali and Sami are best friends.They play cricket and football together.";

// var change = message.replace("and", "&");
// console.log("Not Replace ====>", message);
// console.log( 'Replace===>', change);











// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.



// let num1 = "472"
// let num2 = +"472"
// console.log(typeof (num1), "without +")
// console.log(typeof (num2), "with +")














// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.








// const userInput = prompt("write Something...?");

// alert(userInput.toUpperCase())












// 11. Write a program that takes user input. Convert and 
// show the input in title case.









// const userInput = "javascript";
// const titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1);
// console.log(titleCase);





















// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.




// var num = 35.36;

// var result = num.toString();
// console.log(result.replaceAll('.', ""))

// console.log(typeof(result));
















// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64













// var userInput = prompt("Write a User Name ?");

// var sign = /[^a-zA-Z0-9]/gi;
// // To remove all special characters from a string, call the replace() method on the string, passing a whitelisting regex and an empty string as arguments, i.e., str.replace(/^a-zA-Z0-9 ]/g, '').The replace() method will return a new string that doesn't contain any special characters.
// if (sign.test(userInput)) {

//     alert("this User Name Is not Valid")

// } else {
//     alert(`User Name Is Valid ${userInput}`)
// }












// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. 




// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userSearch = prompt("wlecom to my Bakers, Whta do you want to oder?");
// let checkIn = "Available";
// let matchFound = false;

// for( let i = 0; i < bakeryItems.length; i++){
//     if(bakeryItems[i] === userSearch){
//         matchFound = true;
//         alert(`${bakeryItems[i]} is ${checkIn} at index ${[i]}`);

//     }
// }
// if(matchFound == false){
// alert(`We Are Sorry ${userSearch} is not ${checkIn} in Our Bakery`)
//     }
















// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.











// const password = prompt("Enter your Password");
// const matchPws = false;
// for(let i = 0; i < password.length; i++){
//     if(isNaN(parseInt(password[i]))){
//         console.log(`Enter Password ${password}`);
//         matchPws = true;
//         break
//     }else{
//         alert(`Password con not begin with a number.`);
//         break
//     }
// }if(isNaN(parseInt(password.length))< 6){
//     alert('Please Enter a Valid Password')
// }


















// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.






// var university = "University of Karachi";

// var result = university.split(" ");

// console.log(result);
// console.log(result[1]);














// 17. Write a program to display the last character of a user 
// input.




// let str = "javascript";
// let res = str.charAt(str.length -1)
// console.log(res)












// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.







// function gfg() {
//     let s = "the quick brown fox jumps over the lazy dog";
//     let f = "the";
//     let r = s.split(f).length - 1;
//     console.log(r);
// }
// gfg()















// Assignment 26-30 

// MATH METHODS 

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number




// const input = +prompt("write a positive integer");

// const input_round = Math.round(input)
// const input_floor = Math.floor(input)
// const input_ceil = Math.ceil(input)


// console.log(input_round);
// console.log(input_floor);
// console.log(input_ceil);














// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number








// const input2 = +prompt("write a negative integer");

// const input2_round = Math.round(input2)
// const input2_floor = Math.floor(input2)
// const input2_ceil = Math.ceil(input2)


// console.log(input2_round);
// console.log(input2_floor);
// console.log(input2_ceil);












// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5





// let num = +prompt("Write a -ve Number");

// let absolute = Math.abs(num);

// console.log(absolute);












// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:









// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;

//     document.getElementById('dice').innerText = dice;
// }
// document.getElementById('dice').innerText = 6;







// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser





// function toss() {
//     let toss = Math.floor(Math.random() * 2 ) + 1 
//     if (toss == "1 ") {
//         document.getElementById('toss').innerText = "head"
//     } else if (toss == "2") {
//         document.getElementById('toss').innerText = "tail"

//     }

// }













// // question 06

// let num = Math.floor(Math.random() * 100) + 1
// console.log(num)


// // question 08

// let secretNum = Math.floor(Math.random() * 10) + 1 ;
// console.log(secretNum)
// let user_trys = prompt("write a number between 1 to 10")

// if (user_trys == secretNum) {
//     alert("congrats")
// } else if (user_trys == secretNum + 1 || user_trys == secretNum - 1 ) {
//     alert("you are very close.")
// } else {
//     alert("sorry")
// }





// 31 - 34 


// // question 01

// let current_date = new Date()
// console.log(current_date);


// // question 02

// let current_date = new Date()

// let months = [
//     "jan",
//     "feb",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "aug",
//     "sep",
//     "oct",
//     "nov",
//     "dec"
// ]
// let current_month_index = current_date.getMonth()
// let current_month_name  = months[current_month_index]
    
// console.log(current_month_name);


// question 03

// let date = new Date()

// let days = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
// ]
// let dayIndex = date.getDay()
// let dayName = days[dayIndex]
// let slice_day = dayName.slice(0,3)
// console.log(slice_day);


// question 04

// const myDate = new Date()

// let days = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
// ]

// let dayIndex = myDate.getDay()

// let dayName = days[dayIndex]

// if (dayName == "saturday" || "sunday") {
//     alert("today is fun day.")
// }
// console.log(dayName);


// question 05

// let date = new Date()
// let just_date = date.getDate()

// if (just_date <= 15) {
//     console.log("first fifteen days of the month.");
// }


// question 06

// let change_date = new Date()

// let change_time = change_date.getTime()

// let Minutes = change_time / (1000 * 60) 
// let Seconds = change_time / (1000 * 60) / 60
// console.log("Minutes since midnight, Jan. 1, 1970: " + Minutes);
// console.log("Seconds since midnight, Jan. 1, 1970: " + Seconds);



// // question 07

// let date = new Date()
// console.log(date);

// if (date.getTime() >= "0:00:00" && date.getTime() <= "11:59:59" ) {
//     log("am")
// } else {
//     console.log("pm");
// }


// question 08

// let laterDate = new Date("dec, 31 , 2020")
// console.log(laterDate);


// question 09

// let ramzanDate = new Date("june,18,2015") 
// let current_date = new Date()
// let calculate = current_date - ramzanDate
// const days_since_ramadan = Math.floor(calculate / (1000 * 60 * 60 * 24));
// console.log(days_since_ramadan);


// question 10

// let current_date = new Date()
// let refrenceDate = new Date('january,1,2023')
// let elapsedSeconds = Math.floor((current_date - refrenceDate) / 1000);
// console.log(elapsedSeconds);


// question 11

// let date = new Date()
// let current_hour = date.getHours()
// date.setHours(current_hour - 1);
// console.log("its 1 hour ago " + date);
// console.log(new Date());


// question 12

// let date = new Date()
// date.setFullYear(date.getFullYear() - 100) 
// alert(date);


// question 13

// let userAge = prompt("write your age here....")
// userAge = parseInt(userAge)

// let currentYear = new Date().getFullYear()
// let birthYear = currentYear - userAge
// console.log(birthYear);


// question 14

// let userName = prompt("writh your name..")
// let month = prompt("writh month..")
// let numOfUnits = prompt("write your units here....")
// let chargesPerUnits = 10
// let NetAmountPayable = chargesPerUnits * numOfUnits;
// let latePayment = NetAmountPayable + 100;
// let GrossAmountPayable = latePayment + latePayment;

// console.log("name = " + userName);
// console.log("month = " + month);
// console.log("number Of Units = " + numOfUnits);
// console.log("charges Per Units = " + chargesPerUnits);
// console.log("Net Amount Payable = " + NetAmountPayable);
// console.log("late Payment = " + latePayment);
// console.log("Gross Amount Payable = " + GrossAmountPayable);












// 35- 38  



// // question 01

// function currentTime() {
//     return new Date()
// }

// console.log(currentTime());


// // question 02

// let fName = prompt("write your first name.")
// let lName = prompt("write your last name.")

// function greetTheUser() {
//     return fullName = `hello ${fName} ${lName}`
// }

// alert(greetTheUser())


// question 03

// let userInputNum1 = +prompt('write a first value')
// let userInputNum2 = +prompt('write a second value')

// function add2Values() {
//     return userInputNum1 + userInputNum2
// }

// console.log(add2Values());


// question 04

// function calculator(num1,num2,opreator) {
//     num1 = +prompt("write a number")
//     num2 = +prompt("write a second number")
//     opreator = prompt("wirte a opreator.")

//     if (opreator == "+") {
//         let calculate = num1 + num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     } else if (opreator == "-") {
//         let calculate = num1 - num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     }  else if (opreator == "*") {
//         let calculate = num1 * num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     } else if (opreator == "/") {
//         let calculate = num1 / num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     }
// }

// calculator()


// question 05

// function square() {
//     let num = prompt("write a number.")
//     result = num ** 2
//     console.log(`the square of your ${num} is ${result}`);
//     return result;
// }

// square()


// question 07

// function counter() {
//     let start =  prompt("write a starter number...")
//     let end =  prompt("write a ending number...")

//     if ( isNaN(start) || isNaN(end) ) {
//         return alert("sorry this is not a number.")
//     } else {
//         for (i = start; i <= end ; i++) {
//             console.log(`${i}`);
//         }
//     }
// }

// counter()


// question 09 


// function calculateAreaOfTriangle(width,height) {
//     area_of_a_rectangle = width * height
//     return area_of_a_rectangle;
// }

// let width = prompt("writh a width")
// let height = prompt("writh a height")

// console.log(calculateAreaOfTriangle(width,height));


// question 11

// function capitalizeEachWord(input) {
//     const words = input.split(' ');

//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

//     const resultString = capitalizedWords.join(" ");

//     return resultString;
// }

// const input = prompt("write a text");
// const outputString = capitalizeEachWord(input);
// console.log(outputString);


// question 12

// function calcCircumference(radius) {
//     if (typeof radius !== 'number' || isNaN(radius) || radius <= 0) {
//         return "Invalid radius. Please provide a positive numeric value.";
//     }

//     // Calculate the circumference using the formula C = 2 * π * r
//     const circumference = 2 * Math.PI * radius;

//     return `The circumference is ${circumference.toFixed(2)}`;
// }

// const radius = +prompt("write a radius.");
// const result = calcCircumference(radius);
// console.log(result);


