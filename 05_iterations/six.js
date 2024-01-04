// const coding = [ "js","ruby","python","java","cpp"];

// const values =  coding.forEach( (item) =>{
//     console.log(item);
//     return item 
// });

// console.log(values);

// conclusion is forEach loop does not rerturn any value even we manually return that will also not work

// FILTER 

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);


// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//    return num > 4
// });
// console.log(newNums);

// the conclusion of this two filter example is 
// if we open a {} , we have to add return keyword 
// if we don't open {}, then automatically return the value
// example :  filter( () => )
// example :  filter( () => {return value} )

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []

// myNums.forEach( (num) => {
//     if( num > 5) {
//        newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title : 'Book One', genre : 'history', publish :1981},
    {title : 'Book two', genre : 'comedy', publish :1991},
    {title : 'Book three', genre : 'history', publish :2001},
    {title : 'Book four', genre : 'romance', publish :2011},
    {title : 'Book five', genre : 'history', publish :2021},
];

let userBooks = books.filter( (bk) => bk.genre === 'history' )

    userBooks = books.filter( (bk) => bk.publish >= 2001 && bk.genre === 'history' )

console.log(userBooks);