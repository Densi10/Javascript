const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}
// console.log(myObject);

for (const key in myObject) {
//    console.log(`${key} is shortcut for ${myObject[key]}`);
}


const programming = ["js","java","c++","py","ruby"]

for (const key in programming) {
    console.log(` ${key} :- ${programming[key]}`);
}

//  for in loop directly give us keys of object and arrays 

// also map is not iteratable in forin loop 