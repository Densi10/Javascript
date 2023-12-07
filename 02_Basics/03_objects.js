const mySym = Symbol('key1'); 

const myUser = 
{
    name : "Densi",
    age  : 19,
    location :" delhi",
    email : "denshi7777@gmail.com",
    [mySym] :"myValue",
    isLoggedIn : true,
    lastLoggedInDays :["Monday","Tuesday"]
}
// console.log(myUser['name']);
// console.log(myUser.age);
// console.log(myUser[mySym]);
myUser.email ="densi01@gmail.com"
Object.freeze(myUser);
myUser.email = "dennnnnnnn@gamil.com"
console.log(myUser);
