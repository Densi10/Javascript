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