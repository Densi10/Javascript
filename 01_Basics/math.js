// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// MATH LIABRARY //----------------------------

// console.log(Math.abs(-4)); // It converts negative value into positive value
// console.log(Math.round(4.6)); // roundeup the float values properly
// console.log(Math.ceil(4.1));  // converts into high value
// console.log(Math.floor(4.9)); // converts into low value
// console.log(Math.sqrt(5));  // it gives squreroot of the given number 
// console.log(Math.pow(2,4)); // it gives the pover of X number to y times like 2*2*2*2 
// console.log(Math.random()*10); // it provides random numbers 
// console.log(Math.min(2,3,4,5,6,7)); // it returs minimum number 
// console.log(Math.max(2,3,4,6,5,7)); // it returns maximum number


// console.log(Math.floor(Math.random()*10 )+ 1) // to avoid 0 value we can + 1 to random value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1 )+ min ));