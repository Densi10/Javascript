// Dates 

// let myDate = new Date();
/////////// Every method shows different type of date like some changes the format ,format of time ,format of date, remove time etc.
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(typeof myDate); // type of date() is an object



// We can define any date according to requirement

 let createDate = new Date("12-23-2023");
// console.log(createDate.toLocaleDateString());

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.toLocaleString('default',{
    weekday : "long"
}));