// REDUCE

const myNums = [1, 2, 3]

const newNums = myNums.reduce((acc, currval) => {
    // console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
}, 0);

// console.log(newNums);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'data science course',
        price: 12999
    },
    {
        itemName: 'java course',
        price: 3999
    },
]

const priceToPay =  shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);