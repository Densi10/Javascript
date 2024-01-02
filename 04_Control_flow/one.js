// const isUserLoggedIn = true
// const temparature = 41;

// if(temparature < 50){

//     console.log("temparature is less than 50");

// }else{
    
//     console.log("temparature is greter than 50");

// }

// const score = 200
// if(score > 100){
//     const power = " fly "
//     console.log(`power is : ${power}`);
// }

// console.log(`power is : ${power}`);

// short hand notation -> not to prefer

// const balance = 1000;

// if(balance > 500) console.log("test"),console.log("test2");

// Nested conditions 

// const balance = 1000;

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if(userLoggedIn && debitCard){
    console.log("Allow to buy course ");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user loggedIn successfully");
}