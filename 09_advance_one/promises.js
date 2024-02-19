const promiseOne = new Promise((resolve,reject) => {
    // Do async task
    // DB calls, Network, Cryptography
    setTimeout(() => {
        console.log("async timeout task worked ");
        resolve();
    },1000);
});

promiseOne.then(() =>{
    console.log("promise worked !");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("task 2 resolved !");
});

const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username :"densi",email:"densi@dmail.com"});
    },1000)
})
PromiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
    if(!error){
        resolve({username:"Densi",password:"123"})
    }else{
        reject("ERROR ! something went wrong...")
    }
    },1000);
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("promise is either resolved or rejected !"))

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Javascript",password:"1234"})
        }else{
            reject("ERROR ! js error printed");
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//    try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//    } catch (error) {
//         console.log( error );
//    }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))