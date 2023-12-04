// ARRAY 

 const myArr1 = [0,1,2,3,4,5];
// const myArr2 = new Array(0,1,3,4,6,7,8);
// console.log(myArr1[0]);
// console.log(myArr2[2]);

// Array Methods 

// myArr1.push(7);  // Add given element at the end of the array
// myArr1.pop();  // remove last element of an array
// myArr1.unshift(8); // Add given element at the end of the array
// myArr1.shift(); // remove first element from the array

// console.log(myArr1.includes(9)); // includes return boolean value if given element is present in array then it will return true if not then false
// console.log(myArr1.indexOf(5));  //it returns index number of given element

// const newArr = myArr1.join();
// console.log(typeof newArr);
// console.log(myArr1);

// slice, splice 

console.log("A ", myArr1);

const myna1 = myArr1.slice(0,3); // it returns copy of section betwwen start and end index number which given by user here, 0 is start and 3 is end it doesn't affecxt of real array 
console.log(myna1);
console.log("slice : ",myArr1);

const myna2 =myArr1.splice(0,3);// it substract the portion of given index number from real array 
console.log(myna2);
console.log("splice :",myArr1);