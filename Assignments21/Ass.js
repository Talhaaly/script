
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


































