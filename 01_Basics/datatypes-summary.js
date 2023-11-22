// Two types of javascript 

// 1. Primitive (call by value)
  // there are 7 types included in primitive datatypes :
  // Number,String,null,undefined,BigInt,Bolean,symbol

// 2. Non-primitive (call by reference)
 // array , objects , functions 


//  // dynamically typed language
// JavaScript is a dynamically typed language,
//  which means that data types of variables are determined by the value
//   they hold at runtime and can change throughout the program 
//   as we assign different values to them. //

//////// MEMORY LOCATION ACCORDING TO DATATYPES //////////

// There are two types of memory :

//  1 . Stack Memory and 2. Heap Memory
//  =>  primitive     &     Non-primitive
//  =>  Copy of data  &     Real value reference 

let myName = "DensiSakhreliya"
let myNewName = myName ;
 myNewName = "Densi" ;

console.log(myName);
console.log(myNewName);

let userOne = {
  email : "123@gmail.com",
  mobile : "2213456700"
}
let userTwo = userOne ;
userTwo.email = "abc@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);