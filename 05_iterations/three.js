// for of loop 

// const myArray = [1,2,3,4,5]

// for (const num of myArray) {
//     console.log(num);
// }

// const greetings = 'Hello world'

// for (const greet of greetings) {
//     console.log(greet);
// }

/////   MAPS

const map = new Map()
map.set('IN',"India");
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");

// console.log(map);

for (const[key,value] of map) {
    // console.log(key ,":-",value);    
}

////  Objects 

const myObject = {
    'game1' : "marvel",
    'game2' : "puzzle"
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }

// conclusion is forof loop does not work on objects it works on maps but not in objects 