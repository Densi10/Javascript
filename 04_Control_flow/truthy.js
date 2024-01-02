// falsy values : 

// false , 0 , -0 , bigInt 0n , null , undefined , NaN

// truthy values :

// 'false' , "0" , " " , [] , {} , function(){}


// const emptyArray = [];

// if(emptyArray.length === 0){
//     console.log("array is empty");
// }

// const emptyObject = {}
// if(Object.keys(emptyObject).length === 0){
//     console.log("object is empty");
// }

// Nullish calescing operator (??) :  null undefined 

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// val1 = undefined ?? 15

// console.log(val1);

//// Ternary operator 

// condition : true ? false

const value = 20

value >=10 ? console.log("condition is true") : console.log("condition is false");