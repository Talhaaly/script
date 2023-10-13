              
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







