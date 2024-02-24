const user = {
    username:"Densi",
    loginCount: 8,
    signedIn:true,
    getUserDetails : function(){
        console.log(`username is ${this.username}`);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedin){
    this.username = username,
    this.loginCount =loginCount,
    this.isLoggedin = isLoggedin
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Densi",11,true);
const userTwo = new User("priya",12,false);

console.log(userOne);
console.log(userTwo);

// NEW KEYWORD 
// step 1 : new keyword create an empty object
// step 2 : variable or function will pass on 
// step 3 : this keyword me value inject ho jayegi jo bhi variable or function passon huye he uski
// step 4 : we will get value