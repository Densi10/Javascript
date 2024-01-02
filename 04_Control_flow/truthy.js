// falsy values : 

// false , 0 , -0 , bigInt 0n , null , undefined , NaN

// truthy values :

// 'false' , "0" , " " , [] , {} , function(){}


const emptyArray = [];

if(emptyArray.length === 0){
    console.log("array is empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}