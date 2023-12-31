const user ={
    username :"Densi",
    price : 999,
    welcomeMessage : function (){
        console.log(`${this.username} , welcomne to website`);
        console.log(this);
    }
}

//  user.welcomeMessage();
// user.username = "priya";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username ="aakash"
//     console.log(this.username);
// }
// chai();

/////// the conclusion of this concept is that this is work only in objects not on functions...

// const chai = function(){
//     let username ="aakash"
//     console.log(this.username);
// }
// chai();

// const chai =() => {
//     let username ="aakash"
//     console.log(this);
// }
// chai();

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username :"hitesh"})
console.log(addTwo(3,4));
