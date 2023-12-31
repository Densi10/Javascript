// function sum (a,b){
//   console.log(a+b);
// }
// sum(2,null);

// function sum (a,b) {
//     // let result = a+b;
//     // return result;
//   return a+b;
// }
// const result = sum(2,3);
// console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log('Please enter username...');
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage('priya'));

// ... =>   IT IS CALLED REST OPERATOR IT RETURNS AN ARRAY OF ENTERED VALUES IN ARGUMENTS
function calculateCartPrice(value1,value2,...num1){
  return num1;
};
// console.log(calculateCartPrice(500,200,400,700));

const user ={
    username :"Densi",
    price:50000000
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

const myArray = [1,2,3,4,5];
function getreturnvalue(getArray){
    return getArray[2];
}
console.log(getreturnvalue(myArray));