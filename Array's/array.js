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
