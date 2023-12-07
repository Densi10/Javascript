
// this is called singleton object
const tinderUser = new Object();
tinderUser.id = "123abc",
tinderUser.name = "sammy",
tinderUser.isLoggedIn = false
// console.log(tinderUser);


// This is called linear object 
const regularUser = {
    email :"densi7777@gmail.com",
    fullName :{
        userFullName :{
            firstName:"Densi",
            lastName:"Sakhreliya"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:'a',2:'b',3:'c'};
const obj2 = {4:'d',5:'e',6:'f'};
// const obj3 = {obj1,obj2};

// merge object 
// const obj3 = Object.assign({},obj1,obj2) ;

// merge object with spread operator 
const obj3= {...obj1,...obj2};
// console.log(obj3);

const users =[
    {
        id:"1",
        email:"d123@gmail.com"
    },
    {
        id:"2",
        email:"d12@gmail.com"
    },
    {
        id:"3",
        email:"d3@gmail.com"
    }
]
// console.log(users[2].email);
console.log(tinderUser);

// console.log(Object.keys(tinderUser));  It returns array of keys of given object so we can loop it or do other things with it 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged')); it checks property is included in object or not 
